const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const modeButtons = Array.from(document.querySelectorAll("[data-mode]"));
const resetButton = document.getElementById("reset");
const modeLabel = document.getElementById("mode-label");
const waveTimerLabel = document.getElementById("wave-timer");
const cellInfo = document.getElementById("cell-info");

const Modes = {
  tower: "tower",
  wall: "wall",
  trench: "trench",
  pool: "pool",
};

let currentMode = Modes.tower;

const COLS = 80;
const ROWS = 60;
const size = COLS * ROWS;

const heights = new Float32Array(size).fill(0);
const water = new Float32Array(size).fill(0);
const nextWater = new Float32Array(size).fill(0);
const cellType = new Uint8Array(size).fill(0); // 0=sand,1=tower,2=wall

const maxHeight = 4;
const minHeight = -3;

const flowRate = 10; // base flow rate
const flowBiasX = 1.25; // boost horizontal spread to match vertical speed
const flowBiasY = 1.0;
const dampening = 0.02;
const evaporation = 0.002;

const currentPush = 0.22; // directional push to the right per step

const waveInterval = 3;
let waveTimer = waveInterval;
let waveDirection = "left";

let cellW = 10;
let cellH = 10;
let isPointerDown = false;

function idx(x, y) {
  return y * COLS + x;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function resetWorld() {
  heights.fill(0);
  water.fill(0);
  nextWater.fill(0);
  cellType.fill(0);
  waveTimer = waveInterval;
}

function applyAction(x, y) {
  if (x < 0 || y < 0 || x >= COLS || y >= ROWS) return;
  if (currentMode === Modes.tower) {
    const radius = 3;
    const r2 = radius * radius;
    for (let dy = -radius; dy <= radius; dy++) {
      for (let dx = -radius; dx <= radius; dx++) {
        if (dx * dx + dy * dy > r2) continue;
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= COLS || ny >= ROWS) continue;
        const ni = idx(nx, ny);
        heights[ni] = clamp(heights[ni] + 1, minHeight, maxHeight);
        cellType[ni] = 1;
      }
    }
  } else if (currentMode === Modes.wall) {
    const i = idx(x, y);
    heights[i] = clamp(heights[i] + 0.6, minHeight, maxHeight);
    cellType[i] = 2;
  } else if (currentMode === Modes.trench) {
    const trenchSize = 2;
    for (let dy = 0; dy < trenchSize; dy++) {
      for (let dx = 0; dx < trenchSize; dx++) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= COLS || ny >= ROWS) continue;
        const ni = idx(nx, ny);
        heights[ni] = clamp(heights[ni] - 0.7, minHeight, maxHeight);
        cellType[ni] = 0;
      }
    }
  } else if (currentMode === Modes.pool) {
    const radius = 3;
    const r2 = radius * radius;
    for (let dy = -radius; dy <= radius; dy++) {
      for (let dx = -radius; dx <= radius; dx++) {
        if (dx * dx + dy * dy > r2) continue;
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= COLS || ny >= ROWS) continue;
        const ni = idx(nx, ny);
        heights[ni] = clamp(heights[ni] - 0.4, minHeight, maxHeight);
        cellType[ni] = 0;
      }
    }
  }
}

function resistanceFor(type) {
  if (type === 2) return 1.5;
  if (type === 1) return 1.0;
  return 0.0;
}

function simulateWater(dt) {
  nextWater.set(water);

  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const i = idx(x, y);
      const w = water[i];
      if (w <= 0.0001) continue;

      let remaining = w;
      const surface = heights[i] + w + resistanceFor(cellType[i]);

      const neighbors = [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1],
      ];

      for (const [nx, ny] of neighbors) {
        if (nx < 0 || ny < 0 || nx >= COLS || ny >= ROWS) continue;
        const ni = idx(nx, ny);
        const neighborSurface =
          heights[ni] + water[ni] + resistanceFor(cellType[ni]);
        const diff = surface - neighborSurface; // positive means neighbor is lower
        if (diff > 0 && remaining > 0) {
          const bias = nx !== x ? flowBiasX : flowBiasY;
          const flow = Math.min(remaining, diff * flowRate * bias * dt);
          if (flow > 0) {
            nextWater[i] -= flow;
            nextWater[ni] += flow * (1 - dampening);
            remaining -= flow;
          }
        }
      }
    }
  }

  // Directional push to the right to help waves advance faster.
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS - 1; x++) {
      const i = idx(x, y);
      const ni = idx(x + 1, y);
      const transferable = water[i] * currentPush * dt;
      if (transferable > 0.0001) {
        nextWater[i] -= transferable;
        nextWater[ni] += transferable;
      }
    }
  }

  for (let i = 0; i < size; i++) {
    const evaporated = evaporation * dt;
    nextWater[i] = Math.max(0, nextWater[i] - evaporated);
  }

  water.set(nextWater);
}

function spawnWave() {
  const width = 3;
  for (let y = 0; y < ROWS; y++) {
    const amp = 0.5 + 0.35 * Math.sin((y / ROWS) * Math.PI);
    for (let x = 0; x < width; x++) {
      const cx = waveDirection === "left" ? x : COLS - 1 - x;
      const i = idx(cx, y);
      water[i] += amp;
    }
  }
}

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const rectW = canvas.clientWidth || 800;
  const rectH = canvas.clientHeight || 600;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  canvas.width = rectW * dpr;
  canvas.height = rectH * dpr;
  ctx.scale(dpr, dpr);
  cellW = rectW / COLS;
  cellH = rectH / ROWS;
}

