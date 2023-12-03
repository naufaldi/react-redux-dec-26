import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Example from './pages/example';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="example" element={<Example />} />
    </Routes>
  );
};

export default Router;
