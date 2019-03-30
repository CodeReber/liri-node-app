require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


// require("dotenv").config();
// var spotifyreq = require("node-spotify-api");
// var keys = require("./keys.js");

// var spotify = new spotifyreq({
//   id: "f83e62d41561486daad33314fba72bcd",
//   secret: "7fbaeee1429843e39062328a98182cbc" 
// });
     var song = process.argv[2];
    // var spotify = new spotifyreq(keys);
    spotify
      .search({ type: 'track', query: song })
      .then(function(response) {
              var song = response.tracks.items
              for(var i = 0; i < 1; i++){
                  console.log(song[i]);
              }
          }
      );