import React from 'react';
import ComponentsTwo from '../components/home/componentsTwo';
import { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <ComponentsTwo count={count} setCount={setCount} />
    </>
  );
};

export default Home;
