import Game from './game.js';
let canvas, c, main, height, width, mouse, colors;
canvas = document.querySelector('canvas');
width = 500;
height = 500;
canvas.width = width;
canvas.height = height;
c = canvas.getContext('2d');



colors = [
    '#33cccc',
    '#2980b9',
    '#2c3e50',
    '#453c38',
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Event  Listener


let game = new Game(canvas);

function draw(){
    game.draw(c);
}


function update(dTime){
    game.update(dTime);
}


let lastTime = 0;
let fps;
function gameLoop(timestamp){
    let deltaTime = (timestamp - lastTime) / 1000;
    lastTime = timestamp;
    fps = Math.round(1/ deltaTime);

    c.clearRect(0, 0, width, height);
    
    draw();
    update(deltaTime);

    // document.querySelector('.fps').textContent = fps;
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);