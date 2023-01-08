import { onSnake, expandSnake } from "./snake";
let food = {x:4,y:4};
let score = 0;

export function getScore() {
    return score;
}

export function renderFood (gameBoard) {

    const foodElement = document.createElement("div");

    foodElement.style.gridRowStart = food.x;
    foodElement.style.gridColumnStart = food.y;

    foodElement.classList.add("food");

    gameBoard.appendChild(foodElement);
}

export function moveFood () {

    if(onSnake(food, false)) {
        score += 1;
            expandSnake ();

            food = {
                x: Math.floor(Math.random() * 40) +1,
                y: Math.floor(Math.random() * 40) + 1
            };
    }
}