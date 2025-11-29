import { useState } from "react";
import "./App.css";
import Parent from "./components/Parent";
import Random from "./components/Random";
import { CounterContext } from "./contexts/CounterContext";

function App() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increase</button>
      <CounterContext.Provider value={{ counter, setCounter }}>
        <Parent />
        <Random />
      </CounterContext.Provider>
    </>
  );
}

export default App;
