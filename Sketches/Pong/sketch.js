let paddle1;
let paddle2;
let ball;
let score1 = 0;
let score2 = 0;

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
}