const axios = require("axios")
const $rdf = require("rdflib")

const {invite} = require("./invite")
const {fetch_inbox} = require("./discover-inbox")

const timeout = 3000

const LDP = $rdf.Namespace("http://www.w3.org/ns/ldp#")

// Let's assume that we know the IRI of the invitee's calendar
const calendar_iri = "https://cleopatra.solid.community/public/calendar/"

const store  = $rdf.graph();
const fetcher = new $rdf.Fetcher(store, timeout)

// First, fetch the inbox...
fetch_inbox(calendar_iri)
.then(inbox => {
  // ...and thenr perform a POST to the target inbox to send
  // the invite defined in invite.js
  axios({
      method: 'post',
      url: inbox,
      data: invite,
      headers: {
          "Content-type": "text/turtle",
          "Slug": "We gonna parteyy"
      }
  }).then (response => {
      console.log(response.status)
  }).catch(error => {
      console.log(error)
  });
}).catch(error => {
  console.log(error)
})



