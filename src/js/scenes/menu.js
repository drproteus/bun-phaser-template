import Phaser from "phaser"

class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene" })
  }
  preload() {
    this.load.image("menu", "assets/main-menu.png")
    this.load.audio("title", "assets/title.mp3")
  }
  create() {
    this.add.image(80, 72, "menu")
    this.sound.play("title")
  }
}

export { MainMenu }
