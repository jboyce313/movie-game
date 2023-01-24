var submitBtn = $("#submit");
var movieNameInput = $("#movie-name-input");
var movieImage = $("#movie-image");

var movies = ["tt0099700", "tt0133093"];

loadMovie(movies[generateIndex()]);

function loadMovie(movieID) {
  fetch(`http://www.omdbapi.com/?i=${movieID}&apikey=efb9b6cf`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      movieImage.attr("src", data.Poster);
    });
}

function generateIndex() {
  return Math.floor(Math.random() * movies.length);
}

submitBtn.click(function () {});
