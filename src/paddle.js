const colors = { brickRed: '#843F33', brickAlt: '#CE2427' };

export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 16;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10,
    };
  }

  draw(context) {
    context.fillStyle = colors.brickRed;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    this.position.x += 5 / deltaTime;
  }
}
