import { useDispatch } from 'react-redux';
import reactLogo from '../../assets/react.svg';
import { increment } from '../../reducer/counterSlice';
import ComponentsThree from './ComponentsThree';

import viteLogo from '/vite.svg';
import { useState } from 'react';
const ComponentsTwo = ({ count, setCount }) => {
  const dispath = useDispatch();
  const [isGreen, setIsGreen] = useState(false);
  return (
    <>
      <div>
        <a
          rel="noreference noreferrer"
          href="https://vitejs.dev"
          target="_blank"
        >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ComponentsThree count={count} setCount={setCount} />
      <button onClick={() => setIsGreen(!isGreen)}> Change Green </button>
      <button onClick={() => dispath(increment())}>Increment</button>
    </>
  );
};

export default ComponentsTwo;
