import Phaser from "phaser";
import { Example } from "./scenes/example";

// Setup
document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    const screenCanvas = document.createElement("canvas");
    screenCanvas.id = "screenCanvas";
    document.getElementById("main").append(screenCanvas)

    let config = {
      type: Phaser.CANVAS,
      width: 800,
      height: 600,
      scene: Example,
      canvas: document.getElementById("screenCanvas"),
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 300 },
          debug: false
        }
      },
    };

    const game = new Phaser.Game(config);
  }
}
