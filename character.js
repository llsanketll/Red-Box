import { collide } from "./collision.js";
let jump = new Audio('./audio/jump.wav');
let ground = new Audio('./audio/ground.wav');
export default class Square {
    constructor(game) {
        this.position = { x: 450, y: 250 };
        this.oldPos = this.position;
        this.size = { w: 30, h: 30 };
        this.speed = { x: 0, y: 0 };
        this.jumping = true;
        this.game = game;
        this.color = '#fc5185';
        this.state = {
            left: false,
            right: false,
            up: false,
            down: true,
            gravity: 1.5,
            block: true
        };
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);
        ctx.fill();
        ctx.closePath();
    }
    update(dTime) {
        //Changing Variables
        
        this.speed.y += this.state.gravity;
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        this.speed.x *= 0.9;

        //Collision with floor
        if (this.position.y + this.size.h >= this.game.height) {
            if(this.state.down == true){
                ground.play();
                this.state.down = false;
            }
            this.position.y = this.game.height - this.size.h;
            this.speed.y = 0;
            this.jumping = false;
        }

        // Collision with roof
        if (this.position.y <= 0) {
            this.position.y = 0;
            this.speed.y = 0;
            this.jumping = false;
        }

        // Off the screen
        if (this.position.x + this.size.w < 0) {
            this.position.x = this.game.width;
        } else if (this.position.x > this.game.width) {
            this.position.x = -this.size.w;
        }

        // Collision detection with all the blocks
        this.game.blocks.forEach(e => {
            if (collide(this, e).test()) {
                collide(this, e).react();
            }
        });

        // Condition for jumping
        if (this.state.up && this.jumping == false) {
            jump.play();
            this.speed.y -= 18;
            this.jumping = true;
            this.state.down = true;
        }

        // if (this.state.down && this.jumping == false) {
        //     this.speed.y += 18;
        //     this.jumping = true;
        // }


        // Move left with certain velocity
        if (this.state.left)
            this.speed.x -= 0.5;

        // Move right with certain velocity
        if (this.state.right)
            this.speed.x += 0.5;



        this.oldPos = this.position
    }
    revGravity() {
        this.state.gravity *= -1; 
    }
}