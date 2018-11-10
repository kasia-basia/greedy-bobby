const Game = require('./game.js');

const game = new Game();
game.showBobby();
game.showCoin();
game.startGame();

document.addEventListener('keydown', function (event) {
    game.turnBobby(event);
});

const refreshButton = document.querySelector('.playAgain');
refreshButton.addEventListener('click', function () {
    window.location.reload();
});