function sandColor(height) {
  const base = 220 + Math.round(height * 6);
  const r = clamp(base + 10, 0, 255);
  const g = clamp(base - 5, 0, 255);
  const b = clamp(base - 30, 0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function render() {
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();

  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const i = idx(x, y);
      const h = heights[i];
      ctx.fillStyle = sandColor(h);
      ctx.fillRect(x * cellW, y * cellH, cellW + 1, cellH + 1);

      if (cellType[i] === 1 || cellType[i] === 2) {
        ctx.fillStyle = cellType[i] === 1 ? "rgba(90,70,40,0.8)" : "rgba(70,60,50,0.9)";
        ctx.fillRect(
          x * cellW + cellW * 0.15,
          y * cellH + cellH * 0.15,
          cellW * 0.7,
          cellH * 0.7
        );
      }
    }
  }

  ctx.fillStyle = "rgba(64, 136, 200, 0.7)";
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const i = idx(x, y);
      const depth = water[i];
      if (depth <= 0.01) continue;
      const alpha = clamp(depth * 0.4, 0.05, 0.8);
      ctx.fillStyle = `rgba(64,136,200,${alpha})`;
      ctx.fillRect(x * cellW, y * cellH, cellW + 1, cellH + 1);
    }
  }
}

function pointerToCell(event) {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor(((event.clientX - rect.left) / rect.width) * COLS);
  const y = Math.floor(((event.clientY - rect.top) / rect.height) * ROWS);
  return [x, y];
}

function updateCellInfo(x, y) {
  if (x < 0 || y < 0 || x >= COLS || y >= ROWS) {
    hideCellInfo();
    return;
  }
  const i = idx(x, y);
  const h = heights[i];
  const w = water[i];
  if (cellInfo) {
    cellInfo.style.display = "block";
    cellInfo.textContent = `Cell (${x}, ${y})  Height: ${h.toFixed(
      2
    )}  Water: ${w.toFixed(2)}`;
  }
}

function hideCellInfo() {
  if (cellInfo) {
    cellInfo.style.display = "none";
  }
}

canvas.addEventListener("pointerdown", (e) => {
  isPointerDown = true;
  const [x, y] = pointerToCell(e);
  applyAction(x, y);
  updateCellInfo(x, y);
});

canvas.addEventListener("pointermove", (e) => {
  const [x, y] = pointerToCell(e);
  if (isPointerDown) applyAction(x, y);
  updateCellInfo(x, y);
});

canvas.addEventListener("pointerup", () => {
  isPointerDown = false;
});
canvas.addEventListener("pointerleave", () => {
  isPointerDown = false;
  hideCellInfo();
});

// Fallback for browsers without pointer events
canvas.addEventListener("mousedown", (e) => {
  isPointerDown = true;
  const [x, y] = pointerToCell(e);
  applyAction(x, y);
  updateCellInfo(x, y);
});
canvas.addEventListener("mousemove", (e) => {
  const [x, y] = pointerToCell(e);
  if (isPointerDown) applyAction(x, y);
  updateCellInfo(x, y);
});
window.addEventListener("mouseup", () => {
  isPointerDown = false;
});

modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => setMode(btn.dataset.mode));
});

function setMode(mode) {
  currentMode = mode;
  modeButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });
  modeLabel.textContent = `Mode: ${mode.charAt(0).toUpperCase() + mode.slice(1)}`;
}

resetButton.addEventListener("click", () => {
  resetWorld();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "1") setMode(Modes.tower);
  else if (e.key === "2") setMode(Modes.wall);
  else if (e.key === "3") setMode(Modes.trench);
  else if (e.key.toLowerCase() === "p") setMode(Modes.pool);
  else if (e.key.toLowerCase() === "r") resetWorld();
});

function update(dt) {
  waveTimer -= dt;
  if (waveTimer <= 0) {
    spawnWave();
    waveTimer = waveInterval;
  }
  simulateWater(dt);
  waveTimerLabel.textContent = `Next wave in: ${waveTimer.toFixed(1)}s`;
}

let last = performance.now();
let accumulator = 0;
const fixedDt = 1 / 60;

function loop(now) {
  const elapsed = Math.min((now - last) / 1000, 0.1);
  last = now;
  accumulator += elapsed;
  while (accumulator >= fixedDt) {
    update(fixedDt);
    accumulator -= fixedDt;
  }
  render();
  requestAnimationFrame(loop);
}

window.addEventListener("resize", () => {
  resizeCanvas();
});

function init() {
  if (!canvas || !ctx || !modeLabel || !waveTimerLabel || !resetButton) {
    console.error("Initialization failed: missing DOM nodes.");
    return;
  }
  setMode(Modes.tower);
  resetWorld();
  resizeCanvas();
  waveTimerLabel.textContent = `Next wave in: ${waveTimer.toFixed(1)}s`;
  requestAnimationFrame(loop);
}

if (document.readyState === "complete" || document.readyState === "interactive") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}
