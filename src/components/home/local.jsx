import React, { useState } from 'react';

const Local = () => {
  const [count, setCount] = useState(0);
  const [isGreen, setIsGreen] = useState(false);
  const angka = 10;
  return (
    <div>
      Ini Contoh Local props
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}> Add 1</button>
        <button onClick={() => setCount(count - 1)}> Minus 1</button>
      </div>
      <div style={{ color: isGreen ? 'green' : 'red' }}>
        is {isGreen ? 'Ini Hijau' : 'ini Bukan Hijau'}
        <button onClick={() => setIsGreen(!isGreen)}> Change Green </button>
        {angka}
      </div>
    </div>
  );
};

export default Local;
