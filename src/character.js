export default class Character {
    constructor(gameWidth, gameHeight) {
        this.width = 40,
        this.height = 100,

        this.position = {
            x: 30,
            y: gameHeight/2 - 100,
    };
}

    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}