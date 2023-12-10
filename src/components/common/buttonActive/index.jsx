import React from 'react';
import { useDispatch } from 'react-redux';
import { toggle } from '../../../reducer/toggleSlice';

const ButtonActive = () => {
  //init dispatch
  const dispath = useDispatch();
  //function untuk rubah dispatch
  return <button onClick={() => dispath(toggle())}>Toggle Button</button>;
};

export default ButtonActive;
