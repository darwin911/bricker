export default class Ball {
  constructor(game) {
    this.image = document.getElementById('ball');

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;

    this.speed = {
      x: 5,
      y: 2,
    };
    this.position = {
      x: 10,
      y: 10,
    };
    this.size = 16;
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if (this.position.x > this.gameWidth - this.size || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    if (this.position.y > this.gameHeight - this.size || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    let bottomOfBall = this.position.y + this.size;
    let topOfPaddle = this.game.paddle.position.y;
    let leftSideOfPaddle = this.game.paddle.position.x;
    let rightSideOfPaddle =
      this.game.paddle.position.x + this.game.paddle.width;

    if (
      bottomOfBall >= topOfPaddle &&
      this.position.x > leftSideOfPaddle &&
      this.position.x + this.size <= rightSideOfPaddle
    ) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
