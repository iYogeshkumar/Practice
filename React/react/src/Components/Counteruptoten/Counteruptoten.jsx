import React, { useState } from 'react'

const Counteruptoten = () => {
  const [count,setCount]=useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button>increment</button>
      <button>Decrement</button>
    </div>

  )
}

export default Counteruptoten
