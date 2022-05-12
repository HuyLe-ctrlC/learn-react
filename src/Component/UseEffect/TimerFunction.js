import React, { useState, useEffect } from "react";
var now = Date.now();
export default function TimerFunction() {
  const [countdown, setCountDown] = useState(new Date().toLocaleString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountDown(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
}
