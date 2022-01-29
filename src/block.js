class BlockUP {
	constructor(gameWidth, gameHeight) {
		this.gameHeight = gameHeight;
		this.gameWidth = gameWidth;
		this.state = Math.round(Math.random());
		this.width = 50;
		this.height = Math.floor(Math.random() * 100) + 14;
		if (this.state) {
			this.fillStyle = 'black';
			this.y = gameHeight/2 - this.height + 4;
		}
		else {
			this.fillStyle = 'white';
			this.y = this.gameHeight/2 - 4;
		} 
		this.speed = -7;
		this.markedForDeletion = false;
		this.position = {
			x: gameWidth,
			y: this.y,
	};
}

	/*speedup(timestamp){
		this.speed -= 0.03;
	}*/
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
		this.position.x += this.speed;

		if (this.position.x <= - this.width) this.markedForDeletion = true;
	}
}

/*class BlockBELOW {
	constructor(gameWidth, gameHeight) {
		this.width = 30;
		this.height = 30;

		this.speed = -5;


		this.position = {
			x: gameWidth - this.width,
			y: gameHeight/2 - 2,
	};
}

	stop() {
		this.speed = 0;
	}


	draw(ctx){
		ctx.fillStyle = 'red';
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update(deltaTime) {
		this.position.x += this.speed;

		if (this.position.x < 0) this.position.x = 0;
	}
}
*/