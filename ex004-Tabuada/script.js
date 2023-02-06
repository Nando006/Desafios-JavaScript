function gerar() {
    var numero = document.querySelector('#num');
    var list = document.getElementById('list');
    var fim = document.querySelector('#fim');

    var num = Number(numero.value);

    if(numero.value.length == 0 || numero.value < 0) {
        alert('[ERROR] Número vazio ou inválido ⚠️')
        numero.value = ''
    } else {
        list.innerHTML = ''
        for(var multi = 0 ; multi <= 10 ; multi++) {
            var caixa = document.createElement('option');
            caixa.innerHTML = `🤓 Tabuando ${num} x ${multi} = ${num * multi}`
            list.appendChild(caixa)    
        }
        fim.innerHTML = 'Tabuada Finalizada!'
        numero.value = ''
        numero.focus()
    }
}