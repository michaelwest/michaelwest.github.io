# Super Simple D&D
A simplified ruleset to help make playing D&D more accessible, in order to encourage new narratives.

## Motivation
D&D provides a great framework for imaginative thinking. But its complex rules are intimidating for prospective players and even more so for prospective DMs. Even the [Basic Rules](https://www.dndbeyond.com/sources/basic-rules) have fifteen chapters and four appendices. The unofficial [Simple DND](https://simplednd.wordpress.com/) is shorter again, but still longer than necessary. This is a barrier for people with interesting narrative ideas from expressing those in a game. Complex rules also dramatically slow the pace of gameplay for inexperienced players, implying a greater time commitment. 

The goal here is to produce something at the complexity level of a moderate board game. It is focused on one-shot adventures rather than levelling up over time; it is also mainly focused on early characters, but could be extended for higher-level characters. There is an emphasis on encouraging role-playing through allowing DM and players discretion within a general framework, rather than strict enumeration of abilities, items and situations.

## Player Characters
### Abilities
- Characters have five abilities: **STR, INT, DEX, CON, CHA**.
- These are expressed purely as a modifier, rather than an underlying value which maps to a modifier. So STR 1 means +1 to all strength checks.
- Borrowing from Simple DND, the approach is that each ability must be between +3 and -3, with an overall total no higher than +5. (This is before modifications from race, class, or magic items.) So a character may have STR +3, CON +2, DEX +1, INT 0, CHA -1.

### Races
- Race adds +1 to one score and +1 to skills in a certain area. 
- Races are: 
  - **Human**: +1 STR, +1 on conversation-related skill checks
  - **Dwarf**: +1 CON, +1 on resilience-related skill checks
  - **Elf**: +1 INT, +1 on perception-related skill checks
  - **Halfling**: +1 DEX, +1 on stealth-related skill checks
  - **Ork**: +1 CON, +1 on physical-related skills checks

### Classes
- Class adds +1 to one score. Class also provides a dice that is used for hit dice and for weapon damage (see below on equipment).
- Use of class features (magic, feats of strength, etc) is inherent in ability scores: a fighter can try using magic but given likely low INT, will probably fail.
- Classes are:
  - **Fighter**: +1 STR, d10
  - **Wizard**: +1 INT, d6
  - **Rogue**: +1 DEX, d8; may use DEX for melee attacks
  - **Adventurer**: +1 to any one score, d8 -- open class for any other character that a player wants to use, e.g. Bard with +1 CHA
- Variant classes are just absorbed into the main classes and role-played differently:
  - Fighter: Paladin, Barbarian, etc
  - Wizard: Cleric, Monk, etc
  - Rogue: Ranger, etc
- **Hit points**: Initial HP is class dice + CON.

### Equipment
- Complexity of equipment is significantly de-emphasised so that users can focus on role-playing / what's cool to them.
- **Weapons**: Players can have arbitrary weapon/s as appropriate. See attacks below.
- **Armour**: There are three choices with associated Armour Class (AC):
  - Light: AC = 11 + DEX.
  - Medium: AC = 14 + DEX (max +2 from DEX) 
  - Heavy: AC = 17, must have STR 2 to wear, -2 to DEX checks
- **Equipment**: Players can have arbitrary other equipment that seems appropriate - including default gear like torches, rope, and flasks, and anything class- or race-specific they think to add, like lock picks or a musical instrument. You might want a trinket from the [Trinkets table](https://www.dndbeyond.com/sources/basic-rules/equipment#Trinkets).

## Mechanics
### Skills & Checks
- There are no skills to be selected. Skill bonuses are inherent in the choice of ability scores. If you want to be good at stealth, get more DEX.
- Skill checks are taken with a d20 + relevant ability against DC chosen by DM (10 = Easy, 20 = Hard, 30 = Almost impossible)
- The "relevant ability" can be chosen by the DM but guidelines are:
  - STR: Lifting, carrying, pushing, breaking, jumping, climbing, wrestling
  - DEX: Balancing, sneaking, hiding (character or object), stealing, lockpicking/trap disabling
  - INT: Recognising, perceiving, finding, healing, magic (including disabling magic traps)
  - CHA: Interacting, deceiving, performing, persuading
- Passive checks (e.g. does the party notice something) can be taken by the DM, with 10 + relevant ability against the DC.

### Combat
- Roll for **initiative** using d20 + DEX ability; take turns in initiative order.
  - If surprise is achieved (e.g. character's stealth check beats enemy's perception check), that character gets a free turn before anything else.
- On each turn, move and take one action. Everyone has the same speed - decide for each battle what is appropriate based on the terrain.
- **Actions**:
  - Melee attack: attack adjacent square, use STR (Rogue may use DEX) to hit, damage = class dice + STR
  - Ranged attack: attack non-adjacent square, use DEX, damage = class dice
  - Cast a spell (see spells)
  - Perform any normal check action e.g. hide, climb, leap, wrestle, heal
  - Use an object / interact with environment - DM may define some tasks as taking multiple turns (e.g. hauling up a drawbridge)
  - Dash: move again as your action
  - Ready: reserve your action for something you want to happen instantly on the enemy's turn, if they do something (e.g. pull a trap when they stand on it)
- **Attacks**:
  - Attack rolls are d20 + ability modifier + any magical weapon modifier; and must be greater than target Armour to hit.
  - On a successful hit, they do the amount of damage for their class dice. For example, a fighter might be using a sensible longsword or maniacally waving two morningstars, but either way it's a d10 for damage. Magic weapons may add additional damage at DM's discretion.
  - An unmodified roll of 20 always hits regardless of AC, and is a critical hit - roll two dice instead of one.
- Damage types - can be introduced only when needed at the DM's discretion:
  - An enemy may be resistant, immune or highly susceptible to certain types of damage. Adjust however seems appropriate.
  - Weapons or spells may put a character or enemy into a state (e.g. on fire, poisoned) that does a bit more damage in subsequent turns.
- **Cover**: Partial cover behind an obstacle gives +2 AC, full cover prevents attack.
- **Dying**: The nature of these rules is that stakes should generally be lower than real D&D, and the risk of true character death minimised. At 0 HP, a character falls unconscious. Each turn, they lose 2 HP unless healed or stabilised. The DM may choose to set a threshold where the character actually dies.
- **Morale**: At the DM's discretion, players may be required to make a CHA save (DC as appropriate to odds) or start to flee. Enemies can flee or surrender at DM's discretion.


## Spells
- Each character has (3*INT) spellcasting points (i.e. mana) which are depleted by casting and replenished by a long rest. 
- Spells may also be cast for free when provided by a scroll or other magic item.
- Spells do not need to be memorised ahead of time.
- DC for saves against spells is 10 + INT.
- Concentration: persistent spells like levitate or hold person are broken by taking damage or casting another one.

### Spell list
**Targeted spells** can be cast at one of three tiers. A spell at tier N costs N points to cast and can only be cast by a player with INT of at least N.

| Spell | Description | Tier 1 | Tier 2 | Tier 3 | Save |
| --- | --- | --- | --- | --- |
| **Missile** | Shoot magic darts; auto hits | 3 darts, each d6 | 3 darts, each d6 | 4 darts, each d8 | None |
| **Blast** | Fire, cold, acid or poison blast | d6 damage in 10-foot square | 2d6 damage in 10-foot square | 3d6 damage in 15-foot square | Attack |
| **Levitate** | Raise an object or character | Levitate up to 10 kg, slowly | Levitate up to 200 kg, slowly | Character up to 200 kg can fly | CON |
| **Deception** | Deceive another | Disguise self and/or +5 to persuasion attempt | Target is charmed | Character is invisible | INT |
| **Slow** | Slow an enemy | Enemy has half movement | Enemy paralysed | Enemy falls asleep | CON |
| **Heal** | Restore hit points | Restore 1d8 | Restore 1d8 + 3 | Restore 1d8 + 5 | N/A |
| **Shield** | Protect a character | +5 AC | +5 AC and +5 to saves | +5 AC and immune to type damage (e.g. cold) | N/A |
| **Agility** | Assist a character's movement | Double character's jump distance | Double character's movement | Character can spider climb | N/A |

**Environmental spells** affect the general environment and cost 2 points:
  - Enlarge/Reduce - double/halve a character or object in all dimensions, +/- d4 to damage, CON save
  - Feather Fall - no falling damage on up to five targets
  - Fog Cloud - ten squares are filled with dense fog which provides partial cover
  - Grease - five squares become slippery, DEX check to stand
  - Light - 20-foot radius

## Adventures
### Monsters & Encounters
- A good reference for key monsters is at [Simple DND Monsters](https://simplednd.wordpress.com/monsters/).
- Note suggestion of (total party levels * ~100) = (aggregate XP score of monsters) for a reasonable encounter.
- A party should be able to handle about 6-8 encounters in a day.
- Encounters can be modified (including on the fly) to make them easier or harder: reinforcements, withdrawal, terrain, obscuring fog, etc. 

### Traps & Objects

### NPCs



