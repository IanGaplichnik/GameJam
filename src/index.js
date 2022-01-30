
let score = 0;
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

let blockspeed = -7;
const GAME_WIDTH = 1500;
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
let coin = new COIN(GAME_WIDTH, GAME_HEIGHT);

let obstacles = [];
obstacles.push(block);

let coinscol = 0;
let coins = [];
coins.push(coin);

let character = new Character(GAME_WIDTH, GAME_HEIGHT);
let input = new InputHandler(character, obstacles);

let lastTime = 0;
let spawnTime = 0;
let cointime = 0;

let background = [];
background.push(new Background(GAME_WIDTH, GAME_HEIGHT, "day_black"));
background.push(new Background(GAME_WIDTH, GAME_HEIGHT, "day_white"));
background.push(new Background(GAME_WIDTH, GAME_HEIGHT, "night_black"));
background.push(new Background(GAME_WIDTH, GAME_HEIGHT, "night_white"));

background.forEach(object => object.setup());


function gameLoop(timestamp) {
	let deltaTime = timestamp - lastTime;
	lastTime = timestamp;
	score = coinscol;
	obstacles.forEach(object => detectCollision(character, object, gamestate));
	if (gamestate.value === 1)
	{
		ctx.rect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fill();
  
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", GAME_WIDTH / 2, GAME_HEIGHT/2);
		return;
	}

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
	if (blockspeed > -9.5){
		if (deltaSTime >= (1000 + blockspeed*10) && deltaSTime <= (1500 + blockspeed * 10)  && Math.round(Math.random())===1) {
			spawnTime = timestamp;
			obstacles.push(new BlockUP(GAME_WIDTH, GAME_HEIGHT));
		}
	}
	

	let push = Math.random();
	let modifier = 40;
	cointime++;
	if (cointime % modifier == 0 && push > 0.3)
	{
		coins.push(new COIN(GAME_WIDTH, GAME_HEIGHT));
	}

	coins.forEach(object => object.update(blockspeed));
	coins.forEach(object => coinCollision(character, object));
	coins = coins.filter(block => !block.markedForDeletion);
	coins.forEach(object => object.draw(ctx, input.state));



	background.forEach(object => object.update(blockspeed));
	background.forEach(object => object.draw(ctx, input.state));
	
	if (blockspeed < -9.5){
		if (deltaSTime >= (1000 + blockspeed * 20) && deltaSTime <= (1500 + blockspeed * 20)  && Math.round(Math.random())===1) {
			spawnTime = timestamp;
			obstacles.push(new BlockUP(GAME_WIDTH, GAME_HEIGHT));
		}
	}
	if (blockspeed < -13){
		if ((1000 + blockspeed * 10) > 20)
		{
			if (deltaSTime >= (1000 + blockspeed * 10) && deltaSTime <= (1500 + blockspeed * 10)  && Math.round(Math.random())===1) 
			{
				spawnTime = timestamp;
				obstacles.push(new BlockUP(GAME_WIDTH, GAME_HEIGHT));
			}
		}
	}
	speedup();
	obstacles.forEach(object => object.update(deltaTime, input.state));
	//obstacles.forEach(object => object.speedup(timestamp));
	obstacles = obstacles.filter(block => !block.markedForDeletion);
	
	//obstacles.forEach(object => object.speedup(timestamp));
	obstacles.forEach(object => object.draw(ctx));

	character.update(deltaTime);
	character.draw(ctx);
	scoreCount(GAME_WIDTH, GAME_HEIGHT, score, ctx, input.state);

	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
