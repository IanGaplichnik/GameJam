class BlockUP {
	constructor(gameWidth, gameHeight) {
		this.gameHeight = gameHeight;
		this.gameWidth = gameWidth;
		this.state = Math.round(Math.random());
		this.width = 60;
		this.height = Math.floor(Math.random() * 200) + 20;
		if (this.state) {
			this.fillStyle = 'black';
			this.y = gameHeight/2 - this.height + 4;
		}
		else {
			this.fillStyle = 'white';
			this.y = this.gameHeight/2 - 4;
		} 

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
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
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
		this.position.x += blockspeed;

		if (this.position.x <= - this.width) this.markedForDeletion = true;
	}
}