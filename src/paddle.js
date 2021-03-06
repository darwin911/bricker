const colors = { brickRed: '#843F33', brickAlt: '#CE2427' };

export default class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.width = 150;
    this.height = 16;

    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 10,
    };

    this.maxSpeed = 8;
    this.speed = 0;
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }

  draw(context) {
    context.fillStyle = colors.brickRed;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    if (this.position.x <= 0) {
      this.position.x = 0;
    }
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
    this.position.x += this.speed;
  }
}
