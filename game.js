import Square from './character.js';
import { controlInput } from './input.js';
import Block from './block.js';
import { collide } from './collision.js';
let win = new Audio('./audio/win.wav');

export default class Game {
    constructor(canvas) {
        this.width = canvas.width;
        this.height = canvas.height;
        this.canvas = canvas;
        this.square = new Square(this);
        this.gameObjects = [];
        this.win = false;
        this.blocks = [];

        for (let i = 0; i < 4; i++) {
            this.blocks.push(new Block(this, i * 100, i * 200, 30, 30, '#43dde6'));
        }
        controlInput(this);

        this.mouseBlock = new Block(this, 100, 0, 30, 30, '#f9f9f9');
        this.redBlock = new Block(this, 0, 0, 30, 30, 'crimson');
        this.blocks.push(this.redBlock);
        this.blocks.push(this.mouseBlock);
        this.blocks.push(new Block(this, 300, 440, 30, 30, '#43dde6'))
        this.blocks.push(new Block(this, 300, 400, 30, 30, '#43dde6'))
        //Remove this later
        this.gameObjects = [this.square, this.mouseBlock, ...this.blocks];

    }

    start() {

        // this.gameObjects = [this.square];

    }

    draw(ctx) {
        this.gameObjects.forEach(e => e.draw(ctx));
        if(collide(this.square, this.redBlock).test() || this.win == true){
            win.play();
            this.win = true;
            ctx.fillStyle = '#f9f9f9';
            ctx.fillRect(0, 0, innerWidth, innerHeight);
            ctx.fill();

            ctx.font = "50px Arial";
            ctx.fillStyle = "crimson";
            ctx.textAlign = 'center';
            ctx.fillText('You Win', this.width / 2, this.height / 2);
        }
    }

    update(dTime) {


        this.gameObjects.forEach(e => {
            e.update(dTime);
        })
    }
}