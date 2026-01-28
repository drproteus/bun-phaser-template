import Phaser from "phaser"

class Intro extends Phaser.Scene {
  constructor() {
    super({ key: "introScene" })
  }
  preload() {
    this.load.image("intro", "assets/intro.png")
  }
  create() {
    this.add.image(80, 72, "intro")
    this.input.keyboard.on("keydown", () => {
      this.scene.start("menuScene");
    });
  }
}

export { Intro }
