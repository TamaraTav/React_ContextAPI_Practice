import React from "react";
import { useContext } from "react";
import { CounterContext } from "../App";

export default function Random() {
  const { counter } = useContext(CounterContext);
  return <div>{counter}</div>;
}
