

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 900;
const GAME_HEIGHT = 600;
let obstacles = [];
let block = new BlockUP(GAME_WIDTH, GAME_HEIGHT);
//let blockb = new BlockBELOW(GAME_WIDTH, GAME_HEIGHT);
obstacles.push(block);
let character = new Character(GAME_WIDTH, GAME_HEIGHT);
new InputHandler(character);

let lastTime = 0;
let spawnTime = 0;
function gameLoop(timestamp) {
	let deltaTime = timestamp - lastTime;
	lastTime = timestamp;


	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	if (timestamp - spawnTime >= 1000) {
		spawnTime = timestamp;
		obstacles.push(new BlockUP(GAME_WIDTH, GAME_HEIGHT));
	}
	obstacles.forEach(object => object.update(deltaTime));
	obstacles = obstacles.filter(block => !block.markedForDeletion);
	obstacles.forEach(object => object.draw(ctx));



	/*
	block.draw(ctx);

	blockb.update(deltaTime);
	blockb.draw(ctx);
*/
	character.update(deltaTime);
	character.draw(ctx);


	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
