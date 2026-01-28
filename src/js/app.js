import Phaser from "phaser";
import { Example } from "./scenes/example";

// Setup
document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    let config = {
      type: Phaser.CANVAS,
      width: 800,
      height: 600,
      scene: Example,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 300 },
          debug: false
        }
      },
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
      }
    };

    const game = new Phaser.Game(config);
  }
}
