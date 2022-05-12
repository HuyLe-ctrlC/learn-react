import React from "react";
import { useState, useEffect, useRef } from "react";

function UseRef() {
  const [count, setCount] = useState(60);

  const timerID = useRef(60);
  const prevCount = useRef(60);

  const h1Ref = useRef();

  useEffect(() => {
    console.log(h1Ref.current);
  }, [count]);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleStart = () => {
    timerID.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    console.log("Start --> ", timerID.current);
  };

  const handleStop = () => {
    clearInterval(timerID.current);

    console.log("Stop --> ", timerID.current);
  };

  console.log(count, prevCount.current);

  return (
    <div style={{ padding: 20 }}>
      <h2 ref={h1Ref}>{count}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default UseRef;
