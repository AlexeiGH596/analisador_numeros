document.addEventListener(`DOMContentLoaded`, function () {
    let numero = document.getElementsByClassName(`numero`)[0]
    let botao_adicionar = document.getElementsByClassName(`botao`)[0]
    let lista = document.getElementsByClassName(`lista`)[0]
    let botao_finalizar = document.getElementsByClassName(`botao`)[1]
    let saida = document.getElementsByTagName(`section`)[0]
    let valores = []

    document.addEventListener(`keypress`, enter)
    function enter(e) {
        if (e.key === 'Enter') {
            if (numero.value >= 1 && numero.value <= 100) {
                valores.push(numero.value);
                let item = document.createElement(`option`);
                item.text = `Valor ${numero.value} adicionado;`;
                lista.appendChild(item);
            } else {
                alert(`Valor inválido`);
            }
            numero.value = ``;
            numero.focus();
        }
    }
})