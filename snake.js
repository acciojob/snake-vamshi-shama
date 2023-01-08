
import { getInputDirection } from "./input";
const snakeBody = [{x:20,y:1},{x:21,y:1}];

export function renderSnake(gameBoard) {
    snakeBody.forEach(segment=> {
        const snakeBodyElement = document.createElement("div");

        snakeBodyElement.style.gridRowStart = segment.x;
        snakeBodyElement.style.gridColumnStart = segment.y;
        
        snakeBodyElement.classList.add("snake");

        gameBoard.appendChild(snakeBodyElement);
    })
}

export function movesnake() {

    for(let i = snakeBody.length-2; i>= 0; i--) {
        snakeBody[i+1] = {...snakeBody[i]};
    }

    const inputDirection = getInputDirection();
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function onSnake(position) {
    
    return snakeBody.some((segment) => {

        return segment.x === position.x && segment.y === position.y;
    });
}

function checkIntersection(position) {
    const newSnake = [...snakeBody];
    newSnake.shift();
    console.log(newSnake, snakeBody);
    return newSnake.some((segment) => {
        return segment.x === position.x && segment.y === position.y;
    });
}

export function expandSnake() {
    snakeBody.push({... snakeBody[snakeBody.length-1]});
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function isSnakeIntersected() {
    console.log("snake intersection")
    const val = checkIntersection(snakeBody[0]);
    console.log("SNAKE", val);
}
