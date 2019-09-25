# An introduction to solid common patterns

This interactive tutorial is meant to be used as a complement to [the solid developer documentation](https://github.com/NSeydoux/information/blob/feature/281_common-patterns/documentation/common-patterns.md).

## Reading from a public resource

Let's start out with the simplest possible interaction with a solid server: reading a public resource.

A public resource can be accessed without authentication, so it's basically like any resource on the web: a GET on the IRI, and you're good to go.

@[I wonder what Cleopatra shared in her blog.]({ "stubs": ["index.js"], "command": "node index.js" })
