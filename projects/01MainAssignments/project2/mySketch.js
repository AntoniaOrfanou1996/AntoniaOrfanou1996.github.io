var xmeion;
var ymeion;
//let r;  
let ameion;
//let countermeions = 0;
//const maxRepetitionsmeions = 100;
let meions = []
//let amountmeion = par.amount1;

let aXray; 
let xXray,yXray;
//let amountXray = par.amount2;
let rays = []

var xbparticle;
var ybparticle;
let rbparticle;  
let counterbparticle = 0;
const maxRepetitionsbparticle = 100;
let walkers = []
//let amountbparticle = par.amount3;

var par = { amount1: 200, amount2:200, amount3:100};

function setup() {
	createCanvas(600, 600);
	background(0);
	strokeWeight(1);
	
	let gui = new dat.GUI();
	gui.add(par, 'amount1', 10, 50);
	gui.add(par, 'amount2', 100, 300);
	gui.add(par, 'amount3', 50, 100);
	
	for (let i = 50; i<par.amount1; i++ ){
		for (let j= 200 ; j<width; j++){ 
		xmeion= random(j);    }// thinks what works best as a starting point 
		for (let r=20; r<height; r++){
		ymeion= random(r);}
		ameion = random(270);
		meions.push(new meion(xmeion,ymeion))
	}
	
		for ( let r = 0; r<par.amount2; r++){
		xXray= random(width);
		yXray= random(height);
		aXray = random(270)
		rays.push(new XRay(xXray,yXray,aXray))
	}
	
		for (let i = 0; i<par.amount3; i++ ){
		xbparticle= random(width);
		ybparticle= random(height);
		walkers.push(new RandomWalker(xbparticle,ybparticle))
	}
	
}
function draw() {
   //background(0);
	push()
		for (let m = 0; m< meions.length; m++){
			  rotate(radians(meions[m].a));
				meions[m].display();
		}
	pop()
	push()
	noFill();
	for (let r = 0; r< rays.length; r++){
		//push()
		//translate(rays[r].x, 0);
		rotate(radians(rays[r].a));
		rays[r].display();
		//pop();
	}
	pop()
	 if (counterbparticle < maxRepetitionsbparticle) {
		for (let rw = 0; rw< walkers.length; rw++){
				walkers[rw].display()
		}
		counterbparticle++
	 }
 }
function mousePressed(){
	
	for (let i = 0; i<par.amount1; i++ ){
		for (let j= 200 ; j<width; j++){ 
		xmeion= random(j);    }// thinks what works best as a starting point 
		for (let r=20; r<height; r++){
		ymeion= random(r);}
		ameion = random(270);
		meions.push(new meion(xmeion,ymeion))
	}
	
		for ( let r = 0; r<par.amount2; r++){
		xXray= random(width);
		yXray= random(height);
		aXray = random(270)
		rays.push(new XRay(xXray,yXray,aXray))
	}
	
		for (let i = 0; i<par.amount3; i++ ){
		xbparticle= random(width);
		ybparticle= random(height);
		walkers.push(new RandomWalker(xbparticle,ybparticle))
	}
		 if (counterbparticle < maxRepetitionsbparticle) {
		for (let rw = 0; rw< walkers.length; rw++){
				walkers[rw].display()
		}
		counterbparticle++
	 }
}