export default class Sprite {
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.sprite_width = 500;
		this.sprite_height = 500;
		this.image = new Image();
		this.image.src = '/assets/images/run_black.png';
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
			this.sprite_width * 0.3, this.sprite_height * 0.3);
	}
}