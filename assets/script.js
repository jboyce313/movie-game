var submitBtn = $("#submit");
var guessInput = $("#guess-input");
var movieImage = $("#moviePoster");
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
  "tt0243655", // wet hot american summer
  "tt0120591", // armageddon
  "tt3704428", // elvis
  "tt0092099", // top gun
  "tt0286112", // shaolin soccer
  "tt0380510", // the lovely bones
  "tt0212985", // hannibal
  "tt0068646", // the godfather
  "tt7991608", // red notice
  "tt8946378", // knives out
  "tt2527338", // the rise of skywalker
  "tt0076759", // star wars
  "tt1160419", // dune
  "tt0145487", // spider-man
  "tt0111257", // speed
  "tt0118880", // con air
  "tt0118571", // air force one
  "tt0822832", // marley and me
  "tt1781922", // no escape
  "tt0357413", // anchorman
  "tt0094137", // three men and a baby
  "tt0811080", // speed racer
  "tt0108255", // super mario bros
  "tt0086567", // war games
  "tt1677720", // ready player one
  "tt0780504", // drive
  "tt0032553", // the great dictator
  "tt0098384", // steel magnolias
  "tt0120693", // half baked
  "tt0094898", // coming to america
  "tt0368226", // the room
  "tt0903624", // the hobbit
  "tt0443453", // borat
  "tt0473075", // prince of persia
  "tt3861390", // dumbo
  "tt0144084", // american psycho
  "tt0163651", // american pie
  "tt0277371", // not another teen movie
  "tt0445934", // blades of glory
  "tt0374900", // napolean dynamite
  "tt0114709", // toy story
  "tt0949731", // the happening
  "tt2911666", // john wick
  "tt0936501", // taken
  "tt5433138", // f9
  "tt1099212", // twilight
  "tt0097351", // field of dreams
  "tt0108037", // the sandlot
  "tt0187393", // the patriot
  "tt0183790", // a knights tale
  "tt0087332", // ghostbuster
  "tt0056592", // to kill a mockingbird
  "tt1130884", // shutter island
  "tt1179904", // paranormal activity
  "tt0246578", // donnie darko
  "tt0377092", // mean girls
  "tt1478338", // bridesmaids
  "tt0387808", // idiocracy
  "tt0076666", // saturday night fever
  "tt4975722", // moonlight
  "tt0089927", // rocky 4
  "tt0086960", // beverly hills cop
  "tt2543164", // arrival
  "tt0449010", // eragon
  "tt0096895", // batman (1989)
  "tt0107688", // nightmare before christmas
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
      var dataTitle = data.Title.replace(/ /g, "%20");
      console.log(dataTitle);
      call(dataTitle);
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

function call(dataTitle) {
  $.ajax({
    url:
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      dataTitle +
      "&limit=10&namespace=0&format=json&origin=*",
    success: function (result) {
      var wikiData = result;
      console.log(wikiData);
      console.log(dataTitle);
    },
  });
}

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
