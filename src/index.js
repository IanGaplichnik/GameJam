import Block from "../src/block.js";
import Sprite from "../src/sprite.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 900;
const GAME_HEIGHT = 400;

ctx.clearRect(0, 0, 400, 900);

ctx.fillRect(50, 50, 50, 100);

let block = new Block(GAME_WIDTH, GAME_HEIGHT);

let sprite = new Sprite();

block.draw(ctx);

let lastTime = 0;
function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  sprite.update();
  sprite.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);