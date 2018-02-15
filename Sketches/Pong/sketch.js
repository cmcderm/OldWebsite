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

class Paddle{
	constructor(x, p){
		this.x = x;
		this.y = height/2;
		this.width = 5;
		this.height = 55;
		this.isPlayer = p;
	}
	
	move(){
		if(this.isPlayer){
			this.y = mouseY;
		} else {
			//AI
		}
	}
	
	show(){
		push();
		fill(255);
		rect(this.x, this.y, this.width, this.height);
		pop();
	}
};

class Ball{
	constructor(){
		this.x = width/2;
		this.y = height/2;
		this.vel = createVector(-1, random(-.75, .75));
		this.speed = 2.5;
		this.size = 10;
	}
	
	checkCollision(p){ //checks if the ball is hitting the chosen paddle
		return ((this.x - this.size/2 < p.x + p.width && this.x + this.size/2 > p.x + p.width) && (ball.y - ball.size/2 > p.y - p.height && ball.y + ball.size < p.y + p.height))
	}
	
	move(){
		if(this.y < height || this.y > height){
			this.vel.y = -this.vel.y;
		} else if(checkCollision(paddle1)){
			this.vel.x = -this.vel.x;
		} else if(checkCollision(paddle2)){
			this.vel.x = -this.vel.x;
		}
		this.x += this.vel.x * this.speed;
		this.y += this.vel.y * this.speed;
	}
	
	show(){
		push();
		fill(255);
		rect(this.x, this.y, this.size, this.size);
		pop();
	}
}