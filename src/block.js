class BlockUP {
	constructor(gameWidth, gameHeight) {
		this.width = 30;
		this.height = 30;

		this.speed = -7;
		this.markedForDeletion = false;

		this.position = {
			x: gameWidth,
			y: gameHeight/2 - this.height + 2,
	};
}

	stop() {
		this.speed = 0;
	}


	draw(ctx){
		ctx.fillStyle = 'green';
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update(deltaTime) {
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