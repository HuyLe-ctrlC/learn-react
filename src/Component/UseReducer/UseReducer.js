/*
! 1. Set state
! 2. Action
! 3. Reducer
! 4. Dispatch
*/

import React, { useReducer } from "react";

const initState = 0;

const ACTION_UP = "up";
const ACTION_DOWN = "down";

const reducer = (state, action) => {
  console.log("reducer loading...");
  switch (action) {
    case ACTION_UP:
      return state + 1;
    case ACTION_DOWN:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

export default function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(ACTION_UP)}>Tăng</button>
      <button onClick={() => dispatch(ACTION_DOWN)}>Giảm</button>
    </div>
  );
}
