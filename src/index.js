

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 900;
const GAME_HEIGHT = 600;

let block = new BlockUP(GAME_WIDTH, GAME_HEIGHT);
let character = new Character(GAME_WIDTH, GAME_HEIGHT);
new InputHandler(character);

let lastTime = 0;
function gameLoop(timestamp) {
	let deltaTime = timestamp - lastTime;
	lastTime = timestamp;

	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	block.update(deltaTime);
	block.draw(ctx);

	character.update(deltaTime);
	character.draw(ctx);

	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
