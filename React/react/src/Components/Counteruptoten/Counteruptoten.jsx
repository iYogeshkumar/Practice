import React, { useState } from 'react'

const Counteruptoten = () => {
  const [count,setCount]=useState(0);

  const inc =()=>{
    if(count<10)
    setCount(count+1)
  }
  const dec =()=>{
    if(count>0)
    setCount(count-1)
  }
  
  return (
    <div>
      <div>counter increment upto 10 and decrement upto 0 </div>
      <h1>{count}</h1>
      <button onClick={inc}>increment</button>
      <button onClick={dec}>Decrement</button>
    </div>

  )
}

export default Counteruptoten
