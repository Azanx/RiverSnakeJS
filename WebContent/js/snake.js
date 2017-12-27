/**
 * body of our snake, snake movement logic
 */

var snake = (function() {

	var movementDirection = DIRECTION.RIGHT;
	var body = [];
	
	//initialise snake clearing previous status if existant
	function init(initialLength) {
		body.splice(0,body.length); //remove all previous array elements
		//populate our snake body
		for (var i = initialLength; i > 0; i--) {
			body.push({x:i,y:0});
		}
	}
	
	//returns true if collision occured and game should be stopped
	function _checkCollisions (posX, posY) {
		var result = false;
		maxX = Math.floor(mapWidth / fieldSize);
		maxY = Math.floor(mapHeight / fieldSize);
		
		if(posX >= maxX || posX < 0|| posY >= maxY || posY < 0)
			result = true;
		
		return result;
	}
	
	//return true if game over (collision occured)
	function move() {
		body.pop();//remove last tail element
		var nextX = body[0].x+movementDirection.x;
		var nextY = body[0].y+movementDirection.y;
		var isCollision = _checkCollisions(nextX, nextY);
		body.unshift({x:nextX, y:nextY});		
		return isCollision;
	}
	
	init();
	return {
		init : init,
		body : body,
		move : move,
		movementDirection : movementDirection
	};
})();