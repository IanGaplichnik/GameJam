

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 900;
const GAME_HEIGHT = 600;
/*const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4
};
*/
let gamestate = {Value: 0};

let block = new BlockUP(GAME_WIDTH, GAME_HEIGHT);

let obstacles = [];
obstacles.push(block);

let character = new Character(GAME_WIDTH, GAME_HEIGHT);
let input = new InputHandler(character, obstacles);

let lastTime = 0;
let spawnTime = 0;

let background = [];
background.push(new Background(GAME_WIDTH, GAME_HEIGHT, "day_black"));
background.push(new Background(GAME_WIDTH, GAME_HEIGHT, "day_white"));
background.push(new Background(GAME_WIDTH, GAME_HEIGHT, "night_black"));
background.push(new Background(GAME_WIDTH, GAME_HEIGHT, "night_white"));

background.forEach(object => object.setup());


function gameLoop(timestamp) {
	let deltaTime = timestamp - lastTime;
	lastTime = timestamp;

	obstacles.forEach(object => detectCollision(character, object, gamestate));
	// if (gamestate.value === 1)
	// {
	// 	ctx.rect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    //     ctx.fillStyle = "rgba(0,0,0,1)";
    //     ctx.fill();
  
    //     ctx.font = "30px Arial";
    //     ctx.fillStyle = "white";
    //     ctx.textAlign = "center";
    //     ctx.fillText("GAME OVER", GAME_WIDTH / 2, GAME_HEIGHT/2);
	// 	return;
	// }
	
	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
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
	if (deltaSTime >= 1000 && deltaSTime <= 1500 && Math.round(Math.random())===1) {
		spawnTime = timestamp;
		obstacles.push(new BlockUP(GAME_WIDTH, GAME_HEIGHT));
	}
	
	background.forEach(object => object.update());
	background.forEach(object => object.draw(ctx, input.state));
	
	obstacles.forEach(object => object.update(deltaTime, input.state));
	obstacles = obstacles.filter(block => !block.markedForDeletion);
	
	//obstacles.forEach(object => object.speedup(timestamp));
	obstacles.forEach(object => object.draw(ctx));

	character.update(deltaTime);
	character.draw(ctx);


	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
