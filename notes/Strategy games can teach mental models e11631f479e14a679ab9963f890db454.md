# Strategy games can teach mental models

Created: May 20, 2020 12:08 PM
Edited: Dec 20, 2020 9:04 PM
Tags: Games, Product

## AKA, The Kerbal-Factorio Business School

Many video games can act as micro-scale laboratories for the outside world. Researchers have studied the spread of pandemics in World of Warcraft, and running a large EVE Online corporation is comparable to the real thing in its demands for skill at logistics, politics and strategy. And I’m excited to see how massive-scale simulations with millions of agents, like those enabled by Improbable, will turn into sandboxes for experimentation.

Recently I’ve been thinking particularly about how certain simulation games — usually focused around one central mechanic, and with limited emphasis on combat — can be a great way to develop your understanding of generic strategies and mental models. While it’s easy to academically learn useful models, it can be hard to really internalise them. Games tend to provide visceral experiences linked to the models, which help them sink in.

*There’s nothing like watching your Kerbal Space Program crew get vaporised because you forgot to attach parachutes to your re-entry vehicle when you launched it four hours ago, to teach you the value of the model “mistakes caught early are much cheaper to fix”.*

Here are some of my favourite games and what I’ve learnt playing them:

## Factorio

Factorio is a factory-building simulation on an alien world. Initially mining coal and iron ore by hand, you can craft conveyor belts, assembly machines and furnaces, and work your way up to complex assembly lines powered by nuclear reactors, staffed by robots, and launching satellites into orbit.

### Identify bottlenecks and root causes.

As a game focused on factory logistics, it’s no surprise that managing available production capacity is central to succeeding. There are two parts to this. The first is figuring out what factor is the dominant bottleneck in achieving your overall current goal. If you’re directing most of your Iron Plate production down one path, but that path is producing a high-level good in which you’re already oversupplied and meanwhile you’re starving another path that you really need, you’ll fail. In real life, figuring out which factors will dominate an outcome and ruthlessly directing resources towards those is a helpful skill to learn.

Often the actual issue is several layers removed from where it’s most obvious, so the second skill is looking at a problem and tracing it back to its root causes. This might be a classic Five Whys analysis, like: *Why is my research progress slow? → Why am I producing the level 3 Science Pack more slowly than any of the other science packs? → Why do I not have a steady flow of Advanced Circuits to make more level 3 Science Packs? → Why is my feed of Copper Coils to the Advanced Circuit assembler so sporadic? → I need to fix the schedule on my Copper Ore supply train.* You have to do this sort of analysis at least once every few minutes, which makes for great practice. It’s also way easier to do this in Factorio when your factory is neatly laid out rather than a mess of spaghetti — this is one of the key advantages of the popular ‘Main Bus’ design, where key resources flow centrally and are segmented off as needed. Translating that back to the real world, invest in making sure systems are clearly laid out, are easy to reason about, and don’t have more dependencies than necessary.

### Leverage automation to create room for high-value tasks.

The early game in Factorio can be quite tedious: there’s a lot of hand-mining and walking between machines to manually keep them fuelled and running. The successive layers of automation, from mines to assembly machines and eventually flexible robots, really help accelerate your pace and free you up for creative building. Back in the real world, it’s helpful to look for opportunities to automate (or outsource) repetitive tasks that sap your ability to make progress on more substantive goals. When I was the volunteer CTO of a global student organisation, much of my time was initially taken up with routine tasks like creating official email addresses for new members. Building a self-service portal linked to the Google Apps API radically reduced this workload, and made things quicker for the members too.

## Kerbal Space Program

KSP is a spaceflight sandbox with a fairly realistic physics engine: you design spacecraft from basic parts and fly them through launch, landing, and re-entry. Along the way you develop an intuitive understanding of basic orbital mechanics, as well as some more generic mental strategies.

### Catch mistakes early by building MVPs.

As I mentioned in the pull-quote previously mistakes you make in KSP can haunt you much later. An ambitious mission to land a complex spacecraft on another moon or planet could take many hours of launch, orbital rendezvous, transit and landing, followed by a return journey. This can all fall apart if you realise too late that you forgot to attach re-entry parachutes for the final descent, or put the hatch in a place that gets blocked if the ship tips unexpectedly, or ran out of battery power before extending your solar panels, or… there’s a lot that can go wrong. Catching mistakes early, including by doing low-cost tests on the ground or in planetary orbit before setting out on a mission to a far-flung destination, can make a big difference to retaining your sanity. This is also true in many areas of real-world engineering. In software, identifying low-cost minimum viable products (MVPs) can help to identify bugs — or mismatches between actual need and what the software does — at a much earlier stage when they are cheaper to fix. Unlike spacecraft, most software systems also have the advantage of being able to be easily modified on the fly; it’s helpful to practise the mental process of calibrating your level of required confidence based on how recoverable your errors might be.

