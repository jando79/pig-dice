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
  if (this.player[0].overAllScore >= 100 || this.player[1].overAllScore >= 100) {
    this.gameActive = false;
  }
}

Game.prototype.newGame = function() {
  this.activePlayer = 0;
  this.players[0].currentScore = 0;
  this.players[1].currentScore = 0;
  this.players[0].overAllScore = 0;
  this.players[1].overAllScore = 0;
}

function randomMath() {
  return Math.floor((Math.random() * 6) + 1);
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
  } else {
    this.turnScore += roll;
  }
}

Player.prototype.endTurn = function() {
  this.overAllScore += this.turnScore;
  this.turnScore = 0;
}




function handleFormSubmission(event) {
  event.preventDefault();



function handleRollButton() {
  const rollButton = document.querySelector(".btn-roll");

  let game = new Game()
  let player1 = new Player();

  
}

window.addEventListener("load", function (){
  document.querySelector(".btn-new").addEventListener("click", NAMEOFNEWGAMEFUNCTION);

  document.querySelector("btn-roll").addEventListener("click", NAMEOFROLLFUNCTION);

  document.querySelector("btn-hold").addEventListener("click", NAMEOFHOLDFUNCTION);

});
