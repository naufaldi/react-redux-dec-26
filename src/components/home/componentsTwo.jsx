import reactLogo from '../../assets/react.svg';
import ComponentsThree from './ComponentsThree';

import viteLogo from '/vite.svg';
const ComponentsTwo = ({ count, setCount }) => {
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
    </>
  );
};

export default ComponentsTwo;
