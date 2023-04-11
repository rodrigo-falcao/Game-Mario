let gameOver = false;
let loop;
let counter = 0;

const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const counterElement = document.getElementById("counter");

// funcao de contagem de pulos, final do game e pausa
const jump = () => {
    if (gameOver) {
        return;
    }
    mario.classList.add("jump");
    counter++;
    counterElement.innerHTML = counter;

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
}


// Usando a versão exclusiva para dispositivos móveis
if (window.innerWidth <= 767) {
  loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", " ");

    if (pipePosition <= 80 && marioPosition < 10) {
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;

      mario.src = "./images/game-over.png";
      mario.style.width = "35px";
      mario.style.marginLeft = "50px";

      clearInterval(loop);
      gameOver = true;
    }
  }, 5); 
  document.addEventListener("touchstart", jump);
} 


// versão exclusiva para outros dispositivos
else {
  loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", " ");

    if (pipePosition <= 120 && marioPosition < 40) {
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;

      mario.src = "./images/game-over.png";
      mario.style.width = "65px";
      mario.style.marginLeft = "50px";

      clearInterval(loop);
      gameOver = true;
    }
  }, 10);
  document.addEventListener("keydown", jump);
}


