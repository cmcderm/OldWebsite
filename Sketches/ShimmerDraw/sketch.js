let boxes = [];

function setup() {
  createCanvas(1000, 1000);
  
}

function draw() {
	background(220);
	push();
	fill(0);
	textSize(32);
	textFont('Helvetica');
	text('Draw!', 10, 30);
	pop();
	if(mouseIsPressed){
		boxes.push(new Box(mouseX, mouseY, random(30, 40)));
	}
  
	for(let box of boxes){
		box.show();
	}
}

class Box{
	constructor(x, y, s){
		this.x = x;
		this.y = y;
		this.size = s;
	}
	
	show(){
		push();
		noStroke();
		let distToMouse = dist(mouseX, mouseY, this.x, this.y);
		fill(255-random(0,255)-distToMouse,255-random(0,255) - distToMouse,255-random(0,255) - distToMouse);
		ellipse(this.x, this.y, this.size, this.size);
		pop();
	}
}
