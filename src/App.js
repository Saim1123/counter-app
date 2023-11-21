import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(() => count + 1);
  };

  const decrease = () => {
    setCount(() => count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h3 className="show-number">Your Number</h3>
      <h3 className="show-number num">{count}</h3>
      <section className="btns">
        <button className="plus" onClick={increase}>
          Increase
        </button>
        <button className="minus" onClick={decrease}>
          Decrease
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </section>
    </div>
  );
}

export default App;
