const axios = require("axios");


axios
  .get("https://api.github.com/licenses")
  .then(function(res) {
    const licenseNames = res.data.map(license => license.name)
    return licenseNames
  });



  module.exports = {license:questions};


