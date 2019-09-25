
const axios = require("axios");

const url = "https://cleopatra.solid.community/public/blog/religion/greek-egyptian-conandrum.txt";
axios.get(url)
  .then(response => {
    // handle success
    console.log(response.data);
    console.log(response.headers);
  })
  .catch(error => {
    // handle error
    console.log(error);
  })
