import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [carneQuantity, setCarneQuantity] = useState(0);
  const [acompanhamentosQuantity, setAcompanhamentosQuantity] = useState(0);
  const [bebidaQuantity, setBebidaQuantity] = useState(0);
  const [refrigeranteQuantity, setRefrigeranteQuantity] = useState(0);
  const [adultosQuantity, setAdultosQuantity] = useState(0);
  const [criancasQuantity, setCriancasQuantity] = useState(0);
  const [duracaoEvento, setDuracaoEvento] = useState(0);
  const [totalCarne, setTotalCarne] = useState(0);
  const [totalAcompanhamentos, setTotalAcompanhamentos] = useState(0);
  const [totalBebida, setTotalBebida] = useState(0);
  const [totalRefrigerante, setTotalRefrigerante] = useState(0);

  const handleCalc = () => {
    const qtdTotalCarne =
      carneQuantity * duracaoEvento * adultosQuantity +
      ((carneQuantity * duracaoEvento) / 2) * criancasQuantity;

    const qtdTotalAcompanhamentos =
      acompanhamentosQuantity * duracaoEvento * adultosQuantity +
      ((acompanhamentosQuantity * duracaoEvento) / 2) * criancasQuantity;

    const qtdTotalBebida = bebidaQuantity * duracaoEvento * adultosQuantity;
    const qtdTotalRefrigerante =
      ((refrigeranteQuantity * duracaoEvento) / 2) * criancasQuantity;

    setTotalCarne(qtdTotalCarne);
    setTotalAcompanhamentos(qtdTotalAcompanhamentos);
    setTotalBebida(qtdTotalBebida);
    setTotalRefrigerante(qtdTotalRefrigerante);

    console.log("Total de Carne: " + qtdTotalCarne);
    console.log("Total de Acompanhamentos: " + totalAcompanhamentos);
    console.log("Total de Bebida: " + totalBebida);
    console.log("Total de Refrigerante: " + totalRefrigerante);
  };

  return (
    <div className="App">
      <div className="Contentor">
        <div>
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmJxJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
            className="Image"
          ></img>
        </div>
        <div className="Calculator">
          <h1>Saiba quanta bebida e comida você precisará!</h1>
          <div className="perPersonSetup">
            <h2>Consumo por pessoa e hora</h2>
            <Input
              image="https://cdn-icons-png.flaticon.com/512/1702/1702834.png"
              description="Carne"
              placeholder="Quilos"
              step={0.2}
              onChange={(event) => {
                setCarneQuantity(event.target.value);
              }}
            ></Input>
            <Input
              image="https://cdn-icons-png.flaticon.com/512/2515/2515189.png"
              description="Acompanhamentos"
              placeholder="Quilos"
              step={0.2}
              onChange={(event) => {
                setAcompanhamentosQuantity(event.target.value);
              }}
            ></Input>
            <Input
              image="https://static.vecteezy.com/system/resources/previews/018/931/336/original/cartoon-beer-icon-png.png"
              description="Bebida"
              placeholder="Litros"
              step={1}
              onChange={(event) => {
                setBebidaQuantity(event.target.value);
              }}
            ></Input>
            <Input
              image="https://cdn-icons-png.flaticon.com/512/3076/3076143.png"
              description="Refrigerante"
              placeholder="Litros"
              step={0.5}
              onChange={(event) => {
                setRefrigeranteQuantity(event.target.value);
              }}
            ></Input>
          </div>
          <div className="QuantitySetup">
            <h2>Informações do Evento</h2>
            <Input
              image="https://cdn-icons-png.flaticon.com/512/3224/3224634.png"
              description="Adultos"
              placeholder="Adultos"
              step={1}
              onChange={(event) => {
                setAdultosQuantity(event.target.value);
              }}
            ></Input>
            <Input
              image="https://cdn-icons-png.flaticon.com/512/547/547464.png"
              description="Crianças"
              placeholder="Crianças"
              step={1}
              onChange={(event) => {
                setCriancasQuantity(event.target.value);
              }}
            ></Input>
            <Input
              image="https://cdn-icons-png.flaticon.com/512/4305/4305432.png"
              description="Duração"
              placeholder="Horas"
              step={1}
              onChange={(event) => {
                setDuracaoEvento(event.target.value);
              }}
            ></Input>
          </div>

          <button
            className="CalcButton"
            onClick={() => {
              handleCalc();
            }}
          >
            Calcular
            <img
              className="CalcButtonImage"
              src="https://freeiconshop.com/wp-content/uploads/edd/search-outline-filled.png"
            ></img>
          </button>

          <div className="CalculatorResult">
            <span>Resultado Total</span>
            <br />
            <strong>Carne: </strong>
            {totalCarne.toFixed(1)} Kg
            <br />
            <strong>Acompanhamentos: </strong>
            {totalAcompanhamentos.toFixed(1)} Kg
            <br />
            <strong>Bebida: </strong>
            {totalBebida.toFixed(1)} Lts
            <br />
            <strong>Refrigerante: </strong>
            {totalRefrigerante.toFixed(1)} Lts
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
