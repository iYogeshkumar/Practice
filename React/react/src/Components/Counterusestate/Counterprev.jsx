import React, { useState } from 'react'

export const Counterprev = () => {
    let initialvalue=0;
    const [count,setCount]=useState(initialvalue);
  return (
    <>
        <h1>{count}</h1>
        <button onClick={()=>setCount((prevcount)=>prevcount+1)}>Inc</button>
        <button onClick={()=>setCount((prevcount)=>prevcount-1)}>Dec</button>
        <button onClick={()=>setCount(initialvalue)}>Reset</button>
        <button onClick={()=>setCount((prevcount)=>prevcount+5)}>inc by 5</button>
    </> 
    )
}
