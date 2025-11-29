import { useContext } from "react";
import { CounterContext } from "../App";

export default function GrandChild() {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 10)}>Increase by 10</button>
    </>
  );
}
