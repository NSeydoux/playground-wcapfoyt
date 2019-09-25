const {fetch_inbox} = require("./discover-inbox")

// You can change that to your own webid
const resource_iri = "https://cleopatra.solid.community/profile/card#me"

// First, let's see the plain RDF representation of the resource
axios.get(url)
.then(response => {
  // Let us just display the content of the resource
  console.log(response.data);
})
.catch(error => {
  console.log(error);
})

// And now, let's just filter for its inbox
fetch_inbox(resource_iri)
.then(inbox => {
    console.log("The inbox of "+resource_iri+" is "+inbox)
})
.catch(error => {
    console.log(error)
})