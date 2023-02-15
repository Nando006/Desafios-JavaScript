'use strict'

const sons = {
    'A': './sounds/boom.wav',
    'B': './sounds/clap.wav',
    'C': './sounds/hihat.wav',
    'D': './sounds/kick.wav',
    'E': './sounds/openhat.wav',
    'F': './sounds/ride.wav',
    'G': './sounds/snare.wav',
    'H': './sounds/tink.wav',
    'I': './sounds/tom.wav'
}

const criandoDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.querySelector('#container-letras').appendChild(div);
}

const exibirLetras = (sons) => {
    Object.keys(sons).forEach(criandoDiv);
}

exibirLetras(sons);

const chamandoSom = (letra) => {
    const pegando = new Audio(`${sons[letra]}`);
    pegando.play()
}

const somAoClicar = (evento) => {
    const letra = evento.target.id;
    const validando = sons.hasOwnProperty(letra);
    if(validando) {
        chamandoSom(letra);
    }
}

document.querySelector('#container-letras').addEventListener('click', somAoClicar);