import Block from "../src/block.js";
import Character from "../src/character.js";
import InputHandler from "../src/input.js";

const GAME_WIDTH = 900;
const GAME_HEIGHT = 600;

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');
let lastTime = 0;
let block = new Block(GAME_WIDTH, GAME_HEIGHT);
let character = new Character(GAME_WIDTH, GAME_HEIGHT);
new InputHandler();

function gameLoop() {
	let deltaTime = timestamp - lastTime;
	lastTime = timestamp;
	block.draw(ctx);
	character.draw(ctx);
	ctx.clearRect(0, 0, 400, 900);
	requestAnimationFrame(gameLoop);
}
1