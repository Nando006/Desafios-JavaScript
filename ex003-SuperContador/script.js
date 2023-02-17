function contar () {
    var inicio = document.getElementById('ini');
    var fim = document.getElementById('fim');
    var passo = document.querySelector('#passo');
    var res = document.querySelector('#res');

    var ini = Number(inicio.value);
    var final = Number(fim.value);
    var pass = Number(passo.value);

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERROR] ⚠️ Preencha Corretamente!')
        inicio.value = ""
        fim.value = ""
        passo.value = ""
    } else {
        if(pass < 1){
            alert('[ERROR] Passo Inválido, Começando Passo 1 ⚠️')
            pass = 1
        }
        res.innerHTML = ''
        res.innerHTML = '<strong>Começando Contagem</strong> 🤓<br><br>'
        if( ini <= final) {
            while(ini <= final) {
                res.innerHTML += `${ini}🥂  `
                ini += pass
            }
        } else {
            while(ini >= final) {
                res.innerHTML += `${ini}🥂`
                ini -= pass
            }
        }
        
        res.innerHTML += '<br><br> <strong>Contagem Encerrada</strong> 😎👍'
    }
}

function reseta() {
    location.reload();
}