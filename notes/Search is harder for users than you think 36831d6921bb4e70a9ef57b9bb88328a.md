# Search is harder for users than you think

Created: May 20, 2020 12:04 PM
Edited: Sep 4, 2020 5:15 PM
Tags: Product

Search seems like a straightforward means of information discovery, but it's often harder to use than engineers realise. Some issues include:

1. **Search requires you know to what you're looking for**. And you might not know, if you're a new user just trying to see what information a system contains, or if you don't know the exact way to phrase your question. For example, if you're a new Confluence user aiming to see what useful information your company's wiki contains, search is unlikely to be a helpful way to start. If you run a search and get no results or bad results, it's frustrating to continue guessing until you find something useful. In contrast, a system that allows for top-down browsing (even as a starting point; curating the entire system for browsing is too much work), opt-in topics, or recommendations, can be more approachable.
2. In a system with a data model that enables key-value searches, **search generally requires you to know the data model** to search effectively. This can be non-trivial for new users, especially in systems with complex or unwieldy data models. Good search templates that inherently embed the data model can help to offset that.
3. In a system where users are not just clicking into one result, but rather pulling lots of results into another view for further review or analysis, **a bad search can flood the prior curated view with lots of unwanted junk**. Think of when you're looking at Google Maps, then run a search for something and suddenly the map has panned and zoomed out to show you a bunch of random results. Good "results preview" modes, or interfaces that allow for toggling layers on and off rather than committing to pulling in all the results, can help. I sometimes consider running a search like this to be like dipping a scoop into a murky pond - the existing map (or other view) is the surface, and you don't know what hidden data is lurking beneath the surface. Rather than dredge up everything that's down there and have to deal with it, you'd prefer to have a way to clear up the water so you can see the bits of real interest, and pull just those up onto the surface.
4. In a system that allows advanced search syntax, **this syntax is usually more alien to users than engineers realise**. Even Boolean logic can be a little weird, and once you start trying to account for interactions (what happens if I put a wildcard inside an exact match?), users will lose track and their searches will not be doing what they think. Query builders can help with this.

    As a case in point of this blindness to user need, here's someone complaining that Notion's graphical filters are worthless and users should all be writing SQL instead.

    [https://twitter.com/itunpredictable/status/1266127805651185664?s=20](https://twitter.com/itunpredictable/status/1266127805651185664?s=20)

See also:

[Lists are the new search — Benedict Evans](../References%2044e0a6dd2a7a456b83710224626907e7/Lists%20are%20the%20new%20search%20%E2%80%94%20Benedict%20Evans%201cb2e73c7ccc4a6aba0163457435bff4.md)