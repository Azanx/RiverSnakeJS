/**
 * body of our snake, snake movement logic
 */

var snake = (function(initialLength) {

	var movementDirection = DIRECTION.RIGHT;
	var _init = function() {
		this.body = [];
		//populate our snake body
		for (var i = initialLength; i > 0; i--) {
			body.push({x:i,y:0});
		}
	}
	
	var _checkCollisions = function() {
		
	}
	
	var move = function(direction) {
		alert("move: "+ mapWidth)
	}
	
	_init();
	return {
		body : body,
		move : move,
		movementDirection : movementDirection
	};
})(5);