let img = document.getElementById('semaforo');

let vermelho = document.querySelector('#vermelho');
let amarelo = document.querySelector('#amarelo');
let verde = document.querySelector('#verde');

let automatico = document.getElementById('automatico');


function red() {
    img.src = 'img/vermelho.png';
}

function yellow() {
    img.src = 'img/amarelo.png';
}

function green() {
    img.src = 'img/verde.png';
}

function auto() {
    setInterval(function(){
        setTimeout(red, 500)
        setTimeout(yellow, 1500);
        setTimeout(green, 2500);
    }, 2800);

}


vermelho.addEventListener('click', red);
amarelo.addEventListener('click', yellow);
verde.addEventListener('click', green);

automatico.addEventListener('click', auto);