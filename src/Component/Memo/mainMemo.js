//!MEMO AND CALLBACK
import React, { useState, useCallback } from "react";
import Memo from "./memo";
export default function MainMemo() {
  const [count, setCount] = useState(1);
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div>
      <div>{count}</div>
      <Memo onDecrease={handleClick} />
    </div>
  );
}
