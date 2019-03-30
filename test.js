var spotifyreq = require("node-spotify-api");
var keys = require("./keys.js");

    var song = process.argv[2];
    var spotify = new spotifyreq(keys,spotify);
    spotify
      .search({ type: 'track', query: song })
      .then(function(response) {
        console.log(response)});