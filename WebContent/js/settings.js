/**
 * contains game settings and main variables
 */
var canvas = document.getElementById('canvas');
var mapWidth = canvas.width;
var mapHeight = canvas.height;
var fieldSize = 20; // size of one map field, also size of all objects on
// the map
var score = 0;
var foodValue = 10; //point value of food for generating score
var highscore = 0;
var isActive = false;// is game in active state or otherwise not started
// movement direction, x and y fields mean how many fields to move in which
// direction:
var DIRECTION = Object.freeze({
	LEFT  : {value:'left',  x:-1, y: 0},
	RIGHT : {value:'right', x: 1, y: 0},
	UP    : {value:'up',    x: 0, y:-1},
	DOWN  : {value:'down',  x: 0, y: 1},
});

loadHighScoreFromCookie();

function loadHighScoreFromCookie() {
	var cookiesArray = document.cookie.split(';');
	console.log(cookiesArray);
	
	for(var i = 0; i<cookiesArray.length; i++) {
		var singleCookie = cookiesArray[i].split("=");
		console.log(singleCookie);
		
		if(singleCookie[0].trim()=='highscore') {
			var cookieScore = singleCookie[1].trim();
			if(cookieScore>highscore)
				highscore=singleCookie[1].trim();
			console.log("highscore: "+highscore);
			break;
		}
	}
}

function saveHighScoreInCookie() {
	var expDate = new Date();
    expDate.setTime(expDate.getTime()+(1000*60*60*24*365*100));//max cookie age = 100 years
    console.log("save highscore: "+highscore+";expires: "+expDate.toGMTString());
    
	document.cookie="highscore="+highscore+";expires="+expDate.toGMTString();
}