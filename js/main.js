const canvas = document.querySelector(`.canvas`);
const ctx = canvas.getContext("2d");

const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;

// Main function
(function setup() {
  snake = new Snake();
  snake.draw();

  const fruit = new Fruit();
  fruit.pickLocation();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();

    if (snake.eat(fruit)) {
      fruit.pickLocation();
    }
  }, 250);
})();

// Keys listener
window.addEventListener("keydown", (e) => {
  const direction = e.key.replace("Arrow", "");
  snake.changeDirection(direction);
});
