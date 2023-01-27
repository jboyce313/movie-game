var submitBtn = $("#submit");
var guessInput = $("#guess-input");
var movieImage = $("#movie-image");
var score = 0;
var rottenTomatoesScore;


var movies = [
  "tt0099700", // gremlins 2
  "tt0133093", // the matrix
  "tt0090142", // teen wolf
  "tt0120587", // antz
  "tt0796366", // star trek (2009)
  "tt0126029", // shrek
  "tt0314331", // love actually
  "tt1853728", // django unchained
  "tt0241527", // harry potter 1
  "tt4154796", // avengers endgame
  "tt0120338", // titanic
  "tt1630029", // avatar: the way of water
  "tt0281358", // a walk to remember
  "tt4468740", // paddington 2
  "tt0089218", // the goonies
  "tt0075314", // taxi driver
  "tt0170016", // how the grinch stole christmas
  "tt0110912", // pulp fiction
  "tt1375666", // inception
  "tt0368891", // national treasure
  "tt0808510", // tooth fairy
  "tt0093748", // plains, trains, and automobiles
  "tt0441773", // kung fu panda
  "tt0240468", // kun pow: enter the fist
  "tt6710474", // everything everywhere all at once
  "tt0800369", // thor
  "tt4633694", // into the spider-verse
  "tt0086250", // scarface
  "tt0114898", // waterworld
  "tt0120812", // rush hour
  "tt0117705", // space jam
  "tt0107120", // hocus pocus
  "tt0102057", // hook
  "tt1270797", // venom
  "tt0787475", // hot rod
  "tt1485796", // the greatest showman
  "tt0096542", // baywatch
  "tt0388419", // christmas with the kranks
  "tt0454945", // she's the man
  "tt0113497", // jumanji
  "tt0120616", // the mummy
  "tt0247638", // the princess diaries
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
      var dataTitle = data.Title.replace(/ /g, "%20")
      console.log(dataTitle)
      call(dataTitle)
    
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


function call(dataTitle){$.ajax({
  url: "https://en.wikipedia.org/w/api.php?action=opensearch&search="+dataTitle+ "&limit=10&namespace=0&format=json&origin=*",
  success: function(result) {
     var wikiData = result
    console.log(wikiData)
    console.log(dataTitle)

  


  }})}


function kippsButton() {
  window.open("https://github.com/kcavner", "_blank");
}
function jonsButton() {
  window.open("https://github.com/jonathanguhl", "_blank");
}
function casensButton() {
  window.open("https://github.com/casensutherland", "_blank");
}
function jacobsButton() {
  window.open("https://github.com/jboyce313", "_blank");
}
function startGame() {
  window.location.href = "./score-guesser.html";
}

