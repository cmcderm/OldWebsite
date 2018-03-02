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
			this.x = width * .05;
			this.y = mouseY;
		} else {
			this.x = width * .95;
			this.y = ball.y;
		}
	}
	
	show(){
		push();
		fill(255);
		rect(this.x, this.y, this.width, this.height);
		pop();
	}
};