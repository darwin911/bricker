import InputHandler from './input.js';
import Paddle from './paddle.js';
let canvas = document.getElementById('gameCanvas');

let context = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(context);

new InputHandler(paddle);

let lastTime = 0;

let ballElement = document.getElementById('ball');

function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  context.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(context);

  context.drawImage(ballElement, 10, 10, 16, 16);

  requestAnimationFrame(gameLoop);
}

gameLoop();
