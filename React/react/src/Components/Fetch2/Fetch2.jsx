import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Fetch2 = () => {
    const [user,setUser] = useState([])
    const getData = () =>{
        fetch("https://api.github.com/users")
        .then(response => response.json())                        //or   .then(function(response){  
        .then(data=>  // console.log(data)                        //      return response.json 
                     setUser(data))                               //      }).then((data) => console.log(data))
        }                                                           
    useEffect(() => {
        getData()
    },[])
  return (
    <div>
        {user.map((el)=>(
            
            <div key={el.id}>
            <h1 >{el.login}</h1>
            <img src={el.avatar_url} width={"100px"} alt={el.avatar_url}/>
            </div>
            
        ))}
      
    </div>
  )
}

export default Fetch2

