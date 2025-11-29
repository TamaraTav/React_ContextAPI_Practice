import { useCounter } from "../hooks/useCounter";

export default function GrandChild() {
  const { counter, setCounter } = useCounter();
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 10)}>Increase by 10</button>
    </>
  );
}
