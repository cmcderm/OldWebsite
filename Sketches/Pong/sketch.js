let paddle1;
let paddle2;
let ball;
let score1 = 0;
let score2 = 0;

let p1Score = 0;
let p2Score = 0;

function setup() {
	createCanvas(600, 400);

	paddle1 = new Paddle(.10 * width, true);
	paddle2 = new Paddle(.90 * width, false)
	ball = new Ball()
	rectMode(CENTER);
	noStroke();
}

function draw() {
  // put drawing code here
	background(0);
	paddle1.move();
	paddle2.move();
	ball.move();
	paddle1.show();
	paddle2.show();
	ball.show();
	
	drawBoard();
}

function score(p){
	if(p === 1){
		p1Score += 1;
	} else if(p === 2){
		p2Score += 1;
	}
}

function drawBoard(){
	push();
	stroke(255, 255, 255, 140);
	strokeWeight(3);
	
	let lineY = 0;
	while(lineY < height){
		line(width/2, lineY, width/2, lineY + 5);
		lineY += 15;
	}
	pop();
	push();
	stroke(255);
	fill(255);
	textSize(35);
	text(p1Score.toString(), width * .25, height * .1);
	text(p2Score.toString(), width * .75, height * .1);
	pop();
}