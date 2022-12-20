import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Display from './Display'

const Fetchandpassprops = () => {
    const [user,setUser]= useState([])
    const getdata = () =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) =>response.json())
        .then((data) =>setUser(data))
    }
    useEffect(()=>{
        getdata()
    },[])
  return (
    <div>
        {user.map((item)=>{
            return <>
            <Display {...item}/>
        </>
        }
            
        )}
    </div>
  )
}

export default Fetchandpassprops
