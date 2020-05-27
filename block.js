import motion from './motionAnimation.js';
import easeLinear from './motionAnimation.js';
export default class Block {
    constructor(game, x, y, w, h, color) {
        this.gameWidth = game.width;
        this.gameHeight = game.height;
        this.position = { x: x, y: y };
        this.size = { w: w, h: h };
        this.speed = { x: 0, y: 0 };
        this.jumping = true;
        this.color = color;
        this.game = game;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);
        ctx.fill();
        ctx.closePath();
    }
    update(dTime) {
        
    
        //Gravity
        // this.speed.y += 1.5; 
        // this.position.y += this.speed.y;

        //Collision with floor
        if (this.position.y + this.size.h >= this.gameHeight) {
            this.position.y = this.gameHeight - this.size.h;
            this.speed.y = 0;
            this.jumping = false;
        }

    }
}