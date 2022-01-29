export default class Block {
    constructor(gameWidth, gameHeight) {
        this.width = 30;
        this.height = 50;

        this.position = {
            x: gameWidth - this.width,
            y: gameHeight/2 + this.height,
    };
}

    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
1