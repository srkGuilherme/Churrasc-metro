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
