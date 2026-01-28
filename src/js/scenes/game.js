import Phaser from "phaser"

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" })
  }
  preload() {
    this.load.image("field", "assets/field.png")
  }
  create() {
    this.add.image(80, 72, "field")
  }
}

export { GameScene }
