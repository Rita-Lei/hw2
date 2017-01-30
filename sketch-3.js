var x = 100;
var y = 100;
function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
	if(x<350){
		x = x + 3;
	ellipse(x,y,100,100);
	}
		else{
			x = 100;
  }
}
