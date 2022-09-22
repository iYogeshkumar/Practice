import React from 'react'

const NameList = () => {

    const persons=[
        {
            id:1,
            name:"yk",
            age:27,
            skill:"react"
        },
        {
            id:2,
            name:"sk",
            age:30,
            skill:"css"
        },
        {
            id:3,
            name:"lk",
            age:28,
            skill:"js"
        },
        {
            id:4,
            name:"mk",
            age:29,
            skill:"nodejs"
        },

    ]

    const personlist=persons.map(person=><h2>I am {person.name}. i am {person.age} years old. i know {person.skill}</h2>)

  return (

    <div>
        {personlist}
    </div>
  )
}

export default NameList