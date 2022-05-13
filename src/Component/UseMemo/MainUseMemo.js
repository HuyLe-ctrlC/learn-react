import React, { useState, useMemo } from "react";

export default function MainUseMemo() {
  const [num, setValue] = useState(0);
  const [products, setProducts] = useState([]);

  const handleAdd = () => {
    setProducts([...products, { name: +num }]);
  };

  const total = useMemo(() => {
    const result = products.reduce((result, item) => {
      console.log("loading....");
      return result + item.name;
    }, 0);
    return result;
  }, [products]);

  return (
    <div className="container">
      <label>input</label>
      <input value={num} onChange={(e) => setValue(e.target.value)} />
      <button className="ms-4" onClick={handleAdd}>
        add
      </button>
      <div>Total: {total}</div>
      {/* <ul>
        {products.map((product, index) => {
          <li key={index}>{product.name}</li>;
        })}
      </ul> */}
      <ul>
        {products.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
