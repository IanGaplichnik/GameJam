class Background {
	constructor(gameWidth, gameHeight, sprite){
		this.sprite = sprite;
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
		this.images = [];
		this.time = 0;
	}

	setup()
	{
		this.images.push(new BackgroundImage(this.gameWidth, this.gameHeight, this.sprite));
		this.images.push(new BackgroundImage(this.gameWidth, this.gameHeight, this.sprite));
		this.images[0].x = this.gameWidth/3;
		this.images[1].x = this.gameWidth/3 * 2;
	}

	update()
	{
		let push = Math.random();
		let modifier = 0;
		if (this.sprite == "day_black" || this.sprite == "night_white")
			modifier = 100;
		else
			modifier = 30;
		if (this.time % modifier == 0 && push > 0.3)
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