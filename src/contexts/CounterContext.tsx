import { createContext } from "react";

export const CounterContext = createContext<{
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);
