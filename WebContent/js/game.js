/**
 * initializes the game
 */


var Game = (function() {
	var food;// = new CreateFood();
	document.getElementById('score').textContent = score;
	document.getElementById('highscore').textContent = highscore;

	function createFood() {
		this.x = Math.floor(Math.random() * (mapWidth / fieldSize));
		this.y = Math.floor(Math.random() * (mapHeight / fieldSize));
		food = this;
	}
	snake.move();
	createFood();
	alert('Food x: ' + food.x + ', y: ' + food.y);
	createFood();
	alert('Food x: ' + food.x + ', y: ' + food.y);
	
	return {
		canvas : canvas
	}
	
})();