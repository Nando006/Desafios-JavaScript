let num = document.getElementById('numero');
let selet = document.getElementById('lista');
let res = document.querySelector('#res');
let valoresGuardados = [];

function verificarCaixa(n) {
    if(!Number(n) || Number(n) < 1 || Number(n) > 100) {
        return false
    } else {
        return true
    }
}

function adicionar() {
    if(!verificarCaixa(num.value)) {
        alert('⚠️ Caixa vazia ou Número Invalido, Porfavor Corrigir ⚠️');
    } else {
        let numero = Number(num.value);
        let verificar = valoresGuardados.indexOf(numero);

        if(verificar != -1) {
            alert('🔍 Este número já foi adicionado 🔎');
        } else {
            valoresGuardados.push(numero);
            let seção = valoresGuardados.indexOf(numero);

            let lista = document.createElement('option');
            lista.innerHTML = `✅ O número ${numero} foi adicionado na seção ${seção}`;
            selet.appendChild(lista);
        }
    }
    res.innerHTML = ''
    num.value = '';
    num.focus();
}

function finalizar() {
    if(valoresGuardados.length == 0) {
        alert('👁️ Caixa vazia, porfavor adicione algo antes 👁️');
    } else {
        let total = valoresGuardados.length;

        let maior = valoresGuardados[0];
        let menor = valoresGuardados[0];

        soma = 0;

        for(let pos = 0; pos < total; pos++) {
            soma += valoresGuardados[pos];

            if(valoresGuardados[pos] > maior)
                maior = valoresGuardados[pos];
            if(valoresGuardados[pos] < menor)
                menor = valoresGuardados[pos];
        } 

        let media = total % soma;

        res.innerHTML = `Ao todo, temos <strong>${total}</strong> números adicionados!<br><br>`;
        res.innerHTML += `O maior valor informado é <strong>${maior}</strong><br><br>`;
        res.innerHTML += `O menor valor informado é <strong>${menor}</strong><br><br>`;
        res.innerHTML += `Somando todos os valores, temos <strong>${soma}</strong><br><br>`;
        res.innerHTML += `A média dos valores digitados é <strong>${media}</strong>`;
    }
}

function reset() {
    location.reload();
}
