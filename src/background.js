class Background {
	constructor(gameWidth, gameHeight, sprite){
		this.sprite = sprite;
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
		this.images = [];
		this.time = 0;
	}

	update()
	{
		let push = Math.random();
		if (this.time % 100 == 0 && push > 0.3)
			this.images.push(new BackgroundImage(this.gameWidth, this.gameHeight, this.sprite));
		this.images.forEach(object => object.update());
		this.images = this.images.filter(object => !object.markedForDeletion);
		this.time++;
	}

	draw(ctx, state)
	{
		if ((this.sprite == "day_black" || this.sprite == "day_white") && state == 0)
			this.images.forEach(object => object.draw(ctx));
		else if ((this.sprite == "night_black" || this.sprite == "night_white") && state == 1)
			this.images.forEach(object => object.draw(ctx));
	}
}