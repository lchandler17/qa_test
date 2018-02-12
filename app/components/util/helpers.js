var axios = require("axios");

var helpers = {
	getElection: function() {
	  	return axios.get("/api/vote/:electionid");
	  }
};

module.exports = helpers;