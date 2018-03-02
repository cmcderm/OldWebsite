class Ball{
	constructor(){
		this.x = width/2;
		this.y = height/2;
		this.vel = createVector(-1, random(-.75, .75));
		this.speed = 4;
		this.size = 10;
	}
	
	checkCollision(p){ //checks if the ball is hitting the chosen paddle
		/* let part1 = this.x - this.size/2 < p.x + p.width;
		if(part1){
			background(0,255,0);
		}
		let part2 = this.x + this.size/2 > p.x + p.width;
		if(part2){
			background(255,0,0);
		}
		let part3 = this.y - this.size/2 > p.y - p.height;
		if(part3){
			background(255,0,255);
		}
		let part4 = this.y + this.size < p.y + p.height;
		if(part4){
			background(255,255,255);
		}
		return  part1 && part2; */
		return this.x < p.x + p.width && this.x + this.size > p.x && this.y < p.y + p.height/2 && this.size + this.y > p.y - p.height/2;
	}
	
	reset(){
		this.x = width/2;
		this.y = height/2;
		this.vel = createVector(this.vel.x * -1, random(-.75, .75));
	}
	
	calcNewYVal(p){
		let distY = p.y - this.y
		return map(distY, -p.height/2, p.height/2, .9, -.9);
	}
	
	move(){
		if(this.y < 0 || this.y > height){
			this.vel.y = -this.vel.y;
		} else if(this.checkCollision(paddle1) && this.vel.x < 0){
			console.log("heyyy");
			this.vel.x = -this.vel.x;
			this.vel.y = this.calcNewYVal(paddle1)
		} else if(this.checkCollision(paddle2) && this.vel.x > 0){
			console.log("oiiii");
			this.vel.x = -this.vel.x;
			this.vel.y = this.calcNewYVal(paddle2)
		} else if(this.x < 0){
			score(1);
			this.reset();
		} else if(this.x > width){
			score(2);
			this.reset();
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