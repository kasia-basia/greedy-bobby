var Game = require('./game.js');

var game = new Game();
game.showBobby();
game.showCoin();
game.startGame();

document.addEventListener('keydown', function (event) {
    game.turnBobby(event);
});

var refreshButton = document.querySelector('.playAgain');
refreshButton.addEventListener('click', function () {
    window.location.reload();
});
