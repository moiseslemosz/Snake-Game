let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  X: 8 * box,
  Y: 8 * box
}
let direction = "right";
let food = {
  X: Math.floor(Math.random() * 15 + 1) * box,
  Y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
  for(i=0; i < snake.length; i++) {
    context.fillStyle = "green";
    context.fillRect(snake[i].X, snake[i].Y, box, box);
  }
}

function drawFood(){
  context.fillStyle = "red";
  context.fillRect(food.X, food.Y, box, box);
}

document.addEventListener('keydown', update);

function update (event) {
  if(event.keyCode == 37 && direction != "right") direction = "left";
  if(event.keyCode == 38 && direction != "down") direction = "up";
  if(event.keyCode == 39 && direction != "left") direction = "right";
  if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){
  
  if(snake[0].X > 15 * box && direction == "right") snake[0].X = 0;
  if(snake[0].X < 0 && direction == "left") snake[0].X = 16 * box;
  if(snake[0].Y > 15 * box && direction == "down") snake[0].Y = 0;
  if(snake[0].Y < 0 && direction == "up") snake[0].Y = 16 * box;
  
  for(i = 1; i < snake.length; i++){
    if(snake[0].X == snake[i].X && snake[0].Y == snake[i].Y){
      clearInterval(jogo);
      alert('Game Over 👾');
    }
  }
  
 criarBG();
 criarCobrinha();
 drawFood();
 
 let snakeX = snake[0].X;
 let snakeY = snake[0].Y;
 
 if(direction == "right") snakeX += box;
 if(direction == "left") snakeX -= box;
 if(direction == "up") snakeY -= box;
 if(direction == "down") snakeY += box;
 
 if(snakeX != food.X || snakeY != food.Y){
    snake.pop();
 }else{
  food.X = Math.floor(Math.random() * 15 + 1) * box;
  food.Y = Math.floor(Math.random() * 15 + 1) * box;
 }
 
 let newHead = {
   X: snakeX,
   Y: snakeY
 }
 
 snake.unShift(newHead);
 
}

let jogo = setInterval(iniciarJogo, 100);
