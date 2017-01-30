function setup() { 
  createCanvas(400, 400);
	background(220);
} 

function draw() { 
	ellipse(mouseX,mouseY,100,100);
	ellipse(mouseX-20,mouseY-8,20,20);
	ellipse(mouseX+20,mouseY-8,20,20);
	arc(mouseX,mouseY+10,60, 60, 0, PI);
}
