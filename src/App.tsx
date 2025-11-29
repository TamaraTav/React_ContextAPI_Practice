import { useState } from "react";
import "./App.css";
import Parent from "./components/Parent";
import { createContext } from "react";
import Random from "./components/Random";

export const CounterContext = createContext<{
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}>({
  counter: 0,
  setCounter: () => {},
});

function App() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <CounterContext.Provider value={{ counter, setCounter }}>
        <Parent />
        <Random />
      </CounterContext.Provider>
    </>
  );
}

export default App;
