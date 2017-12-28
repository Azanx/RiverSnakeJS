/**
 * draws the game elements in canvas
 */
var Draw = (function() {
	var ctx = canvas.getContext('2d');
	var bgColor = 'navy';
	var snakeColor = 'green';
	var snakeHeadColor = 'darkgreen';
	var snakeFaceColor = 'black';
	var snakePartBorder = 'black';
	var foodColor = 'yellow';

	
	var drawFullMap = function(food, snakeBody) {
		_fillMapBackground();
		_drawFood(food);
		_drawSnake(snakeBody);
	}
	
	function _fillMapBackground() {
		ctx.fillStyle=bgColor;
		ctx.fillRect(0, 0, mapWidth, mapHeight);
	}
	
	function _drawFood(food) {
		var radius = fieldSize/2;
		var xPos = food.x*fieldSize+radius;
		var yPos = food.y*fieldSize+radius;
		ctx.beginPath();
		ctx.arc(xPos, yPos, fieldSize/2, radius, 0, 2*Math.PI);
		ctx.fillStyle = foodColor;
		ctx.fill();
	}
	
	function _drawSnake(snakeBody) {
		_drawSnakeFace(snakeBody[0]);
		var i = 1;
		for(i; i<snakeBody.length; i++) 
			_drawSnakePart(snakeBody[i], snakeColor);
	}
	
	function _drawSnakePart(part, color) {
		ctx.fillStyle = color;
		ctx.fillRect(part.x * fieldSize, part.y * fieldSize, fieldSize, fieldSize);
		
		ctx.strokeStyle=snakePartBorder;
		ctx.lineWidth = 2;
		ctx.strokeRect(part.x * fieldSize, part.y * fieldSize, fieldSize, fieldSize);
	}
	
	function _drawSnakeFace(face) {
		//draw basic head shape
		_drawSnakePart(face, snakeHeadColor);
		//drawing 'face':
		ctx.fillStyle = snakeFaceColor;
		//starting at middle of head
		var direction = snake.getDirection();
		var x = face.x * fieldSize + fieldSize/2;
		var y = face.y * fieldSize + fieldSize/2;
		//draw triangle with one vertice at middle of snake face
		//and other two same as two vertices of the head in direction of movement
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x+direction.x*fieldSize/2-direction.y*fieldSize/2,
				y+direction.y*fieldSize/2-direction.x*fieldSize/2);
		ctx.lineTo(x+direction.x*fieldSize/2+direction.y*fieldSize/2,
				y+direction.y*fieldSize/2+direction.x*fieldSize/2);
		ctx.fill();
	}
	
	return {
		drawFullMap : drawFullMap
	}
})();