var submitBtn = $("#submit");
var guessInput = $("#guess-input");
var movieImage = $("#movie-image");
var score = 0;
var rottenTomatoesScore;

var movies = [
  "tt0099700",
  "tt0133093",
  "tt0090142",
  "tt0120587",
  "tt0796366",
  "tt0126029",
  "tt0314331",
  "tt1853728",
  "tt0241527",
  "tt4154796",
  "tt0120338",
  "tt1630029",
  "tt0281358",
  "tt4468740",
  "tt0089218",
  "tt0075314",
  "tt0170016",
  "tt0110912",
  "tt1375666",
  "tt0368891",
  "tt0808510",
  "tt0093748",
  "tt0441773",
  "tt0240468",
];

var index = generateIndex();
loadMovie(movies[index]);

function loadMovie(movieID) {
  if (movies.length === 0) {
    return;
  }

  fetch(`http://www.omdbapi.com/?i=${movieID}&apikey=efb9b6cf`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      movieImage.attr("src", data.Poster);
      rottenTomatoesScore = parseInt(data.Ratings[1].Value);
    });
}

function generateIndex() {
  return Math.floor(Math.random() * movies.length);
}

submitBtn.click(function () {
  var guess = guessInput.val();
  var validGuess = checkGuess(guess);

  if (!validGuess) {
    // change to modal
    alert("invalid guess");
    return;
  }

  console.log(`Guess: ${guess}`);
  console.log(`RT score: ${rottenTomatoesScore}`);

  var difference = rottenTomatoesScore - guess;
  console.log(`Difference: ${difference}`);

  var pointsAwarded = 100 - difference;
  console.log(`Points awarded: ${pointsAwarded}`);

  score += pointsAwarded;
  console.log(`Score: ${score}`);

  movies.splice(index, 1);

  index = generateIndex();
  loadMovie(movies[index]);
  guessInput.val("");
});

function checkGuess(guess) {
  if ($.isNumeric(guess) && guess >= 0 && guess <= 100) {
    return true;
  } else {
    return false;
  }
}
