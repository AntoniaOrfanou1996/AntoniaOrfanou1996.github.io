class XRay{
	constructor(xXray,yXray,aXray){
		this.x = xXray;
		this.y = yXray;
		this.a = aXray;
	}
	display(){
		push();
		translate(this.x, 0);
		beginShape();
	  for (let i=0; i<=600;i++){
			stroke(255);
		  this.y = sin(radians(i)) * 50 * sin(radians(i));
		  vertex(this.x + i*0.1, this.y*0.1);
	 }
	 endShape();
		pop();
	}
}