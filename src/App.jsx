import { useState } from 'react'

import './App.css'
import Home from './components/home'
import About from './components/about'

function App() {
  // ini useState, local state
  const [count, setCount] = useState(0);
  const [isDisable, setDisable] = useState(true);
  const [color, setColor] = useState('red');

  return (
    <>
      <Home count={count} setCount={setCount}/>
      <About/>
    </>
  )
}

export default App
