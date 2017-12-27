/**
 * body of our snake
 */

var snake = (function(initialLength) {

	var _init = function() {
		this.length=initialLength;
		this.body = [];
		//populate our snake body
		for (var i = 0; i < length; i++) {
			body.push({x:i,y:0});
		}
	}
	
	var checkCollisions = function() {
		
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