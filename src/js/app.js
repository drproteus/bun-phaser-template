import _, { random } from "lodash";
import $ from "jquery";
import Backbone from "backbone";

$(function () {
  const Sprite = Backbone.Model.extend({
    defaults: function () {
      return {
        "x": 1,
        "y": 0
      }
    },
    moveX: function (n) {
      this.set({ x: this.get("x") + n });
    },
    moveY: function (n) {
      this.set({ y: this.get("y") + n })
    },
    update: function () {
      $("#status").html(`I am at (${this.get("x")}, ${this.get("y")}).`);
      $("#sprite").css("left", this.get("x")).css("top", this.get("y"));
    }
  });

  $("h1").html("Hello, bun!");
  $("h1").fadeToggle();

  const m = new Sprite();
  const speed = 10;
  $(document).on("keydown", function (e) {
    const keyCode = e.which;
    if (keyCode == 38) {
      // move up
      m.moveY(-1 * speed);
    } else if (keyCode == 40) {
      // move down
      m.moveY(1 * speed)
    } else if (keyCode == 37) {
      // move left
      m.moveX(-1 * speed);
    } else if (keyCode == 39) {
      // move right
      m.moveX(1 * speed);
    } else if (keyCode == 32) {
      // reset position
      m.set({ x: 0, y: 0 });
    }
  });
  setInterval(function () {
    m.update();
  }, 100);
});
