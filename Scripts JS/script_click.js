document.addEventListener(`DOMContentLoaded`, function () {
    let numero = document.getElementsByClassName(`numero`)[0]
    let botao_adicionar = document.getElementsByClassName(`botao`)[0]
    let lista = document.getElementsByClassName(`lista`)[0]
    let botao_finalizar = document.getElementsByClassName(`botao`)[1]
    let saida = document.getElementsByTagName(`section`)[0]
    let valores = []

    botao_adicionar.addEventListener(`click`, adicionar)
    function adicionar() {
        if (numero.value >= 1 && numero.value <= 100) {
            valores.push(numero.value);
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

    botao_finalizar.addEventListener(`click`, finalizar)
    function finalizar() {
        if (valores.length == 0) {
            alert(`Adicione valores para que o programa seja concluído`);
        } else {
            let tamanho = valores.length;
            let maior = Math.max(...valores);
            let menor = Math.min(...valores);
            let soma = 0;
            // let mult
            
            for (let i in valores) {
                soma += Number(valores[i]);
            }

            let media = soma/tamanho;

            saida.innerHTML = `<p><strong>${tamanho}</strong> números cadastrados;</p>`;
            saida.innerHTML += `<p><strong>${maior}</strong> é o maior número informado;</p>`;
            saida.innerHTML += `<p><strong>${menor}</strong> é o menor número informado;</p>`;
            saida.innerHTML += `<p><strong>${soma}</strong> é o resultado da soma;</p>`;
            saida.innerHTML += `<p><strong>${media}</strong> é a media fodaseee;</p>`;
        }
    }
})