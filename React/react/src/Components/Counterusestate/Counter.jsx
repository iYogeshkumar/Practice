import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] =useState(0);
    function handleCounterClick(){
        setCount(count+1)
    }
  return (
    <div>
      <button onClick={handleCounterClick}>counter{count}</button>
    </div>
  )
}

export default Counter
