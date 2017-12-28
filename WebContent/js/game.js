/**
 * initializes the game
 */

var Game = (function() {
	var food;
	var scoreField = document.getElementById('score')
	var highscoreField = document.getElementById('highscore')
	var startButton = document.getElementById('start');

	updateScore();
	updateHighScore();
	
	function updateScore() {
		scoreField.textContent = score;
		if(score>highscore) {
			highscore = score;
			updateHighScore();
		}
	}
	
	function updateHighScore() {
		highscoreField.textContent = highscore;
		saveHighScoreInCookie(); //function in settings.js
	}

	function createFood() {
		var done = false;
		while (!done) {
			this.x = Math.floor(Math.random() * (mapWidth / fieldSize));
			this.y = Math.floor(Math.random() * (mapHeight / fieldSize));
			for (var i = 0; i < snake.body.length; i++) {
				if (snake.body[i].x != x || snake.body[i].y != y) {
					done = true;
					break;
				}
			}
		}
		food = this;
	}

	var start = function start() {
		score = 0;
		updateScore();
		snake.init(5);//init snake with 5 body elements
		startButton.setAttribute('disabled', true); //disable start button
		startButton.blur();//remove focus from startButton.
		//on some browsers (ff) it caused keydown to not work
		createFood();
		Draw.drawFullMap(food, snake.body);
		gameLoop = setInterval(performNextStep, 70);
		
	}
	
	function performNextStep() {
		var result = snake.move(food);
		if(result) {
			clearInterval(gameLoop);
			startButton.removeAttribute('disabled');
		} else
		Draw.drawFullMap(food, snake.body);
	}
	
	//add keyboard and button event listeners
	startButton.addEventListener("click", function() {
		start();
	});
	
	document.onkeydown = function(e) {
		snake.changeDirection(e);
	};
	
	return {
		start : start,
		createFood : createFood,
		updateScore : updateScore
	};
})();