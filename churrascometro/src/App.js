import React from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <div className="Contentor">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmJxJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
          className="Image"
        ></img>
        <div className="Calculator">
          <h1>Saiba quanta bebida e comida você precisará!</h1>
          <Input
            image="https://cdn-icons-png.flaticon.com/512/1702/1702834.png"
            description="Carne"
          ></Input>
          <Input
            image="https://cdn-icons-png.flaticon.com/512/2515/2515189.png"
            description="Acompanhamentos"
          ></Input>
          <Input
            image="https://static.vecteezy.com/system/resources/previews/018/931/336/original/cartoon-beer-icon-png.png"
            description="Bebida"
          ></Input>
          <Input
            image="https://cdn-icons-png.flaticon.com/512/3076/3076143.png"
            description="Refrigerante"
          ></Input>

          <button>Calcular</button>
          <div className="CalculatorResult">
            <ul>
              <li>XX Kg de Carne</li>
              <li>XX Kg de Acompanhamentos</li>
              <li>XX Lts de Bebida</li>
              <li>XX Lts de Refrigerante</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
