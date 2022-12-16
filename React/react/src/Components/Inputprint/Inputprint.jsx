import React, { useState } from 'react'

const Inputprint = () => {
    const [task,setTask]= useState("")
    
    const handleChange= (e) => {
        setTask(e.target.value)
        console.log(e.target.value)
        
    }
  return (
    <>
    <input type="text" onChange={handleChange}/>
    <h1>{task}</h1>
    </>
  )
}

export default Inputprint