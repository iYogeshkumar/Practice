import React, { useState } from 'react'


const Todo = () => {
    const [input,setInput]= useState("")
    const [item,setItem] = useState([])
    const handleChange=(e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }
    const addItem=()=>{
        setItem((oldItem)=>{
            return [...oldItem,input]
        })
        setInput("")
    }
    const deleteitem=(id)=>{
        console.log("delete")
        setItem((oldItem)=>{
            return oldItem.filter((arritem,index)=>{
                return index!==id;
            })
        })
    }
  return (
    <>
    <div>Todos</div>
    <input type="text" value={input} placeholder="enter items" onChange={handleChange}/>
    <button onClick={addItem}>ADD Items</button>
    {item.map((el,id)=>{
        return (<> <div key={id}>
            <h1>{el}</h1>
        <button onClick={()=>deleteitem(id)}>Delete</button>
        </div>
        </>
        )
    })}
    </>
  )
}

export default Todo