
let deck;
let takeCardButt = document.getElementById(`takeCardBtn`);
let passBtn = document.getElementById(`passBtn`);
let newGameBtn = document.getElementById(`newGameBtn`)
let numberOfPlayers = 1;


function createDeck() {
  for (let i = 0; i < 4; i++) {
    for (j = 2; j <= 14; j++) {
      let suit;
      let number;
      let value;
      let name;
      if (i === 0)
        suit = 'hearts'
      if (i === 1)
        suit = 'clubs'
      if (i === 2)
        suit = 'diamonds'
      if (i === 3)
        suit = 'spades'

      if (j === 11) {
        number = 'jack';
        value = 10
      }
      if (j === 12) {
        number = 'queen';
        value = 10
      }
      if (j === 13) {
        number = 'king';
        value = 10
      }
      if (j === 14) {
        number = 'ace';
        value = 11
      }

      if (j < 11)
        number = j;
      if (j < 11)
        value = j;

      deck.push({suit: suit, value: value, name: number})
    }
  }
}


const dealer = {
  cards: [],
  score: 0,
  takeCard: function() {
    let randomCard = Math.floor(Math.random() * deck.length)
    dealer.score += deck[randomCard].value
    dealer.cards.push(deck.splice(randomCard, 1)[0])
    document.getElementById('dealer').innerHTML = "Dealer's score - " + dealer.score;
    // console.log("dealer score - " + dealer.score)
  }
}



const Player = function(money, cards) {
  this.money = money;
  this.cards = cards;
  this.score = 0;
  this.takeCard = () => {
    let randomCard = Math.floor(Math.random() * deck.length)
    player.score += deck[randomCard].value
    player.cards.push(deck.splice(randomCard, 1)[0])
    // console.log("player score - " + player.score)
    document.getElementById('player1').innerHTML = "Player's score - " + player.score;
    if (player.score > 21)
    results();
      };
  this.pass = () => {
    dealersTurn();
  };
}

let player = new Player(1000, []);


function start() {
deck = [];
createDeck();
dealer.score = 0;
player.score = 0;
displayResults("");

  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < numberOfPlayers; i++) {
      let randomCard = Math.floor(Math.random() * deck.length);
      player.score += deck[randomCard].value;
      player.cards.push(deck.splice(randomCard, 1)[0]);
      document.getElementById('player1').innerHTML = "Player's score - " + player.score;
    }
    if (j == 0) {
      let dealerRandomCard = Math.floor(Math.random() * deck.length);
      dealer.score += deck[dealerRandomCard].value;
      dealer.cards.push(deck.splice(dealerRandomCard, 1)[0]);
      document.getElementById('dealer').innerHTML = "Dealer's score - " + dealer.score;
      console.log(dealer);
    }
  }
}

function dealersTurn() {
  while (dealer.score < 17) {
    dealer.takeCard();
  }
  results();
}

  function results(){
  if (dealer.score <= 21 && dealer.score > player.score  || player.score > 21/*&& dealer.score >= 17*/) {
    displayResults("dealer won");
  } else if (dealer.score > 21 || dealer.score < player.score) {
    displayResults("you won");
  } else if (dealer.score == player.score ){
    displayResults("draw");
  } else displayResults("error");
}

function displayResults(text){
  document.getElementById('results').innerHTML = text;
  console.log(text);
}


passBtn.addEventListener('click', function() {
  player.pass();
});

takeCardButt.addEventListener('click', function() {
  player.takeCard();
});

newGameBtn.addEventListener('click', function() {
  start();
});

// console.log(`dealer:` + dealer);
// console.log(dealer);
// console.log(`player:` + player1);
// console.log(player1);
