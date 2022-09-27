import React, { useReducer } from 'react'
let initialstate={
    firstcounter : 0
}

const reducer =(state,action)=>{
    switch(action.type){
        case "increment" :
            return {firstcounter: state.firstcounter + action.value};
        case "decrement" :
            return {firstcounter: state.firstcounter - action.value};
        case "reset" :
            return initialstate;
        default :
            return state;
    }
}
    

const CounteruseRu2 = () => {
    const [count, dispatch] = useReducer(reducer,initialstate)
  return (
    <div>
      <h1>Count : {count.firstcounter}</h1>
      <button onClick={()=>dispatch({type:"increment" ,value:1})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement" ,value:1})}>Decrement</button>
      
      <button onClick={()=>dispatch({type:"increment" ,value:5})}>Increment by 5</button>

      <button onClick={()=>dispatch({type:"decrement", value:5})}>Decrement by 5</button>

      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default CounteruseRu2
