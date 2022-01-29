import BlockUP from "./blockUP.js";
import BlockBOT from "./blockBOT.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 900;
const GAME_HEIGHT = 600;

let blockU = new BlockUP(GAME_WIDTH, GAME_HEIGHT);
//let blockD = new BlockBOT(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;
function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  blockU.update(deltaTime);
  blockU.draw(ctx);
  //blockD.update(deltaTime);
 // blockD.draw(ctx);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);