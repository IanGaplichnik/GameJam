function scoreCount(gameWidth, gameHeight, score, ctx, state) {
    let width = gameWidth/8;
    let height = gameHeight/8;    
    
    if (!state) {
        ctx.fillStyle = 'black';
    }
    else {
        ctx.fillStyle = 'white';
    } 

    ctx.font = "25px Arial";
    ctx.textAlign = "center";
    ctx.fillText("HIVE COINS: " + score, gameWidth/2, gameHeight/10);
}