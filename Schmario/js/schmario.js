// Размеры игрового поля
var CANVAS_WIDTH = 1280,
    CANVAS_HEIGHT = 960;

var canvas = document.createElement('canvas'),
    gameField = canvas.getContext('2d');

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

document.body.appendChild(canvas);


var lastTime;
// Тикер
function gameLoop() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;

    update(dt);
    render();

    lastTime = now;
    requestAnimFrame(gameLoop);
};
