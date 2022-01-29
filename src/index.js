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
new InputHandler(character);


block.draw(ctx);
character.draw(ctx);

function gameLoop(timestamp) {
	let deltaTime = timestamp - lastTime;
	lastTime = timestamp;
	
	ctx.clearRect(0, 0, 900, 600);
	block.draw(ctx);
	character.update(deltaTime);
	character.draw(ctx);
	
	requestAnimationFrame(gameLoop);
}

gameLoop();