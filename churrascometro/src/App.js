import React from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
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
            <h2>Consumo por pessoa</h2>
            <Input
              image="https://cdn-icons-png.flaticon.com/512/1702/1702834.png"
              description="Carne"
              placeholder="0,0 kg"
            ></Input>
            <Input
              image="https://cdn-icons-png.flaticon.com/512/2515/2515189.png"
              description="Acompanhamentos"
              placeholder="1 prato"
            ></Input>
            <Input
              image="https://static.vecteezy.com/system/resources/previews/018/931/336/original/cartoon-beer-icon-png.png"
              description="Bebida"
              placeholder="1 litro"
            ></Input>
            <Input
              image="https://cdn-icons-png.flaticon.com/512/3076/3076143.png"
              description="Refrigerante"
              placeholder="1 litro"
            ></Input>
          </div>
          <div className="QuantitySetup">
            <h2>Informações do Evento</h2>
            <Input
              image="https://cdn-icons-png.flaticon.com/512/3224/3224634.png"
              description="Adultos"
              placeholder="1 adultos"
            ></Input>
            <Input
              image="https://cdn-icons-png.flaticon.com/512/547/547464.png"
              description="Crianças"
              placeholder="1 criança"
            ></Input>
            <Input
              image="https://cdn-icons-png.flaticon.com/512/4305/4305432.png"
              description="Duração do evento"
              placeholder="1 hora"
            ></Input>
          </div>
          <div className="CalcButton">
            <button>Calcular</button>
            <img
              className="CalcButtonImage"
              src="https://freeiconshop.com/wp-content/uploads/edd/search-outline-filled.png"
            ></img>
          </div>

          <div className="CalculatorResult"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
