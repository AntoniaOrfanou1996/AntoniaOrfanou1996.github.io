class RandomWalker {
	constructor(xbparticle,ybparticle) {
		this.x = xbparticle
		this.y = ybparticle
	}
	
	display() {
		let r= floor(random(8));
		switch (r){
			case 0: 
				this.x = this.x + 5
				break;
			case 1: 
				this.x = this.x - 3
				break;
			case 2: 
				this.y = this.y + 6
				break;
			case 3:
				this.y = this.y - 2
				break;
			case 4 :
				this.x = this.x + 7
				this.y = this.y + 4
				break;
			case 5: 
				this.x = this.x + 8
				this.y = this.y - 2
				break;
			case 6:
				this.x = this.x - 3
				this.y = this.y + 6
				break;
			case 7:
				this.x = this.x - 2
				this.y = this.y - 1
				break;
			}
				stroke(255);
		  strokeWeight(4);
			point (this.x,this.y);
	}
}