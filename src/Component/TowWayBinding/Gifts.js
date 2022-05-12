import React, { useState } from "react";

const gifts = ["CPU I9", "RTX3090", "Monitor 24 inch"];

function TowWay() {
  const [gift, setGift] = useState();
  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);

    setGift(gifts[index]);
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>{gift || "Gifts not found"}</h1>
      <button onClick={randomGift}>Claim</button>
    </div>
  );
}

export default TowWay;
