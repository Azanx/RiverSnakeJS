/**
 * draws the game elements in canvas
 */
var Draw = (function() {
	var ctx = canvas.getContext('2d');
	var bgColor = 'navy';
	var snakeColor = 'green';
	var snakeHeadColor = 'darkgreen';
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
		_drawSnakePart(snakeBody[0], snakeHeadColor);
		for(var i=1; i<snakeBody.length; i++) {
			_drawSnakePart(snakeBody[i], snakeColor);
		}
	}
	
	function _drawSnakePart(part, color) {
		ctx.fillStyle = color;
		ctx.fillRect(part.x * fieldSize, part.y * fieldSize, fieldSize, fieldSize);
		
		ctx.strokeStyle=snakePartBorder;
		ctx.lineWidth = 2;
		ctx.strokeRect(part.x * fieldSize, part.y * fieldSize, fieldSize, fieldSize);
	}
	
	return {
		drawFullMap : drawFullMap
	}
})();