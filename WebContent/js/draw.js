/**
 * draws the game elements in canvas
 */
var Draw = (function() {
	var ctx = canvas.getContext('2d');
	var bgColor = 'navy';
	var snakeColor = 'green';
	var snakeHeadColor = 'darkgreen';
	var foodColor = 'yellow';

	function _fillMapBackground() {
		ctx.fillStyle=bgColor;
		ctx.fillRect(0, 0, mapWidth, mapHeight);
	}
	
	function _drawFood(food) {
		var radius = fieldSize/2;
		var xPos = food.x*fieldSize+radius;
		var yPos = food.y*fieldSize+radius;
		ctx.arc(xPos, yPos, fieldSize/2, radius, 0, 2*Math.PI);
		ctx.fillStyle = foodColor;
		ctx.fill();
	}
	
	var drawFullMap = function(food) {
		_fillMapBackground();
		_drawFood(food);
	};
	
	return {
		drawFullMap : drawFullMap
	}
})();