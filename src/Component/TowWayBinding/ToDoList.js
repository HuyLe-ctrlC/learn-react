import React, { useState } from "react";

function ToDoList() {
  const storageWorks = JSON.parse(localStorage.getItem("works"));

  const [work, setWork] = useState("");
  const [works, setWorks] = useState(storageWorks ?? []);

  console.log(work);

  const handleAdd = () => {
    setWorks((prev) => {
      const newWorks = [...prev, work];

      const jsonWorks = JSON.stringify(newWorks);
      localStorage.setItem("works", jsonWorks);

      return newWorks;
    });
    setWork("");
  };
  return (
    <div style={{ padding: 32 }} className="">
      <hr />
      <input
        type="text"
        value={work}
        onChange={(e) => setWork(e.target.value)}
      />
      <ul>
        {works.map((work, index) => (
          <li key={index}>{work}</li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default ToDoList;
