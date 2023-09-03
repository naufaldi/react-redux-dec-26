import React from 'react'

const Button = ({count, setCount,children}) => {
  return (
    <button onClick={() => setCount((count) => count + 1)}>
    {children} {count}
  </button>
  )
}

export default Button