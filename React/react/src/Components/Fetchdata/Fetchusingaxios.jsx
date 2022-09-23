import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Fetchusingaxios = () => {
    const [post,setPost]=useState([]);

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            console.log(res);
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <div>
        {post.map(post=>(
            <div key={post.id}>
                <h1>{post.title}</h1>
                <h2>{post.userId}</h2>
                <p>{post.body}</p>
            </div>
            
        ))}
    </div>
  )
}
