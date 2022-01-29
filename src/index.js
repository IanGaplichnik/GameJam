import Block from "../src/block.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 900;
const GAME_HEIGHT = 400;

ctx.clearRect(0, 0, 400, 900);

ctx.fillRect(50, 100, 50, 100);

let block = new Block(GAME_WIDTH, GAME_HEIGHT);

block.draw(ctx);