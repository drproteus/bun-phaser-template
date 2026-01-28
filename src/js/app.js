import Phaser from "phaser";
import { Intro } from "./scenes/intro";
import { MainMenu } from "./scenes/menu";

// Setup
document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    let config = {
      type: Phaser.CANVAS,
      width: 160,
      height: 140,
      scene: [Intro, MainMenu],
      physics: {
        // default: "arcade",
        // arcade: {
        //   gravity: { y: 300 },
        //   debug: false
        // }
      },
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
