'use strict';

const createSpan = (text) => {
    const span = document.createElement('span');
    span.classList.add('key');
    span.textContent = text;
    span.id = text;
    document.querySelector('#container-letras').appendChild(span);
}

const sons = {
    'A': './sounds/boom.wav',
    'D': './sounds/clap.wav',
    'W': './sounds/hihat.wav',
    'S': './sounds/kick.wav',
    'C': './sounds/openhat.wav',
    'F': './sounds/ride.wav',
    'X': './sounds/snare.wav',
    'Q': './sounds/tink.wav',
    'Z': './sounds/tom.wav'
}

const displayKeys = (sons) => {
    Object.keys(sons).forEach(createSpan);
}

displayKeys(sons);

const keyLetter = (letter) => {
    const audio = new Audio(`${sons[letter]}`);
    audio.play();
}

const effect = (letter) => {
    document.getElementById(letter).classList.add('active');
}

const removeEffect = (letter) => {
    const div = document.getElementById(letter);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend', removeActive);
}

const somDisplay = (evento) => {
    let letter = '';
    if(evento.type == 'click') {
        letter = evento.target.id
    } else {
        letter = evento.key.toUpperCase()
    }
    const validation = sons.hasOwnProperty(letter);
    if(validation) {
        effect(letter);
        keyLetter(letter);
        removeEffect(letter);
    }
}

document.querySelector('#container-letras').addEventListener('click', somDisplay);
window.addEventListener('keydown', somDisplay);