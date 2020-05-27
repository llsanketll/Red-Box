export function controlInput(game) {
    let mouse = {
        x: 0,
        y: 0
    };
    let listen = function (event) {
        var key_state = (event.type == 'keydown') ? true : false;
        switch (event.keyCode) {
            case 37:
                game.square.state.left = key_state;
                break;
            case 38:
                game.square.state.up = key_state;
                break;
            case 39:
                game.square.state.right = key_state;
                break;
            case 40:
                game.square.state.down = key_state;
                break;
        }
    }

    window.addEventListener('keydown', listen);
    window.addEventListener('keyup', listen);
    game.canvas.addEventListener('mousemove', function (e) {
        game.mouseBlock.position.x = e.x - this.offsetLeft;
        game.mouseBlock.position.y = e.y - this.offsetTop;

        // Display Mouse Coordinates
        mouse.x = e.x - this.offsetLeft;
        mouse.y = e.y - this.offsetTop;

        document.querySelector('.x').textContent = mouse.x;
        document.querySelector('.y').textContent = mouse.y;
    });

}


