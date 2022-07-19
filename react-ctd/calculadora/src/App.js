import "./styles/App.css";
import Button from "./components/Button";
import Screen from "./components/Screen";
import ClearButton from "./components/ClearButton";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const addToInput = (val) => setInput(input + val);
  const result = () => {
    setInput(evaluate(input));
  };
  const negativePositive = () => {
    if (input) {
      setInput(input * -1);
    }
  };
  return (
    <div className="App">
      <div className="calculadora-container">
        <Screen value={input} />
        <div className="fila">
          <ClearButton click={() => setInput("")}>AC</ClearButton>
          <Button click={negativePositive}>±</Button>
          <Button click={addToInput}>%</Button>
          <Button click={addToInput}>/</Button>
        </div>
        <div className="fila">
          <Button click={addToInput}>7</Button>
          <Button click={addToInput}>8</Button>
          <Button click={addToInput}>9</Button>
          <Button click={addToInput}>*</Button>
        </div>
        <div className="fila">
          <Button click={addToInput}>4</Button>
          <Button click={addToInput}>5</Button>
          <Button click={addToInput}>6</Button>
          <Button click={addToInput}>-</Button>
        </div>
        <div className="fila">
          <Button click={addToInput}>1</Button>
          <Button click={addToInput}>2</Button>
          <Button click={addToInput}>3</Button>
          <Button click={addToInput}>+</Button>
        </div>
        <div className="fila">
          <Button click={addToInput}>0</Button>
          <Button click={addToInput}>.</Button>
          <Button click={result}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
