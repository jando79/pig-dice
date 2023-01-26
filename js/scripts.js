//Business Logic

// Game Object Logic
function Game () {
  this.activePlayer = 0;
  this.gameActive = true;
  this.players = [];
}

Game.prototype.changePlayer = function() {
  if (this.activePlayer === 0) {
    this.activePlayer = 1;
  } else {
    this.activePlayer = 0;
  }
}

Game.prototype.endGame = function() {
  if (game.players[game.activePlayer].turnScore + game.players[game.activePlayer].overAllScore >= 100) {
    this.gameActive = false;
  }
}

Game.prototype.newGame = function() {
  this.activePlayer = 0;
  this.players[0].turnScore = 0;
  this.players[1].turnScore = 0;
  this.players[0].overAllScore = 0;
  this.players[1].overAllScore = 0;
 
}

function randomMath() {
  return Math.floor((Math.random() * 6) + 2);
}

// Player Object Logic
function Player() {
  this.overAllScore = 0;
  this.turnScore = 0;
}

Player.prototype.rollDice = function() {
  let roll = randomMath();
  if (roll === 1) {
    this.turnScore = 0;
    game.changePlayer();
  } else {
    this.turnScore += roll;
  }
  
  
}

Player.prototype.endTurn = function() {
  this.overAllScore += this.turnScore;
  this.turnScore = 0;
}

// UI

let game = new Game();
let player1 = new Player();
let player2 = new Player();
game.players.push(player1, player2);


function updateScores() {
  const p1turnScore = game.players[0].turnScore; 
  const p2turnScore = game.players[1].turnScore;
  const p1totalScore = game.players[0].overAllScore;
  const p2totalScore = game.players[1].overAllScore;
  document.getElementById("current-1").innerText = p1turnScore;
  document.getElementById("current-2").innerText = p2turnScore;
  document.getElementById("score-1").innerText = p1totalScore;
  document.getElementById("score-2").innerText = p2totalScore;
  
}
// function displayScores() {
//   const turnScore = game.players[game.activePlayer].turnScore;
//   if (game.activePlayer = 0) {
//     document.getElementById("current-1").innerText = turnScore;
//   } else if (game.activePlayer = 1) {
//     document.getElementById("current-2").innerText = turnScore;
//   }
// }

//game.players[game.activePlayer].turnScore = a bajillion


function handleRollButton() {
  const rollButton = document.querySelector(".btn-roll");
  const holdButton = document.querySelector(".btn-hold");
  const newGame = document.querySelector(".btn-new");
}
window.addEventListener("load", function (){
  document.querySelector(".btn-new").addEventListener("click", game.newGame())
  document.querySelector(".btn-roll").addEventListener("click", function () {
    game.players[game.activePlayer].rollDice();
    updateScores();
    game.endGame();
    if (game.gameActive === false) {
      alert("You have won!");
    };
    updateScores();
  });
  document.querySelector(".btn-hold").addEventListener("click", function() {
    game.players[game.activePlayer].endTurn();
    game.changePlayer();
    updateScores();
    game.endGame();
    if (game.gameActive === false) {
      alert("You have won!");
    };
  });

});