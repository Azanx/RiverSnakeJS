/**
 * contains game settings and main variables
 */

var canvas = document.getElementById('canvas');
var mapWidth = canvas.width;
var mapHeight = canvas.height;
var fieldSize = 20; // size of one map field, also size of all objects on
// the map
var score = 0;
var foodValue = 10;
var highscore = 0;
var isActive = false;// is game in active state or otherwise not started
// movement direction, x and y fields mean how many fields to move in which
// direction:
var DIRECTION = Object.freeze({
	LEFT  : {x:-1, y: 0},
	RIGHT : {x: 1, y: 0},
	UP    : {x: 0, y: 1},
	DOWN  : {x: 0, y:-1},
});