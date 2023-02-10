let lampada = document.querySelector('#lampada');
let button = document.querySelector('#butao');

function ligar() {
    if(!quebrou()) {
        lampada.src = 'img/ligada.jpg';
        button.value = 'Desligar';
    }
}

function desligar() {
    if(!quebrou()) {
        lampada.src = 'img/desligada.jpg';
        button.value = 'Ligar';
    }
}

function quebrar() {
    lampada.src = 'img/quebrada.jpg';
    button.value = 'Resetar';
}

function quebrou() {
    return lampada.src.indexOf('quebrada') != -1
}

button.addEventListener('click', function() {
    if(button.value === 'Ligar') {
        ligar();
        button.value = 'Desligar';
    } else if(button.value === 'Desligar') {
        desligar();
        button.value = 'Ligar';
    } else {
        location.reload();
    }
});
lampada.addEventListener('mouseover', ligar);
lampada.addEventListener('mouseleave', desligar);
lampada.addEventListener('dblclick', quebrar);