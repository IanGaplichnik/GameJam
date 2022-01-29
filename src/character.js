export default class Character {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 40,
        this.height = 100,
        this.ifJump = 0
        this.maxSpeed = 5;
        this.speed = 0;
        
        this.position = {
            x: 30,
            y: gameHeight/2 - this.height,
    };
}

    jumpUp() {
        this.speed = this.maxSpeed;
        this.ifJump = 1;
    }

    jumpDown() {
        this.speed = -this.maxSpeed;
    }

    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        this.position.y += -this.speed;
        if (this.position.y <= (this.gameHeight/2 - (this.height*2))) this.jumpDown();
        if (this.position.y >= this.gameHeight/2 - this.height) 
        {
            this.speed = 0;
			this.ifJump = 0;
			//this.position.y = gameHeight/2 - this.height;
		}
    }
}
