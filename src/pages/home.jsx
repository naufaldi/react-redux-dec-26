import React from 'react';
import ComponentsTwo from '../components/home/componentsTwo';
import { useState } from 'react';
import Local from '../components/home/local';
import { useSelector } from 'react-redux';
import ButtonActive from '../components/common/buttonActive';

const Home = () => {
  const [count, setCount] = useState(0);
  // dapatkan state dari store,
  const counterRedux = useSelector((state) => state.counter.value);

  // dapatkan state dari store dengan namanya "toggle" si statenya
  const toggleColor = useSelector((state) => state.toggle.value);
  return (
    <>
      <ComponentsTwo count={count} setCount={setCount} />
      <Local />
      <div>
        <h1 style={{ color: toggleColor ? 'white' : 'black' }}>
          Ini Contoh Action dan Reducer
        </h1>
        {/* declare / panggil counterRedux */}
        <h6 style={{ color: 'red', fontSize: '24px' }}>{counterRedux}</h6>
      </div>
      <div>
        <ButtonActive />
      </div>
    </>
  );
};

export default Home;
