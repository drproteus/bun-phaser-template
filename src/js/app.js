import Phaser from "phaser";
import { Intro } from "./scenes/intro";
import { MainMenu } from "./scenes/menu";
import { GameScene } from "./scenes/game"

// Setup
document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    let config = {
      type: Phaser.CANVAS,
      width: 160,
      height: 144,
      scene: [Intro, MainMenu, GameScene],
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
      pixelArt: true,
      zoom: 4,
    };

    const game = new Phaser.Game(config);
  }
}
