import Button from "./components/Button";
import Counter from "./components/Counter";

import { useState } from "react";
import "./styles/App.css";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const increaseClick = () => {
    setNumClicks(numClicks + 1);
  };
  const resetClick = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="main-container">
        <Counter numClicks={numClicks} />
        <Button
          text={"Click"}
          isClickButton={true}
          handleClick={increaseClick}
        />
        <Button
          text={"Reiniciar"}
          isClickButton={false}
          handleClick={resetClick}
        />
      </div>
    </div>
  );
}

export default App;
