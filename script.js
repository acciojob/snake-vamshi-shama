//your code here
const gameContainer = document.getElementById('gameContainer');
const ctx = gameContainer.getContext('2d');

let speed = 7;

let tileCount = 20;
let headX = 10;
let headY = 10;
function drawGame(){
    clearScreen();
    setTimeout(drawGame, 1000/speed);
}

function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,gameContainer.width,gameContainer.height);
}

drawGame();