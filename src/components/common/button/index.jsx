import React from 'react'

const Button = ({count, setCount,children, color}) => {
  return (
    <button onClick={() => setCount((count) => count + 1)} style={{
      color: color
    }}>
    {children} {count}
  </button>
  )
}

export default Button