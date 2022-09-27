import React, { useReducer } from 'react'
let initialstate=0;

const reducer =(state,action)=>{
    console.log(state,action)
    switch(action){
        case "increment" :
            return state + 1;
        case "decrement" :
            return state - 1;
        case "reset" :
            return initialstate;
        default :
            return state;
    }
}
    

const Counterusereducer = () => {
    const [count, dispatch] = useReducer(reducer,initialstate)
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={()=>dispatch("increment")}>Increment</button>
      <button onClick={()=>dispatch("decrement")}>Decrement</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}

export default Counterusereducer
