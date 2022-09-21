import React from 'react'

const Listname = () => {
    let num=[2,3,4,5,6,7]
    //normal 
    // let output=names.map(function(e){
    //     return e*2
    // })
               //or//
    //arrow function
    let output=num.map(e=>e*2)

    /////namelistprint////
    let names =["ajit","yk","varad","amit"]
  return (
    <div>
        {output.join(",")}
        {names.map(name=><h1>{name}</h1>)}
    </div>
  )
}

export default Listname
