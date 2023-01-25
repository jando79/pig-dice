//Business Logic

function Game () {
  this.activePlayer = 1;
  this.gameActive = true;
  this.players = []
}

let game = new Game()
let player 1 = new player()
let player 2 = new player()
game.players.push(player1)
game.players.push(player2)

game.players[0].overAllScore
  array    
game.players[0].rolldice()

function randomMath() {
  return Math.floor((Math.random() * 6) + 1);
}

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
