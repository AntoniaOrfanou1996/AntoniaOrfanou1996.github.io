	class meion {
		constructor(x, y){
    this.x= x;
		this.y = y;
		this.speed = 3;
		this.a = ameion;
		this.color= "#C8C8C8"
	
		
	}
	
	update() { //set the path of the particle 
		this.x += this.speed;  
	}
	display(){
			stroke(this.color);
		  strokeWeight(1);
			translate(this.x, this.y);
		  line(0, 0, width, height);

}
	}