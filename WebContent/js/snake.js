/**
 * body of our snake, snake movement logic
 */

var snake = (function() {

	var movementDirection;
	var newMovementDirection;
	var body = [];
	
	//initialise snake clearing previous status if existant
	function init(initialLength) {
		body.splice(0,body.length); //remove all previous array elements
		movementDirection = DIRECTION.RIGHT;
		newMovementDirection = DIRECTION.RIGHT;
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

		if(posX >= maxX || posX < 0|| posY >= maxY || posY < 0) {
			console.log("border hit!");
			result = true;
		}
		else {
			for(var i=0; i<body.length; i++) {
				if(posX == body[i].x && posY == body[i].y) {
					console.log("snake body hit!");
					result = true;
					break;
				}
			}
		}
		return result;
	}
	
	//check if snake found food
	function _checkForFood(posX, posY, food) {
		var result = false;
		if(posX == food.x && posY == food.y) {
			console.log("found food!");
			score+=foodValue;
			Game.updateScore();
			Game.createFood();
			result = true;
		}
		
		return result;
	}
	
	//return true if game over (collision occured)
	function move(food) {
		movementDirection = newMovementDirection;
		var nextX = body[0].x+movementDirection.x;
		var nextY = body[0].y+movementDirection.y;
		var usCollision = false;
		if(!_checkForFood(nextX, nextY, food)) {
			body.pop();//remove last tail element
			isCollision = _checkCollisions(nextX, nextY);
		}
		body.unshift({x:nextX, y:nextY});		
		return isCollision;
	}
	
	//change movement direction if not opposite to current direction
	function changeDirection(e) {
		var keyCode = e.keyCode;
//		var keyCode = e.keyCode || e.which;
//		console.log("CURRENT DIRECTION"+movementDirection.value);
		switch(keyCode) {
		case 37:
//			console.log('left');
			if(movementDirection != DIRECTION.RIGHT){
				newMovementDirection = DIRECTION.LEFT;
			}
			break;
		case 38:
//			console.log('up');
			if(movementDirection != DIRECTION.DOWN){
				newMovementDirection = DIRECTION.UP;
			}
            break;
		case 39:
//			console.log('right');
			if(movementDirection != DIRECTION.LEFT){
				newMovementDirection = DIRECTION.RIGHT;
			}
			break;
		case 40:
//			console.log('down');
			if(movementDirection != DIRECTION.UP){
				newMovementDirection = DIRECTION.DOWN;
			}
            break;
		}
	}
	
	init();
	return {
		init : init,
		body : body,
		move : move,
		changeDirection: changeDirection
	};
})();