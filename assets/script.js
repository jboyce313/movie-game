var submitBtn = $(".submit");
var guessInput = $(".input");
var movieImage = $("#moviePoster");
var movieTitle = $(".movie-title");
var scoreEl = $("#score");
var score = 0;
var rottenTomatoesScore;
var wikiFilms = [];
var wikiLink = "";

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
  "tt0456554", // Grandma's Boy
  "tt0910936", // Pineapple Express
  "tt0118708", // Beverly Hills Ninja
  "tt0088000", // Revenge of the Nerds
  "tt2724064", // Sharknado
  "tt0170016", // The Grinch
  "tt0099785", // Home Alone
  "tt0093894", // The Running Man
  "tt11790780", // The Alpinist
  "tt0278488", // How High
  "tt0118571", // Air Force One
  "tt0367085", // Soul Plane
  "tt0372588", // Team America: World Police
  "tt0364725", // Dodgeball
  "tt0425112", // Hot Fuzz
  "tt7126948", // Wonder Woman 1984
  "tt0259484", // Paid in Full
  "tt10665338", // Halloween Kills
  "tt0185431", // Little Nicky
  "tt0116996", // Mars Attacks!
  "tt0090728", // Big Trouble in Little China
  "tt0032138", // The Wizard of Oz
  "tt1234548", // The Men Who Stare at Goats
  "tt0427152", // Dinner for Schmucks
  "tt0242423", // Dude, Where's My Car?
  "tt0486551", // Beerfest
  "tt0247745", // Super Troopers
  "tt0116126", // Dont Be A Menace To South Central While Drinking Your Juice In The Hood
  "tt0424774", // Sharkboy and Lavagirl
  "tt0307987", // Bad Santa
  "tt0293662", // The Transporter
  "tt0110443", // Major Payne
  "tt0328099", // Malibu's Most Wanted
  "tt0232500", // The Fast and The Furious
  "tt0092675", // Bloodsport
  "tt7888964", // Nobody
  "tt0267804", // The One
  "tt0317248", // City of God
  "tt0118615", // Anaconda
  "tt0117998", // Twister
  "tt0278295", // All About the Benjamins
  "tt0381707", // White Chicks
  "tt1130884", // Shutter Island
  "tt2004420", // Neighbors
  "tt8115900", // The Bad Guys
  "tt0250310", // Corky Romano
  "tt5108870", // Morbius
  "tt14079374", // 14 Peaks
  "tt7775622", // Free Solo
  "tt0398165", // The Longest Yard
  "tt0387564", // Saw
  "tt1853728", // Django Unchained
  "tt0351977", // Walking Tall
  "tt0107362", // Last Action Hero
  "tt0317303", // Daddy Day Care
  "tt6710474", // Everything Everywhere All At Once
  "tt0477348", // No Country For Old Men
  "tt0120815", // Saving Private Ryan
  "tt0286106", // Signs
  "tt0402022", // Aeon Flux
  "tt11138512", // The Northman
  "tt0115697", // Black Sheep
  "tt1790886", // The Campaign
  "tt0369339", // Collateral
  "tt0271367", // Eight Legged Freaks
  "tt0208092", // Snatch
  "tt0401792", // Sin City
  "tt0106965", // Free Willy
  "tt1220719", // IP Man
  "tt0210945", // Remember the Titans
  "tt7286456", // Joker
  "tt0111161", // The Shawshank Redemption
  "tt9764362", // The Menu
  "tt1231587", // Hot Tub Time Machine
  "tt1226229", // Get Him to the Greek
  "tt1160419", // Dune
  "tt0374900", // Napoleon Dynamite
  "tt0110357", // The Lion King
  "tt1408253", // Ride Along
  "tt0107977", // Robin Hood Men in Tights
  "tt0365830", // Tenacious D in the Pick of Destiny
  "tt0116756", // Kazaam
  "tt0119215", // Good Burger
  "tt0120207", // Steel
  "tt1010048", // Slumdog Millionaire
  "tt1375666", // Inception
  "tt0111257", // Speed
  "tt0113497", // Jumanji
  "tt0120689", // The Green Mile
  "tt2488496", // Star Wars: The Force Awakens
  "tt0120669", // Fear and Loathing in Las Vegas
  "tt0113419", // The Indian in the Cupboard
  "tt0120382", // The Truman Show
  "tt0115798", // The Cable Guy
  "tt0112508", // Billy Madison
  "tt0109686", // Dumb and Dumber
  "tt0120201", // StarShip Troopers
  "tt4154756", // Avengers Infinity War
  "tt6723592", // Tenet
  "tt2084970", // The Imitation Game
  "tt1649418", // The Gray man
  "tt1457767", // The Conjuring
  "tt0407304", // War of the Worlds
  "",
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
      movieTitle.text(data.Title + ` (${data.Year})`);
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
  scoreEl.text(`Score: ${score}`);
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
      "&limit=5&namespace=0&format=json&origin=*",
    success: function (result) {
      var wikiData = result;
      console.log(wikiData);
      console.log(dataTitle);
      $.each(result[3], function (property, i) {
        if (i.indexOf("film") > -1) {
          console.log(property + " contains the word 'film'");
          wikiFilms.push(i);
          var wikiLink = wikiFilms[0];
        } else {
          var wikiLink = result[3][0];
        }
      });
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
