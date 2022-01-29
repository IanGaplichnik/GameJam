class Sprite {
	constructor(x, y, width, height){
		this.x = x - width/2;
		this.y = y;
		this.width = width;
		this.height = height;
		this.sprite_width = 500;
		this.sprite_height = 500;
		this.image = document.getElementById("sprite_black");
		this.frame = 0;
		this.time = 0;
	}

	update(y){
		this.y = y;
		if (this.time % 7 == 0){
			this.frame++;
			if (this.frame > 7) {
				this.frame = 0;
			}
		}
		this.time++;
	}

	draw(ctx){
		ctx.drawImage(this.image, this.sprite_width * this.frame, 0,
			this.sprite_width, this.sprite_height, this.x, this.y,
			this.height, this.height);
	}
}