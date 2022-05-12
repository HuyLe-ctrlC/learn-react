import React, { useState } from "react";

function TowWay() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log({ name, email });
  };


  return (
    <div style={{ padding: 32 }} className="">
      <hr />
      <label htmlFor="username">Username</label>
      <input
        id="username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Register</button>
      <h3>{name}</h3>
    </div>
  );
}

export default TowWay;
