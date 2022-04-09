const adultos = document.getElementById("Adultos");
const criancas = document.getElementById("Criancas");
let duracao = document.getElementById("Duracao");
let resultado = document.getElementById("resultado");
const liCarne = document.getElementById("liCarne");
const liBebidaAdulto = document.getElementById("liBebidaAdulto");
const liBebidaCrianca = document.getElementById("liBebidaCrianca");
const resultadoCarneTexto = document.getElementById("resultadoCarneTexto");
const resultadoBebidaAlcolicaTexto = document.getElementById(
  "resultadoBebidaAlcolicaTexto"
);
const resultadoBebidaTexto = document.getElementById("resultadoBebidaTexto");

let consumoBebida;
let consumoBebidaAlcolica;
let consumoCarne;

function carneDuracao() {
  if (duracao.value >= 6) return 650;
  else {
    return 400;
  }
}

function bebidaDuracao() {
  if (duracao.value >= 6) return 2000;
  else {
    return 1200;
  }
}

function Calcular() {
  const quantidadeAdulto = adultos.value;
  const quantidadeCrianca = criancas.value;

  let resultadoCarne =
    (carneDuracao(duracao) * quantidadeAdulto) / 1000 +
    (carneDuracao(duracao) * quantidadeCrianca * 0.5) / 1000;
  let resultadoBebidaAlcolica =
    (bebidaDuracao(duracao) * quantidadeAdulto) / 1000;
  let resultadoBebida =
    (bebidaDuracao(duracao) * quantidadeCrianca * 0.5) / 1000;

  if (resultadoCarne === 0) {
    resultado.innerText = "Por favor insira valores válidos";
    resultado.style.color = "white";
    resultado.style.backgroundColor = "red";
  } else {
    /*Imprimir cálculo na tela*/
    resultadoCarneTexto.innerHTML =
      " " + resultadoCarne.toFixed(1) + "kg de carne";

    resultadoBebidaAlcolicaTexto.innerHTML =
      " " +
      resultadoBebidaAlcolica.toFixed(1) +
      " lt de bebida para os adultos";

    resultadoBebidaTexto.innerHTML =
      " " + resultadoBebida.toFixed(1) + "lt de bebida para as crianças";

    resultado.style.color = "black";
    resultado.style.backgroundColor = "white";
  }
}
