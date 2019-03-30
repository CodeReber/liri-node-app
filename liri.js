require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var spotifyreq = require("node-spotify-api");
var fs = require("fs");

var dowhatthis = function (){
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
          return console.log(err);
        }
    var output = data.split(",");
    for (var i = 0; i < output.length; i++) {

        // Print each element (item) of the array/
        console.log(output[i]);
      }
    });
}

// var spotifythis = function () {
//     var song = process.argv[3];
//     var spotify = new spotifyreq(keys,spotify);
//     spotify
//       .search({ type: 'track', query: song })
//       .then(function(response) {
//         console.log(response);
//       })
// }


var concertthis = function () {

    var artist = process.argv[3];
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    // console.log(queryUrl)

    axios.get(queryUrl).then(
        function (response) {
            var bands = response.data
            for(var i = 0; i < 1; i++){
                console.log("Venue Name: " + bands[i].venue.name + "\n" + "Venue City and State: " + bands[i].venue.city + "," + bands[i].venue.region + "\n" + "Event Date: " + bands[i].datetime);
            }
        }
    );

}



var moviethis = function () {
    var movieName = (process.argv[3]) ? process.argv[3] : "Mr Nobody";

    // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    // This line is just to help us debug against the actual URL.
    // console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            console.log("Release Year: " + response.data.Year);
            console.log("Title: " + response.data.Title);
            console.log("IMDB Rating: " + response.data.Rated);
            console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        }
    );
}
if (process.argv[2] === "movie-this") {
    moviethis();
}
if(process.argv[2] === "concert-this") {
    concertthis();
}
if(process.argv[2] === "spotify-this-song"){
    spotifythis ();
}
if(process.argv[2] === "do-what-it-says"){
    dowhatthis ();
}
// else {
//     console.log("input one of the follow:")
//     console.log("concert-this")
//     console.log("spotify-this-song")
//     console.log("movie-this")
//     console.log("do-what-it-says")
// }
