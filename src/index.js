

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 900;
const GAME_HEIGHT = 600;
let obstacles = [];
let block = new BlockUP(GAME_WIDTH, GAME_HEIGHT);
//let blockb = new BlockBELOW(GAME_WIDTH, GAME_HEIGHT);
obstacles.push(block);
let character = new Character(GAME_WIDTH, GAME_HEIGHT);
let input = new InputHandler(character, obstacles);
//et detect = new detectCollision(character, obstacles);
let lastTime = 0;
let spawnTime = 0;
function gameLoop(timestamp) {
	let deltaTime = timestamp - lastTime;
	lastTime = timestamp;

	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

	//perevorot()
	obstacles.forEach(object => detectCollision(character, object));
	ctx.fillStyle = 'black';
	if(!input.state)
	{
		ctx.fillRect(0, GAME_HEIGHT/2, GAME_WIDTH, GAME_HEIGHT/2);
		character.sprite.image = document.getElementById("sprite_black");
	}
	else
	{
		ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT/2);
		character.sprite.image = document.getElementById("sprite_white");
	}
	let deltaSTime = timestamp - spawnTime;
	if (deltaSTime >= 700 && deltaSTime <= 1100 && Math.round(Math.random())===1) {
		spawnTime = timestamp;
		obstacles.push(new BlockUP(GAME_WIDTH, GAME_HEIGHT));
	}
	obstacles.forEach(object => object.update(deltaTime, input.state));
	obstacles = obstacles.filter(block => !block.markedForDeletion);
	//obstacles.forEach(object => object.speedup(timestamp));
	obstacles.forEach(object => object.draw(ctx));

	character.update(deltaTime);
	character.draw(ctx);


	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
