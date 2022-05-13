//!MEMO AND CALLBACK

import { memo } from "react";

function Memo({ onDecrease }) {
  console.log("re-render");
  return (
    <div>
      TMA Solutions
      <button onClick={onDecrease}>Increase</button>
    </div>
  );
}

export default memo(Memo);
