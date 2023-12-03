import React, { useState } from 'react';

const Local = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      Ini Contoh Local props
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}> Add 1</button>
        <button onClick={() => setCount(count - 1)}> Minus 1</button>
      </div>
    </div>
  );
};

export default Local;
