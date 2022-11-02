//your code here
const gameContainer = document.getElementById('gameContainer');
const ctx = gameContainer.getContext('2d');

let speed = 7;

let tileCount = 20;
let tileSize = gameContainer.width / tileCount -2;
let headX = 10;
let headY = 10;

let foodX = 5;
let foodY = 5;

let xVelocity = 0;
let yVelocity = 0;

function drawGame(){
    clearScreen();
    changeSnakePosition();
    drawFood();
    drawSnake();
    setTimeout(drawGame, 1000/speed);
}

function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,gameContainer.width,gameContainer.height);
}

function drawSnake(){
    ctx.fillStyle = 'red';
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function changeSnakePosition(){
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

function drawFood(){
    ctx.fillstyle = 'orange';
    ctx.fillRect(foodX * tileCount, foodY * tileCount, tileSize, tileSize);
}

document.body.addEventListener('keydown', keyDown);

function keyDown(event){

    //up
    if(event.keyCode == 38){
        if(yVelocity == 1)
            return;
        yVelocity = -1;
        xVelocity = 0;
    }

    //down
    if(event.keyCode == 40){
        if(yVelocity == -1)
            return;
        yVelocity = 1;
        xVelocity = 0;
    }

    //left
    if(event.keyCode == 37){
        if(xVelocity == 1)
            return;
        yVelocity = 0;
        xVelocity = -1;
    }

    if(event.keyCode == 39){
        if(xVelocity == -1)
            return;
        yVelocity = 0;
        xVelocity = 1;
    }
}
drawGame();