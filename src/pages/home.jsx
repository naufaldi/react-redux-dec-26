import React from 'react';
import ComponentsTwo from '../components/home/componentsTwo';
import { useState } from 'react';
import Local from '../components/home/local';

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <ComponentsTwo count={count} setCount={setCount} />
      <Local />
    </>
  );
};

export default Home;
