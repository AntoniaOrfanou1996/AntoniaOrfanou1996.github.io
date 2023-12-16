class Dot1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 5; // Adjust the radius as needed
  }

  // Visualization function
  visualise(isCurrent, index) {
    // Your visualization logic goes here
    // This function might draw the dot on the canvas
    // You can customize it based on your requirements
    fill(isCurrent ? color(255, 0, 0) : color(0)); // Red for current dot, else black
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

  // Update function
  update() {
    // Your update logic goes here
    // This function might update the dot's position or other properties
  }

  // Seek function
  seek() {
    // Your seek logic goes here
    // This function might control the dot's behavior
  }
}
