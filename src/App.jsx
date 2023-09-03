import { useState } from 'react'

import './App.css'
import Home from './components/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home count={count} setCount={setCount}/>
    </>
  )
}

export default App
