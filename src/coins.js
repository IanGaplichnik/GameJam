class COIN {
	constructor(gameWidth, gameHeight) {
		this.gameHeight = gameHeight;
		this.gameWidth = gameWidth;
		
		//this.sprite_width = 275;
		//this.sprite_height = 500;
		this.state = Math.round(Math.random());
		this.width = 40
		this.height = 40
		if (this.state) {
			this.fillStyle = 'red';
			//this.image = document.getElementById("block_black");
			
		}
		else {
			this.fillStyle = 'white';
			//this.image = document.getElementById("block_white");
		} 
		//this.speed = blockspeed;
		//this.speed = -9;
		this.markedForDeletion = false;
		this.position = {
			x: gameWidth,
			y: this.y = gameHeight/2 - this.height - 10,
		};
	}
	stop() {
		this.speed = 0;
	}

	draw(ctx){
		ctx.fillStyle = this.fillStyle;
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
		//ctx.drawImage(this.image, 0, 0,
		//	this.sprite_width, this.sprite_height, this.position.x, this.position.y,
		//	this.width, this.height);
	}

	update(deltaTime, state) {
		if (!state)
		{
			this.fillStyle = 'red';
		}
		else
		{
			this.fillStyle = 'red';
		}
		//this.speed = blockspeed;
		//console.log(blockspeed);
		this.position.x += blockspeed;
		if (this.position.x <= - this.width) this.markedForDeletion = true;
	}
}
