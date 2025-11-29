import { useCounter } from "../hooks/useCounter";

export default function Random() {
  const { counter } = useCounter();
  return <div>{counter}</div>;
}
