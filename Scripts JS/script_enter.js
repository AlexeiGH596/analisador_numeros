var numero = document.getElementsByClassName(`numero`)[0]
var botao_adicionar = document.getElementsByClassName(`botao`)[0]
var lista = document.getElementsByClassName(`lista`)[0]
var botao_finalizar = document.getElementsByClassName(`botao`)[1]
var saida = document.getElementsByClassName(`resultado`)[0]
var valores = []
numero.focus(); /* não é preciso chamar o evento */

document.addEventListener(`keypress`, enter)
function enter(e) {
    if (e.key === 'Enter') {
        if (numero.value >= 1 && numero.value <= 100) {
            valores.push(numero.value);
            // criando elementos HTML dinâmicamente com Js
            let item = document.createElement(`option`);
            item.text = `Valor ${numero.value} adicionado;`;
            lista.appendChild(item);
            saida.innerHTML = ``
        } else {
            alert(`Valor inválido`);
        }
        numero.value = ``;
        numero.focus();
    }
}

botao_finalizar.addEventListener(`click`, finalizar)
function finalizar() {
    if (valores.length == 0) {
        alert(`Adicione valores para que o programa seja concluído`);
    } else {
        let tamanho = valores.length;
        let maior = Math.max(...valores);
        let menor = Math.min(...valores);
        let soma = 0;
        for (let i in valores) {
            soma += Number(valores[i]);
        }
        let media = soma / tamanho;

        // melhor forma de adicionar parágrafos (mais eficiente)
        saida.innerHTML = `<p><strong>${tamanho}</strong> números foram adicionados;</p>`;
        saida.innerHTML += `<p><strong>${maior}</strong> foi o maior número informado;</p>`;
        saida.innerHTML += `<p><strong>${menor}</strong> foi o menor número informado;</p>`;
        saida.innerHTML += `<p><strong>${soma}</strong> é o resultado da soma total;</p>`;
        saida.innerHTML += `<p><strong>${media}</strong> é o resultado da média total;</p>`;
    }
}