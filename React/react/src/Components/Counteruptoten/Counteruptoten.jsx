import React, { useState } from 'react'

const Counteruptoten = () => {
  const [count,setCount]=useState(0);

  const inc =()=>{
    setCount(count+1)
  }

  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>increment</button>
      <button>Decrement</button>
    </div>

  )
}

export default Counteruptoten
