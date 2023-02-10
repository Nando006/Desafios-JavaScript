const img = document.getElementById('img');
const buttons = document.getElementById('buttons');

let coresContage = 0
let intervalId = null

const semafaros = (event) => { // Criei uma variável semafaros nessa variavel tem uma função com parâmetro event e dentro tem variável cores que recebe a id do event target quando clicada e guarda na variável cores e eu tenho outra variável turnos que dentro vai me da uma propriedade de acordo com que a variável cores vai receber.
    stopAuto(); // Esse stop é para que quando eu clicar novamente no automatico ele parar o anterior e começar um novo, se não ele vai ficar em 2x 3x 4x....
    const cor = event.target.id
    turnos[cor]();
}

const contandoCores = () => {
    coresContage < 2? ++coresContage : coresContage = 0 ; // ternário, eles são úteis quando é a propria variável que vai receber os valores.
    // Nessa função com o coresContage++ vamos ter um erro, isso por que ele vai adicionar o valor depois. O que acontece é que o coresContage++ ele retorna o valor primeiro e só depois disso o incrementa, já o ++coresContage ele incrementa primeiro e depois retorna o valor
}

const coresRandom = () => {
    const cores = ['vermelho', 'amarelo', 'verde'];
    const coresIndice = cores[coresContage];
    turnos[coresIndice]();
    contandoCores();   
}

const stopAuto = () => {
    clearInterval( intervalId );
}

const turnos = {
    'vermelho': () => img.src = 'img/vermelho.png',
    'amarelo': () => img.src = 'img/amarelo.png',
    'verde': () => img.src = 'img/verde.png',
    'auto': () => intervalId = setInterval(coresRandom, 1000)
}

buttons.addEventListener('click', semafaros);