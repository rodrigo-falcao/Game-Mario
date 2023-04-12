let gameOver = false;
let loop;
let counter = 0;
// let lastPipePosition = null;

const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const counterElement = document.getElementById("counter");

// funcao do botao de atualizacao de pagina
const refreshPage = () => {
  location.reload();
};

// funcao de final do game e pausa do pipe
const jump = () => { 
    if (gameOver) {
        return;
    }
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
}

// função do contador por tempo de passagem
const incrementCounter = () => {
  if (!gameOver) {
    counter++;
    counterElement.innerHTML = counter;
  }
};


// Usando a versão exclusiva para dispositivos móveis
if (window.innerWidth <= 767) {
  loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", " ");

    // if (pipePosition <= -27) {
    //   lastPipePosition = pipePosition;
      
    // } 
        if (pipePosition <= 80 && marioPosition < 10) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./images/game-over.png";
        mario.style.width = "35px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);
        clearInterval(interval);
        gameOver = true;
    }
  }, 8); 
  document.addEventListener("touchstart", jump);
  interval = setInterval(incrementCounter, 1500);
} 

// versão exclusiva para outros dispositivos
else {
  loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", " ");
    
    if (pipePosition <= -52 ) {
      // counter++;
      // counterElement.innerHTML = counter;
      lastPipePosition = pipePosition;
    }

    if (pipePosition <= 120 && marioPosition < 40) {
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;

      mario.src = "./images/game-over.png";
      mario.style.width = "65px";
      mario.style.marginLeft = "50px";

      clearInterval(loop);
      clearInterval(interval);
      gameOver = true;
    }
  }, 15);
  document.addEventListener("keydown", jump);
  interval = setInterval(incrementCounter, 1500);
}