### Set audacious goals.

Despite the trauma described above, KSP has given me moments of more complete satisfaction than any other game. Because it is genuinely challenging when you start out, it’s really fulfilling to finish a mission that pushes your knowledge of the game. For me, that was first conducting a successful rescue mission for a crew stranded without fuel, and then followed up with landing a small base on Duna, the game’s Mars analogue planet. Thinking about what audacious goals you can tackle in your work and broader life, that will really satisfy you if you achieve them, is a good way to reinforce motivation and help focus on high-quality work.

## Offworld Trading Company

OTC is a real-time strategy game where the warfare is economic rather than military. Operating as one of several companies racing to colonise Mars, you invest in producing resources but can also buy and sell them on a constantly shifting market, with the aim of generating funds to buy out your rivals.

### Make use of comparative advantage, and do the maths to figure out the best return.

The fast-moving market in OTC gives players a fiery baptism into the economic concept of comparative advantage. Even though your colony might constantly need certain supplies like oxygen and water, and you can build facilities to produce these, the correct strategy is never to just invest in building to meet your own needs. Instead, it’s better to invest in making whatever the market is under-supplied in and is paying high prices for. With this cash, you can buy what you need for your own colony on the open market, and have money left over for other goals. (This is not by itself strictly comparative advantage; it’s more just responding to supply and demand, although you can create more of an actual advantage through investing in research that boosts your productivity at making certain goods.)

Because most other games are focused on making facilities to directly support your own needs (e.g. mining resources to build soldiers), I found this dynamic an interesting change. In the real world, it’s been a helpful reminder to actually do the maths on decisions like whether it’s actually worth repaying a low-interest debt, rather than relying just on rules of thumb like ‘pay off debt’. It also ties into the Factorio point about automation and outsourcing. For example, many people might see cleaning their house as a mandatory internal need they have to spend their time on, similar to supplying oxygen and water for the colony. But it could be more efficient to work more in your area of comparative advantage, and pay an external cleaner instead.

### Prepare for downturns.

Offworld Trading Company can change more quickly than many other games, because the vitally important central market is subject to player-driven manipulation. You can cause crashes or spikes in commodity prices by hacking the exchange, sabotage other players’ factories, or permanently tamper with resource-rich locations. This means that even when your economy is roaring, it’s important to stay hyper-conscious that conditions may change rapidly, retain some amount of diversification, and not be lulled into a false sense of security about either an ‘endless boom’ or your own ‘Midas touch’. It’s pretty obvious how well this translates to the real world, and it’s a lesson that is certainly hammered home when you see your colony’s cash reserves plummet because you over-invested in producing a certain commodity that is now virtually worthless.

## Risk

Of course lessons on strategy aren’t restricted to video games; classic board games also have much to teach us. I want to highlight just one, Risk, the “game of global domination”. For me the most enduring lesson of Risk is that it can be critical to find ways to obtain an unfair advantage. You can spend a lot of time in Risk trying to obtain a slight advantage over an opponent with clever tactical plays, only to have that evaporate with a few bad dice rolls. Or, if you manage to convince somebody else to join an alliance with you against a common enemy, you can radically alter the strategic situation. Forming an alliance might not be easy — and depending on who you’re playing with, it might not be in the spirit of the game. But if you’re stuck in a difficult situation in business or life, it can be worth applying the same mental model of asking whether there is an unconventional option that might help you to short-circuit the situation and get to a better outcome.

See also:

[The Observer Effect – Tobi Lütke](../References%2044e0a6dd2a7a456b83710224626907e7/The%20Observer%20Effect%20%E2%80%93%20Tobi%20Lu%CC%88tke%20b96aa5e3c58d40bb8d97a902613caca6.md)

[Video Games are the Future of Education](../References%2044e0a6dd2a7a456b83710224626907e7/Video%20Games%20are%20the%20Future%20of%20Education%200247aaf9bd4c48b0b5cd3ba6a7cc62f3.md)