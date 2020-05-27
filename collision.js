
export function collide(square, obj) {

    let s = {
        bottom: square.position.y + square.size.h,
        top: square.position.y,
        left: square.position.x,
        right: square.position.x + square.size.w
    };

    let o = {
        bottom: obj.position.y + obj.size.h,
        top: obj.position.y,
        left: obj.position.x,
        right: obj.position.x + obj.size.w
    };

    let tolerance = 5;
    return {
        test: function () {
            if (s.bottom >= o.top && s.top <= o.bottom && s.right >= o.left && s.left <= o.right) {
                return true;
            } else {
                return false;
            }
        },
        react: function () {
            if (Math.abs(s.right - o.left) <= tolerance) {
                // Right Touches
                square.position.x = o.left - square.size.w;
            }
            if (Math.abs(s.left - o.right) <= tolerance) {
                // Left Touches
                square.position.x = o.right;

            }
            if (Math.abs(s.bottom - o.top) >= 0 && (Math.abs(s.right - o.left) > tolerance) && (Math.abs(s.left - o.right) > tolerance) && (Math.abs(s.top - o.bottom) > tolerance)) {
                //Bottom Touches
                square.position.y = o.top - square.size.h;
                square.speed.y = 0;
                square.speed.x *= 0.9;
                square.jumping = false;
            }
            // Top collision
            if (square.speed.y > 0) {
                if (square.position.y + square.size.h > o.top && square.oldPos.y + obj.size.h <= o.top) {
                    square.velocity.y = 0;
                    square.jumping = false;
                    square.oldPos.y = square.y = o.top - obj.size.h - 0.01;
                }
            }
        }
    }
}
