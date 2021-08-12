import "./Counter.css";
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <div className="likes">
        <span className="countertext">{count}</span>
        <img
          className="image"
          src={process.env.PUBLIC_URL + "images/like.jpeg"}
        ></img>
      </div>

      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Counter;
