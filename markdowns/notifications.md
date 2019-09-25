# Managing notifications

In this exemple, you can get invited to Julius Caesar book release party. You may be 2000 years late, but cool people never show up on time anyway. 

## Discovering a resource's inbox

To find out where to reach any resource, all you have to do is ask! Inboxes are announced using the [LDP](http://www.w3.org/ns/ldp#) term `ldp:inbox` in resources' RDF representation.

@[What is Cleopatra's inbox]({ "stubs": ["inbox-discovery.js", "discover-inbox.js"], "command": "node inbox-discovery.js" })

## Sending a notification

In the following snippet, after discovering the target's inbox, an invite is sent. Want to weasle your way in the coolest party of the Roman empire ? Just change the `calendar_iri` to your own!

@[Let's get crazy sending out invites]({ "stubs": ["notify.js", "invite.js", "discover-inbox.js"], "command": "node notify.js" })