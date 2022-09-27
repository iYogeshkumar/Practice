import axios from 'axios'
import React, { useEffect, useReducer } from 'react'


const initialstate = {
    loading: true,
    error: '',
    post : {}
}

const reducer =(state,action)=>{
    switch(action.type){
        case "FETCH_SUCCESS":
            return {
                loading: false,
                post: action.payload,
            }
        case "FETCH_ERROR":
            return {
                loading: false,
                post: {},
                error: "something went wront"
            }
        default : 
        return state;
    }
}

const FetchuseReducer = () => {

    const [state,dispatch] =useReducer(reducer,initialstate)

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            dispatch({type: 'FETCH_SUCCESS',payload: response.data})
        })
        .catch(error=>{
            dispatch({type: 'FETCH_ERROR'})
        })
    },[])
  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default FetchuseReducer
