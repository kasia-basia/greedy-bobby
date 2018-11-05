var Bobby = require("./bobby.js");
var Coin = require("./coin.js");

function Game() {
    this.board = document.querySelectorAll('#board div');
    this.bobby = new Bobby();
    this.coin = new Coin();
    var score = 0;
    this.isOver = false;
    var scoreboard = document.querySelector('strong');
    var over = document.querySelector('#over');
    var finalScore = document.querySelector('.finalScore');

    this.index = function (x, y) {
        return x + (y * 10);
    };

    this.showBobby = function () {
        this.board[this.index(this.bobby.x, this.bobby.y)].classList.add('bobby');
    };

    this.hideVisibleBobby = function () {
        this.visibleDave = document.querySelector('.bobby');
        this.visibleDave.classList.remove('bobby');
    };

    this.showCoin = function () {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    };

    this.moveBobby = function () {

        this.hideVisibleBobby();
        if (this.bobby.direction === "right") {
            this.bobby.x += 1;
        } else if (this.bobby.direction === "left") {
            this.bobby.x -= 1;
        } else if (this.bobby.direction === "down") {
            this.bobby.y += 1;
        } else if (this.bobby.direction === "up") {
            this.bobby.y -= 1;
        }

        this.checkCoinCollision();
        this.gameOver();
        if (this.isOver === false){
            this.showBobby();
        } else {
            this.showScoreScreen();
        }

    };

    this.turnBobby = function (event) {
        switch (event.which) {
            case 37:
                this.bobby.direction = 'left';
                break;
            case 38:
                this.bobby.direction = 'up';
                break;
            case 39:
                this.bobby.direction = 'right';
                break;
            case 40:
                this.bobby.direction = 'down';
                break;
        }
    };

    this.checkCoinCollision = function () {
        if (this.bobby.x === this.coin.x && this.bobby.y === this.coin.y) {
            this.scoredCoin = document.querySelector('.coin');
            this.scoredCoin.classList.remove('coin');
            score++;
            scoreboard.innerText = score;
            this.coin = new Coin();
            this.showCoin();
        }
    };


    this.gameOver = function () {

        if (this.bobby.x < 0 || this.bobby.x > 9 || this.bobby.y < 0 || this.bobby.y > 9) {
            clearInterval(this.idSetInterval);
            this.isOver = true;
        }
    };

    this.showScoreScreen = function () {
        over.classList.remove('invisible');
        finalScore.innerText = score;
    };

    this.startGame = function () {
        var self = this;
        this.idSetInterval = setInterval(function () {
            self.moveBobby()
        }, 250);
    };


} module.exports = Game;