const axios = require("axios")
const $rdf = require("rdflib")

const {invite} = require("./invite")

const timeout = 3000

const LDP = $rdf.Namespace("http://www.w3.org/ns/ldp#")

// Let's assume that we know the IRI of the invitee's calendar
const calendar_iri = "https://cleopatra.solid.community/public/calendar/"

const store  = $rdf.graph();
const fetcher = new $rdf.Fetcher(store, timeout)

// First, we fetch the calendar resource to discover its inbox...
fetcher.nowOrWhenFetched(calendar_iri, function(ok, body, xhr) {
    if (!ok) {
        console.log("Oops, something happened and couldn't fetch data");
    } else {
        const calendar = $rdf.sym(calendar_iri);
        // Here, we look up the inbox from the calendar representation
        const inbox = store.any(calendar, LDP('inbox'))
        // We then send the invite to the inbox
        send_invite(inbox.value)
    }
})

// This function performs a simple POST to the target inbox to send
// the invite defined in invite.js
function send_invite(inbox) {
    axios({
        method: 'post',
        url: inbox,
        data: invite,
        headers: {
            "Content-type": "text/turtle"
        }
      }).then (response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      });
}
