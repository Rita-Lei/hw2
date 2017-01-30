var x = 100;
var y = 100;
function setup() { 
  createCanvas(400, 400);
} 
function draw() { 
	ellipse(x,y,50,50);
	if(x <=400){
		x = x + 3;
	}
	else{
		x = 100;
	}
}
