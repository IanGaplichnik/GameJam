class BackgroundImage {
	constructor(gameWidth, gameHeight, sprite){
		this.gameWidth = gameWidth;
		this.sprite = sprite;
		this.gameHeight = gameHeight;
		this.sprite_size = 500;
		this.size = Math.floor(Math.random() * 130) + 70;
		this.x = gameWidth;
		if (sprite === "day_black") {
			this.y = Math.floor(Math.random() * (gameHeight/2 - this.size - 100)) + 30;
			this.image = document.getElementById("day_black");
		}
		else if (sprite === "night_white") {
			this.y = Math.floor(Math.random() * (gameHeight/2 - this.size - 100)) + 50;
			this.image = document.getElementById("night_white");
		}
		else if (sprite === "day_white"){
			this.y = Math.floor(Math.random() * (gameHeight/2  - this.size - 50)) + (gameHeight/2) + 30;
			this.image = document.getElementById("day_white");
		}
		else {
			this.y = Math.floor(Math.random() * (gameHeight/2  - this.size - 50)) + (gameHeight/2) + 30;
			this.image = document.getElementById("night_black");
		}
		this.speed = -2;
		this.frame = Math.floor(Math.random() * 15);
		this.markedForDeletion = false;
	}

	update(blockspeed){
		if (this.sprite == "day_black" || this.sprite == "night_white")
			this.x += this.speed;
		else 
			this.x += blockspeed;
		if (this.x < 0 - this.size)
			this.markedForDeletion = true;
	}

	draw(ctx){
		ctx.drawImage(this.image, this.sprite_size * this.frame, 0,
			this.sprite_size, this.sprite_size, this.x, this.y,
			this.size, this.size);
	}
}