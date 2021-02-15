class Fruit {
  constructor() {
    this.x;
    this.y;

    // Pick random location of fruit
    this.pickLocation = () => {
      this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
      this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    };

    // Draw fruit function
    this.draw = () => {
      ctx.fillStyle = "#ff0000";
      ctx.fillRect(this.x, this.y, scale, scale);
    };
  }
}
