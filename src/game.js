import Ball from './ball.js';
import Brick from './brick.js';
import InputHandler from './input.js';
import Paddle from './paddle.js';

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);

    let bricks = [];
    for (let i = 0; i < 10; i++) {
      bricks.push(new Brick(this, { x: i * 52, y: 10 }));
    }
    this.gameObjects = [this.ball, this.paddle, ...bricks];

    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.gameObjects.forEach((object) => object.update(deltaTime));
  }

  draw(context) {
    this.gameObjects.forEach((object) => object.draw(context));
  }
}
