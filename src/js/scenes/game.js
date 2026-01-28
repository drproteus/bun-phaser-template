import Phaser from "phaser"

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" })
  }
  preload() {
    this.load.image("field", "assets/field.png")
    this.load.audio("type-a", "assets/type-a.mp3")
  }
  create() {
    this.sound.stopAll()
    this.sound.play("type-a")
    this.add.image(80, 72, "field")
  }
}

export { GameScene }
