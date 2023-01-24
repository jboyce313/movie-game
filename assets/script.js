var submitBtn = $("#submit");
var movieNameInput = $("#movie-name-input");
var movieImage = $("#movie-image");

loadMovie("tt0099700");

function loadMovie(movieID) {
  fetch(`http://www.omdbapi.com/?i=${movieID}&apikey=efb9b6cf`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      movieImage.attr("src", data.Poster);
    });
}

submitBtn.click(function () {});
