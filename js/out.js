/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./js/game.js\");\n\nconst game = new Game();\ngame.showBobby();\ngame.showCoin();\ngame.startGame();\n\ndocument.addEventListener('keydown', function (event) {\n    game.turnBobby(event);\n});\n\nconst refreshButton = document.querySelector('.playAgain');\nrefreshButton.addEventListener('click', function () {\n    window.location.reload();\n});\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/bobby.js":
/*!*********************!*\
  !*** ./js/bobby.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Bobby() {\n    this.x = 0;\n    this.y = 0;\n    this.direction = 'right';\n}\n\nmodule.exports = Bobby;\n\n//# sourceURL=webpack:///./js/bobby.js?");

/***/ }),

/***/ "./js/coin.js":
/*!********************!*\
  !*** ./js/coin.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Coin() {\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n}\n\nmodule.exports = Coin;\n\n//# sourceURL=webpack:///./js/coin.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Bobby = __webpack_require__(/*! ./bobby.js */ \"./js/bobby.js\");\nconst Coin = __webpack_require__(/*! ./coin.js */ \"./js/coin.js\");\n\nfunction Game() {\n    this.board = document.querySelectorAll('#board div');\n    this.bobby = new Bobby();\n    this.coin = new Coin();\n    const scoreboard = document.querySelector('strong');\n    const over = document.querySelector('#over');\n    const finalScore = document.querySelector('.finalScore');\n    let score = 0;\n    this.isOver = false;\n\n\n    this.index = function (x, y) {\n        return x + (y * 10);\n    };\n\n    this.showBobby = function () {\n        this.board[this.index(this.bobby.x, this.bobby.y)].classList.add('bobby');\n    };\n\n    this.hideVisibleBobby = function () {\n        this.visibleDave = document.querySelector('.bobby');\n        this.visibleDave.classList.remove('bobby');\n    };\n\n    this.showCoin = function () {\n        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');\n    };\n\n    this.moveBobby = function () {\n\n        this.hideVisibleBobby();\n        if (this.bobby.direction === \"right\") {\n            this.bobby.x += 1;\n        } else if (this.bobby.direction === \"left\") {\n            this.bobby.x -= 1;\n        } else if (this.bobby.direction === \"down\") {\n            this.bobby.y += 1;\n        } else if (this.bobby.direction === \"up\") {\n            this.bobby.y -= 1;\n        }\n\n        this.checkCoinCollision();\n        this.gameOver();\n        if (this.isOver === false){\n            this.showBobby();\n        } else {\n            this.showScoreScreen();\n        }\n\n    };\n\n    this.turnBobby = function (event) {\n        switch (event.which) {\n            case 37:\n                this.bobby.direction = 'left';\n                break;\n            case 38:\n                this.bobby.direction = 'up';\n                break;\n            case 39:\n                this.bobby.direction = 'right';\n                break;\n            case 40:\n                this.bobby.direction = 'down';\n                break;\n        }\n    };\n\n    this.checkCoinCollision = function () {\n        if (this.bobby.x === this.coin.x && this.bobby.y === this.coin.y) {\n            this.scoredCoin = document.querySelector('.coin');\n            this.scoredCoin.classList.remove('coin');\n            score++;\n            scoreboard.innerText = score;\n            this.coin = new Coin();\n            this.showCoin();\n        }\n    };\n\n\n    this.gameOver = function () {\n        if (this.bobby.x < 0 || this.bobby.x > 9 || this.bobby.y < 0 || this.bobby.y > 9) {\n            clearInterval(this.idSetInterval);\n            this.isOver = true;\n        }\n    };\n\n    this.showScoreScreen = function () {\n        over.classList.remove('invisible');\n        finalScore.innerText = score;\n    };\n\n    this.startGame = function () {\n        this.idSetInterval = setInterval(() => this.moveBobby(), 250);\n    };\n\n\n} module.exports = Game;\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ })

/******/ });