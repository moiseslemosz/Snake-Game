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
  
  if(snake[0].X > 15 * box && direction == "right") {
    clearInterval(jogo);
    alert('Game Over 👾');
    location.reload();
    return;
  }
  if(snake[0].X < 0 && direction == "left") {
    clearInterval(jogo);
    alert('Game Over 👾');
    location.reload();
    return;
  }
  if(snake[0].Y > 15 * box && direction == "down") {
    clearInterval(jogo);
    alert('Game Over 👾');
    location.reload();
    return;
  }
  if(snake[0].Y < 0 && direction == "up") {
    clearInterval(jogo);
    alert('Game Over 👾');
    location.reload();
    return;
  }
  
  for(i = 1; i < snake.length; i++){
    if(snake[0].X == snake[i].X && snake[0].Y == snake[i].Y){
      clearInterval(jogo);
      alert('Game Over 👾');
      location.reload();
      return;
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
 
 snake.unshift(newHead);
 
}

let jogo = setInterval(iniciarJogo, 100);

//Este código é um exemplo de um jogo simples de cobra (snake) implementado em JavaScript usando HTML5 Canvas para renderização gráfica.

//Aqui está uma explicação do código:

//São definidas variáveis para o canvas, contexto de renderização 2D, tamanho da célula (box), array que armazena as posições dos segmentos da cobra (snake), e a direção inicial da cobra.

//É criado um objeto food que armazena a posição da comida, gerada aleatoriamente dentro do canvas.

//São definidas três funções responsáveis por desenhar o plano de fundo, os segmentos da cobra e a comida no canvas.

//É adicionado um event listener para capturar eventos de teclas pressionadas pelo usuário, que são usados para atualizar a direção da cobra.

//É definida uma função iniciarJogo que é executada a cada intervalo de tempo (100ms) usando a função setInterval. Essa função verifica se a cobra colidiu com as bordas do canvas ou consigo mesma, atualiza a posição da cobra e da comida, e redesenha o canvas com as novas posições.

//Dentro da função iniciarJogo, são verificadas as colisões da cobra com as bordas do canvas e consigo mesma usando condicionais if. Se ocorrer uma colisão, o jogo é encerrado exibindo uma mensagem de "Game Over" e a página é recarregada.

//É chamada a função criarBG() para desenhar o plano de fundo, a função criarCobrinha() para desenhar os segmentos da cobra, e a função drawFood() para desenhar a comida no canvas.

//É atualizada a posição da cabeça da cobra com base na direção atual, e é verificado se a cobra comeu a comida. Se a cobra comeu a comida, a posição da comida é atualizada aleatoriamente e um novo segmento é adicionado à cabeça da cobra. Se a cobra não comeu a comida, o último segmento da cauda da cobra é removido.

//A função iniciarJogo é chamada a cada intervalo de tempo para atualizar o jogo em tempo real.

//Essa é uma implementação básica de um jogo de cobra em JavaScript usando Canvas, e pode ser expandida e aprimorada para adicionar mais recursos e funcionalidades ao jogo.
