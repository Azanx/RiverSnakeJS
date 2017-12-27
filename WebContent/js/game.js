/**
 * initializes the game
 */

var Game = (function() {
	var food;
	var scoreField = document.getElementById('score')
	var highscoreField = document.getElementById('highscore')
	var startButton = document.getElementById('start');

	scoreField.textContent = score;
	highscoreField.textContent = highscore;
	
	startButton.addEventListener("click", function() {
		start();
	});
	
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
		snake.init(5);//init snake with 5 body elements
		startButton.setAttribute('disabled', true); //disable start button
		createFood();
		Draw.drawFullMap(food, snake.body);
		gameLoop = setInterval(performNextStep, 70);
		
	}
	
	function performNextStep() {
		var result = snake.move();
		if(result) {
			clearInterval(gameLoop);
			startButton.removeAttribute('disabled');
		}
		Draw.drawFullMap(food, snake.body);
	}

	return {
		start : start
	};
})();
//Game.start();