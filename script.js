const form = document.querySelector("form")
const input = document.querySelector("input")
const select = document.querySelector("select")
const description = document.querySelector("#description")
const result = document.querySelector("#result")
const footer = document.querySelector("footer")

form.addEventListener("submit", Identifica)

function Identifica(e){
    e.preventDefault()
    footer.style.display = "block"
    let valor = 0
    let moeda = ""
    let resultado = 0

    const inputValue = parseFloat(input.value.replace(",","."))
    if (isNaN(inputValue) || inputValue <= 0) {
        alert("Por favor, insira um valor válido.")
        return
    }

    switch (select.value){
        case "USD":
            valor = 6.22
            moeda = "US$"
            break;
        case "EUR":
            valor = 6.41
            moeda = "EUR€"
            break;
        case "GBP":
            valor = 7.69
            moeda = "GBP£"

    }

    resultado = inputValue * valor
    substitui(valor, moeda, resultado)

}

function substitui(valor, moeda, resultado){
    description.textContent = `${moeda} 1 - R$ ${valor.toString().replace(".", ",")} `
    result.textContent = `${resultado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace("R$", "")} Reais`
}