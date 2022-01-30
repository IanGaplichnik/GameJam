class BlockUP {
	constructor(gameWidth, gameHeight) {
		this.gameHeight = gameHeight;
		this.gameWidth = gameWidth;
		
		this.sprite_width = 275;
		this.sprite_height = 500;
		this.state = Math.round(Math.random());
		this.width = (60 + Math.random() * 50);
		this.height = Math.floor(Math.random() * 200) + 20;
		if (this.state) {
			this.fillStyle = 'black';
			this.image = document.getElementById("block_black");
			this.y = gameHeight/2 - this.height + 4;
		}
		else {
			this.fillStyle = 'white';
			this.image = document.getElementById("block_white");
			this.y = this.gameHeight/2 - 4;
		} 
		//this.speed = blockspeed;
		//this.speed = -9;
		this.markedForDeletion = false;
		this.position = {
			x: gameWidth,
			y: this.y,
		};
	}
	stop() {
		this.speed = 0;
	}

	draw(ctx){
		ctx.fillStyle = this.fillStyle;
		// ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
		ctx.drawImage(this.image, 0, 0,
			this.sprite_width, this.sprite_height, this.position.x, this.position.y,
			this.width, this.height);
	}

	update(deltaTime, state) {
		if (!state)
		{
			if (this.state)
				this.position.y = this.gameHeight/2 - this.height + 4;
			else
				this.position.y = this.gameHeight/2 - 4;
		}
		else
		{
			if (this.state)
				this.position.y = this.gameHeight/2 - 4;
			else
				this.position.y = this.gameHeight/2 - this.height + 4;
		}
		//this.speed = blockspeed;
		//console.log(blockspeed);
		this.position.x += blockspeed;

		if (this.position.x <= - this.width) this.markedForDeletion = true;
	}
}
