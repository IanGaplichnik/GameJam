export default class BlockUP {
    constructor(gameWidth, gameHeight) {
        this.width = 30;
        this.height = 30;

        this.speed = -1;


        this.position = {
            x: gameWidth - this.width,
            y: gameHeight/2 - this.height,
    };
}

stop() {
this.speed = 0;
}


draw(ctx){
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}

update(deltaTime) {
    this.position.x += this.speed;

    if (this.position.x < 0) this.position.x = 0;
  }
}

export default class BlockBOT {
    constructor(gameWidth, gameHeight) {
        this.width = 30;
        this.height = 30;

        this.speed = -2;


        this.position = {
            x: gameWidth - this.width,
            y: gameHeight/2,
    };
}

stop() {
this.speed = 0;
}


draw(ctx){
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}

update(deltaTime) {
    this.position.x += this.speed;

    if (this.position.x < 0) this.position.x = 0;
  }
}