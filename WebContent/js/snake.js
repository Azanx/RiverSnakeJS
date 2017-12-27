/**
 * body of our snake, snake movement logic
 */

var snake = (function(initialLength) {

	var _init = function() {
		this.length=initialLength;
		this.body = [];
		//populate our snake body
		for (var i = length; i > 0; i--) {
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
		length : length,
		body : body,
		move : move
	};
})(5);