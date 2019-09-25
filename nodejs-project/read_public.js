const axios = require("axios");

// You can change the host and resource to match something from
// your own pod if you want
const host = "https://cleopatra.solid.community"
const resource = "/public/blog/religion/greek-egyptian-conandrum.txt"
const url = host+resource;

axios.get(url)
  .then(response => {
    // Let us just display the content of the resource
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  })
