export default class Block {
    constructor(gameWidth, gameHeight) {
        this.width = 30;
        this.height = 50;

        this.position = {
            x: 200,
            y: 300,
    };
}

    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}