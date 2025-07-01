import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../RTK/features/counter/counterSlice";

export default function Home() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-5 items-center">
      <button
        onClick={() => dispatch(increment())}
        className="bg-amber-200 rounded-2xl px-5 py-2 cursor-pointer"
      >
        Increment
      </button>
      <p>{count}</p>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-amber-200 rounded-2xl px-5 py-2 cursor-pointer"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(incrementByAmount(5))}
        className="bg-amber-200 rounded-2xl px-5 py-2 cursor-pointer"
      >
        Increment by value
      </button>
    </div>
  );
}
