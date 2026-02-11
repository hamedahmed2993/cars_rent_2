"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "@/lib/features/couter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter: {count}</h2>

      <button onClick={() => dispatch(increment())}>+</button>

      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
