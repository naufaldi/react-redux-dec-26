import React from 'react';
import MainComponents from '../components/about/main';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../reducer/counterSlice';

const About = () => {
  //inisiasi dispatch kita
  const dispath = useDispatch();
  return (
    <>
      <MainComponents />
      {/* bikin action untuk distpacth ke reducer increment dan decrement */}
      <button onClick={() => dispath(increment())}>Increment</button>
      <button onClick={() => dispath(decrement())}>Decrement</button>
    </>
  );
};

export default About;
