// Carne - 300gr por pessoa + 6 horas - 650
// Cerveja - 1200ml por pessoa + 6 horas - 2000
// Refrigerante/agua - 1000ml por pessoa + 6 horas - 1500

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.Value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = carnePP(duracao) * adultos;
    let qdtTotalBebida = carnePP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);

    resultado.innerHTML =  '<p>${qdtTotalCarne}g de Carne</p>'
    resultado.innerHTML +=  '<p>${qdtTotalCerveja}ml de Cerveja</p>'
    resultado.innerHTML +=  '<p>${qdtTotalBebida}ml de Bebidas</p>'
}


function carnePP(duracao) {
    if (duracao >= 6) {
    return 650;
    } else {
    return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
    return 2000;
    } else {
    return 1200;
    }
}

function bebidaPP(duracao) {
    if (duracao >= 6) {
    return 1500;
    } else {
    return 1000;
    }
}