// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'


////////////// Method 1- Fetch Api  /////////////////////////////////////
// const Fetch2 = () => {
//     const [user,setUser] = useState([])
//     const getData = () =>{
//         fetch("https://api.github.com/users")
//         .then(response => response.json())                        //or   .then(function(response){  
//         .then(data=>  // console.log(data)                        //      return response.json 
//                      setUser(data))                               //      }).then((data) => console.log(data))
//         }                                                           
//     useEffect(() => {
//         getData()
//     },[])
//   return (
//     <div>
//         {user.map((el)=>(
            
//             <div key={el.id}>
//             <h1 >{el.login}</h1>
//             <img src={el.avatar_url} width={"100px"} alt={el.avatar_url}/>
//             </div>
            
//         ))}
      
//     </div>
//   )
// }

// export default Fetch2
//////////////end Method 1- Fetch Api  /////////////////////////////////////

// ---------------------------------------------------------------------------------------------------------//


/////////////          Method 2 - Using Axios library        /////////////////////////////////

// {Axios is a javascript library that we use to make HTTP requests same as fetch(). 
// There is a difference between these two as in fetch() 
// we have to convert the result to a JSON object but in Axios it already returns the result as a JSON object,
//  so we don’t need to convert it.}

import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Fetch2 = () => {
    const [user,setUser]= useState([])
    const getData= () => {
        return axios.get("https://api.github.com/users")
        .then(response => setUser(response.data))
    }
    useEffect(() => {
        getData()
    },[])
  return (
    
    <div>
      {user.map((el)=>(
        <div key={el.id}>
            <h1>{el.login}</h1>
            <img src={el.avatar_url} width={"100px"} alt={el.image}/>
        </div>
      )
      )}
    </div>
  )
}

export default Fetch2
