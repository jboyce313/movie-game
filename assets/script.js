var submitBtn = $("#submit");
var guessInput = $("#guess-input");
var movieImage = $("#movie-image");
var score = 0;
var rottenTomatoesScore;

var movies = ["tt0099700", "tt0133093", "tt0090142", "tt0120587"];

loadMovie(movies[generateIndex()]);

function loadMovie(movieID) {
  fetch(`http://www.omdbapi.com/?i=${movieID}&apikey=efb9b6cf`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      movieImage.attr("src", data.Poster);
      rottenTomatoesScore = parseInt(data.Ratings[1].Value);
      console.log(`RT score: ${rottenTomatoesScore}`);
    });
}

function generateIndex() {
  return Math.floor(Math.random() * movies.length);
}

submitBtn.click(function () {
  var guess = guessInput.val();
  console.log(`Guess: ${guess}`);
  var validGuess = checkGuess(guess);

  if (!validGuess) {
    alert("invalid guess");
    return;
  }

  var difference = rottenTomatoesScore - guess;
  console.log(`Difference: ${difference}`);
  var pointsAwarded = 100 - difference;
  console.log(`Points awarded: ${pointsAwarded}`);
  score += pointsAwarded;
  console.log(`Score: ${score}`);
  loadMovie(movies[generateIndex()]);
});

function checkGuess(guess) {
  return true;
}
