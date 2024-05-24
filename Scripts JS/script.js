document.addEventListener(`DOMContentLoaded`, function () {
    let numero = document.getElementsByClassName(`numero`)[0]
    let botao_adicionar = document.getElementsByClassName(`botao`)[0]
    let lista = document.getElementsByClassName(`lista`)[0]
    let botao_finalizar = document.getElementsByClassName(`botao`)[1]
    let saida = document.getElementsByTagName(`section`)[0]
    let vetor = Number([])

    botao_adicionar.addEventListener(`click`, adicionar)
    function adicionar() {
        if (numero.value >= 1 && numero.value <= 100) {
            alert(`Tudo ok`)
        } else {
            alert(`Valor inválido`);
        }

        /*         if (isNumero(numero.value) && ! inLista(numero.value)) {
                    alert(`Tudo ok`);
                } else {
                    alert(`Valor inválido`);
                }
        
                function isNumero(n) {
                    if (numero >= 1 && numero <= 100) {
                        return true;
                    } else {
                        return false;
                    }
                }
        
                function inLista(n) {
                    if (lista.indexOf(n) != -1) {
                        return true;
                    } else {
                        return false;
                    }
                } */
    }
})