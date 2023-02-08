let lampada = document.getElementById('lampada');

function isquebrar() {
    return lampada.src.indexOf('quebrada') != -1; 
}

function quebrar() {
    lampada.src = 'img/quebrada.jpg';
}

function ligar() {
    if(!isquebrar()) {
        lampada.src = 'img/ligada.jpg';
    }
}

function desligar() {
    if(!isquebrar()) {
        lampada.src = 'img/desligada.jpg';
    }
}

function reset() {
    location.reload();
}


lampada.addEventListener('mouseover', ligar); 
lampada.addEventListener('mouseleave', desligar); 