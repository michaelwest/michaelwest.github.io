# The privacy-security frontier

Created: Oct 19, 2020 9:41 PM
Edited: Oct 30, 2020 6:33 AM
Tags: Resilience

A common theme in national security policy, and in software that holds information about people, is that there is a direct trade-off between privacy and security. This is captured by pithy one-liners like Benjamin Franklin's "*Those who would give up essential Liberty, to purchase a little temporary Safety, deserve neither Liberty nor Safety*" (side note: that quote is probably [misinterpreted](https://www.npr.org/2015/03/02/390245038/ben-franklins-famous-liberty-safety-quote-lost-its-context-in-21st-century)). Politicians talk this way too: e.g. Tony Abbott as Australian PM, "*Regrettably for some time to come, the delicate balance between freedom and security [may have to shift](https://www.abc.net.au/news/2014-09-22/abbott-warns-of-shifting-balance-freedom-security/5760818?nw=0).*"

This framing typically suggests that privacy and security exist on a linear spectrum:

![The%20privacy-security%20frontier%206f273e9ea7d24fddacde32ae68505c4c/Untitled.png](The%20privacy-security%20frontier%206f273e9ea7d24fddacde32ae68505c4c/Untitled.png)

However, I think it is more helpful to frame it in terms of a concept borrowed from economics, the [production-possibility frontier](https://en.wikipedia.org/wiki/Production%E2%80%93possibility_frontier) (PPF). This helps to illustrate that (1) the trade-off is actually non-linear, and more importantly (2) that there are ways to break the trade-off through technology.

A classic PPF example is producing guns vs producing butter; each is shown on one axis. The economy has some total productive capacity, mapped by the blue line, and as more effort is devoted to producing guns, less effort is available for butter, and vice versa. 

![The%20privacy-security%20frontier%206f273e9ea7d24fddacde32ae68505c4c/Untitled%201.png](The%20privacy-security%20frontier%206f273e9ea7d24fddacde32ae68505c4c/Untitled%201.png)

We can bring this view across to our privacy-security tradeoff.

1. In this view, the linear tradeoff shown above looks like this:

![The%20privacy-security%20frontier%206f273e9ea7d24fddacde32ae68505c4c/Untitled%202.png](The%20privacy-security%20frontier%206f273e9ea7d24fddacde32ae68505c4c/Untitled%202.png)

2. But actually, this kind of tradeoff is rarely linear. Instead, it is typically concave, as the opportunity cost increases when you get close to maximising either value. At one end, you get to a point where massive privacy violations are needed to get an incremental gain in security; at the other, you are in a place of extreme privacy where even minimal openness would yield a lot more safety.

![The%20privacy-security%20frontier%206f273e9ea7d24fddacde32ae68505c4c/Untitled%203.png](The%20privacy-security%20frontier%206f273e9ea7d24fddacde32ae68505c4c/Untitled%203.png)

3. One of the key points about the PPF from economics is that technology can reshape the frontier. One way to do this is to push the whole frontier out, so that at any given point on the curve, there is both *more safety and more privacy* than before. We should be looking for these kinds of gains, rather than treating the situation as zero-sum.

![The%20privacy-security%20frontier%206f273e9ea7d24fddacde32ae68505c4c/Untitled%204.png](The%20privacy-security%20frontier%206f273e9ea7d24fddacde32ae68505c4c/Untitled%204.png)

4. To consider specific examples, let's look at region A (enhancing privacy for similar security) and region B (enhancing security while maintaining similar privacy).

![The%20privacy-security%20frontier%206f273e9ea7d24fddacde32ae68505c4c/Untitled%205.png](The%20privacy-security%20frontier%206f273e9ea7d24fddacde32ae68505c4c/Untitled%205.png)

### **A. Enhancing privacy for given security**

This can be achieved by using technology to enforce more privacy-protective handling of data by law enforcement and security agencies. Examples include:

- More granular access-control systems, so that analysts only see a subset of relevant data, rather than having carte-blanche access to all data in a system;
- Robust audit logging, so that analysts cannot misuse the system by undertaking indiscriminate or personally-motivated searches that aren't relevant to their investigations;
- Systematic rolling deletion of outdated data that is no longer highly relevant to investigations;
- Data masking to provide anonymised or aggregated views of data where de-identified information is sufficient for analysis (such as for looking at overall trends).

### **B. Enhancing security for given privacy**

This is basically achieved by ensuring that law enforcement and security agencies actually have high-quality analytical tools that are responsive to their investigative workflows.This ensures that the maximum "security dividend" is achieved for each piece of data collected. There is no security value to collecting a large amount of phone call records or internet metadata if it is then impossible to meaningfully process them to contribute to investigations; that is just privacy infringement without any gain.  

Better analytical tools may also lead to more targeted collection and review, rather than a scatter-gun approach that brings government into contact with more of citizens' data. For example, effective search indexing applied to a forensic data dump means analysts can search for just a subset of records relevant to their investigation, rather than having to read through every record, including large amounts of irrelevant and potentially personally-sensitive records.

Peter Thiel has used the example of the NSA's overly-broad collection: *“One gets the sense that this is happening-- not because the N.S.A.'s really Big Brother, but because it's more like the Keystone Cops,” says Thiel. “You're just collecting everything. You don't really know what matters. And so you end up listening in on [German Chancellor] Angela Merkel's cell phone. You end up collecting data on everything you can imagine."* If there was a tighter loop between effective analysis driving further collection, the need to collect everything ahead of time might be avoided. 

However, it is also possible that the increased ability to analyse more data might motivate a desire for broader, privacy-infringing collection. So technology is not the only answer here; there is a critical role for law and policy to set appropriate norms.