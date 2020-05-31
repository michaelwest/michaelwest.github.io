# Mental models reference

## Explore-exploit tradeoff / multi-armed bandit
* Optimise total value from a set of options where value is initially unknown: combine *exploring* new options with *exploiting* known high-value options
* Epsilon-greedy strategy: Devote time E to randomly chosen option of unknown value, and time (1-E) to best already-known option
* Typical value of E might be 0.1 to 0.2 based on Eric Schmidt â80% on coreâ advice
* E might decrease over time, implies increasing certainty in best option
* Application to impl: work stream prioritisation, especially decaying epsilon over time (or weighting chance of work on stream by known value)
* Application to personal growth: must allocate some time to explore other things outside of core responsibilities - overlap with hill-climbing formulation

## Hanlon's razor
- "Never attribute to malice that which can be explained by neglect."
- Combines with confirmation bias and bias from dislike, to reduce rationality and empathy. See "honey not vinegar" entry re accommodation example.
- Douglas Hubbard extension: "Never attribute to malice or stupidity that which can be explained by moderately rational individuals following incentives in a complex system of interactions."

## System 1 and 2
Two systems of thinking. System 1 (Automatic) - intuition/gut feel, fast; System 2 (Thinking) - rational analysis, slow. Automatic System is only suited to situations with much experience, predictable outcomes, and fast feedback - eg social interactions. Easy to tell if you are going to work well with someone. But not suited to complex novel decisions (especially quantitative) which we have not evolved to handle intuitively. Can feed Automatic System output into Thinking System decision-making, rather than being ruled by Automatic System.

## Scope insensitivity.
People don't value things with a correct multiplicative relationship for scope, but rather something like log scale where big changes in scope don't correlate to big changes in value/output. Won't mentally value 1000 lives saved at 1000x cost of single life. This is probably what makes it hard to truly engage in exponential thinking. Also probably leads people to undervalue actual effort involved in things - e.g. temptation of the 'refugee hackathon' vs the actual years of effort to engage in structural improvements.