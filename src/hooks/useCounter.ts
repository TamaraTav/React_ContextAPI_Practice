import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

export function useCounter() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounter must be used within a CounterContext.Provider");
  }

  return context;
}
