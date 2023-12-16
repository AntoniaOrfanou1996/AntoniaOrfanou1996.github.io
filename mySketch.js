let font;
let string1 = "XMAS";
let string2 = "EXAMS";
let dots1 = [];
let dots2 = [];
let bounds1;
let bounds2;
let counter = 0;
let borderWidth;
let currentstring = string1; 
Dot1 = [];


let borderX;
let borderY;
let borderStride;
let currentString = string1; // Variable to keep track of the current string

function preload() {
  font = loadFont('Montserrat-Black.otf');
}

function setup() {
  createCanvas(windowWidth, 500);
  colorMode(HSB, 360, 100, 100, 1);
background('#0f0');
	
  borderStride = width / 100;
  borderWidth = borderStride;
  bounds1 = font.textToPoints(string1, 125, 350, 300);
  bounds2 = font.textToPoints(string2, 125, 350, 300);

  bounds1.forEach((el, ind) => {
    dots1[ind] = new Dot1(el.x, el.y);
  });

  borderX = borderWidth;
  borderY = borderWidth;

  bounds2.forEach((el, ind) => {
    dots2[ind] = new Dot1(el.x, el.y);
  });

  borderX = borderWidth;
  borderY = borderWidth;
}

function draw() {
  translate(150, 0);

  background('#0f0');

  // Check for mouse click
  if (mouseIsPressed) {
    // Switch between strings on mouse click
    currentString = currentString === string1 ? string2 : string1;
    counter = 0; // Reset the counter when switching strings
  }

  // Draw the current string
  let dots;
  let currentBounds;
  if (currentString === string1) {
    dots = dots1;
    currentBounds = bounds1;
  } else {
    dots = dots2;
    currentBounds = bounds2;
  }

  if (counter === dots.length) {
    counter = 0;
  }
  dots.forEach((el, ind) => {
    if (ind === counter) {
      el.visualise(false);
    } else {
      el.visualise(true, ind);
    }
    el.update();
    el.seek();
  });
  counter++;
}

class Dot {
  // Your Dot class implementation goes here
  // (Assuming it is defined elsewhere in your code)
}


