let font
let string1 = "XMAS"
let string2 = "EXAMS"
let dots1 = []
let dots2 = []
let bounds1
let bounds2
let counter = 0
let borderWidth
let currentString = string1;
let currentBounds = [];

let borderX
let borderY
let borderStride

function preload() {
  font = loadFont('Montserrat-Black.otf')
}

function setup() {
  createCanvas(windowWidth, 500)
	background(0,255,0)
	colorMode(HSB, 360, 100, 100, 1)
  
	borderStride = width/100
    borderWidth = borderStride
    bounds1 = font.textToPoints(string1, 125, 350, 300)
	  bounds2= font.textToPoints(string2, 125, 350, 300)
  
    bounds1.forEach((el,ind) => {
        dots1[ind] = new Dot(el.x, el.y)
    })
   
    borderX = borderWidth
    borderY = borderWidth

   bounds2.forEach((el,ind) => {
        dots2[ind] = new Dot(el.x, el.y)
    })
   
    borderX = borderWidth
    borderY = borderWidth
	
		currentBounds = dots1;
}

function draw() {
	  translate(150, 0);
    
	background('#0f0')
	
	//////
	
  // Check for mouse click
  if (mouseIsPressed) {
    // Switch between strings on mouse click
    currentString = currentString === string1 ? string2 : string1;
    counter = 0; // Reset the counter when switching strings
		currentBounds = dots2;
  }


  
		drawText(currentBounds)
	
	    /*
			 if (counter === dots2.length) {
        counter = 0
    }
 		 dots2.forEach((el,ind) => {
        if (ind === counter) {
            el.visualise(false)
        } else {
            el.visualise(true, ind) 
        }
        el.update()
        el.seek()
    })
    couter++*/

}

function drawText(bound) {
    if (counter === bound.length) {
        counter = 0
    }
    bound.forEach((el,ind) => {
        if (ind === counter) {
            el.visualise(false)
        } else {
            el.visualise(true, ind) 
        }
        el.update()
        el.seek()
    })
    counter++
}
