# World-coupled games

Created: May 20, 2020 12:08 PM
Edited: Oct 27, 2020 9:14 AM
Tags: Games, Product

### AKA, Ender's Farmville

I’ve written previously about how simulation games can help you develop an understanding of mental models and strategies. 

[Strategy games can teach mental models](Strategy%20games%20can%20teach%20mental%20models%20e11631f479e14a679ab9963f890db454.md)

But what if the stakes were higher? What if instead of just simulating the world as you played, you were directly impacting it?

This is something we see in fiction. In Ender’s Game, students in a simulated battle training environment turn out to be unwittingly directing the real fleet. In The Player of Games, an alien empire allocates positions in their governing hierarchy based on a complex game that richly mirrors life in their society. Could we bring some of that to life?

Put simply, how do we make Ender’s Farmville, a farming simulation that is actually running a real farm? Such that, as people get better at the game, the farm also gets more productive?

### Motivation

I think “world-coupled games” of this kind could be useful because people sink a lot of time and mental energy into games. I’d bet that many of us have spent more effort on figuring out the nuance and strategy of a game than on, say, the handling of our retirement savings. (This includes building understanding of a game through fan discussion, expert commentary, and so on — the voluntary apparatus that exists to help people get better at playing games is fascinating.) It seems in a sense wasteful for all that time not to be somehow directed to improving the actual world — which is not to say that gaming leisure time is wasted, just that we could think about extracting a dual benefit. At its peak, Farmville had over 83 million monthly users. Of course they’re not farmers, and Farmville isn’t farming. But surely there’s a way to make non-zero use of all that mental labour.

### The status quo

So far, efforts to apply game mechanics to real problems seem to fall into two buckets, neither quite satisfactory.

First, there’s classic “gamification” — making processes or apps more game-like by adding elements such as badges, achievements and power-ups, with the goal of spurring engagement by tapping the same neural reward centres that games do. But these still fall short of feeling like real games — even if your to-do app gives you a badge for checking off tasks, you probably won’t sit down to “play” it for hours at a stretch, or form a community where you share tips on getting more badges. And these gamified apps generally don’t directly affect the real world in that true Ender’s Game style.

Second, there are “human-based computation games”, or “games with a purpose” where a human player is solving a small unit of work in a game-like interface. Think of Google’s ReCaptcha where you have to pick out images of traffic lights, but more fun. Examples include Foldit, which allows players to solve protein folding structures in a game interface, and Phylo, which is kind of like Candy Crush for aligning DNA nucleotide sequences instead of candy. These are closer to what I’m imagining — they’re genuine games that people can get together and discuss, even if they’re not a summer blockbuster, and they’re directly connected to real world data. But they’re restricted to pretty simple Mechanical Turk-like problems at the moment. How could we take them and extend them into domains where more complexity and strategy are needed, taking advantage of what many people love about games?

### Devil in the details

Of course this isn’t straightforward; there are lots of challenges to consider.

Any single player of the game is likely to be bad at it, which makes them unsuitable for generating real-world actions. If I owned a real farm, there’s no way I’d turn over operations to a random controller on the internet. Ways to account for this might include a consensus approach, where given actions are only taken in real life if they’re taken independently in the game by several different players; or a tournament approach, where only the best players’ actions are actually implemented, and everyone else is playing purely online.

It’s likely that even the best outputs still might not be trustworthy enough to automatically implement. This needn’t make them useless, though: perhaps the goal should be to generate useful advice for a farmer, instead of directly “running” a farm. This might be particularly applicable in places that are underserved by current agricultural extension (i.e. farmer education) approaches. Another halfway-house output might be using the human outputs to generate a training dataset for an ML model, that could then run across more specific data for given farms and produce more tailored advice.

It’s hard to simplify real world systems enough to make a game tractable and entertaining for players, while still being applicable. This is the largest issue and is probably why the existing class of “games with a purpose” are focused on very discrete scientific problems. There are all sorts of sub-issues here. The world is complex and heterogeneous: getting something to grow on a specific farm is a function of so many variables around soil, weather, seeds, cultivation techniques, and so on. The world operates on far longer timescales than games: waiting months to see if your crops grew successfully is boring, and undermines the fast iteration cycle that makes game-based learning appealing. And the potential for oversimplified models to drive damaging behaviour is a real risk. SimCity has been widely used to teach students about urban planning, helping to bake in its simplified and contestable assumptions about the value of aggressive zoning, company-friendly tax rates, and car-focused cities (the game doesn’t require parking lots, for example).

[When SimCity got serious: the story of Maxis Business Simulations and SimRefinery | The Obscuritory](../References%2044e0a6dd2a7a456b83710224626907e7/When%20SimCity%20got%20serious%20the%20story%20of%20Maxis%20Busine%20cf9a859e14bd476d9c20ced946d99efe.md)

### Where to start?

I don’t have a great answer to this last point about designing useful games; I think it basically comes down to problem selection. Despite the success of Farmville itself, farming clearly isn’t the right place to start. Returning to the retirement savings example, perhaps games linked to financial behaviour like saving or investing, which are generally agreed to be prudent but often complex or unapproachable, might be useful. Financial data is easily accessible to computers, there are already lots of precedents for market-based behaviours in games, and you can imagine simple actions like diverting small sums into a savings account in real life in order to unlock a higher rate of in-game income.

Or, as drones become widespread, perhaps world-coupled games could be used to provide drone guidance and processing of data from their sensors. Imagine a game that involves guiding a squad of drones to map a mine complex, and flag sites of interest. This is partially an extension of the Mechanical Turk image processing games that already exist, but also introduces a new element in terms of navigational strategy and prioritisation — something that might be better accomplished by an online crowd via a game, than by a single operator.

### Games without players

Finally, if we succeed at creating games like this, we might end up removing humans from the loop altogether, considering the incredible recent success of computers at learning to play games. AlphaStar’s ability to master a relatively complex strategy game like StarCraft is very exciting. Considering how we might usefully translate more real-world problems into simulated game-like environments, such that computers could then learn to play them and perhaps give us new insight into the original problems, seems like a useful direction.

And if we can model the real world sufficiently well, we might be able to generate truly socially useful tools, like a virtual assistant constantly available to every farmer with a deep understanding of the right farming strategy to take based on different conditions and the farmer’s own goals. That’s a much less dramatic application than Ender battling an alien homeworld, but really it’s just as thrilling.

See also:

[https://twitter.com/packyM/status/1310565791843184646?s=20](https://twitter.com/packyM/status/1310565791843184646?s=20)