import React , {useEffect, useState } from "react";


import axios from 'axios'

function DataFetchOne(){

    const [loading,setloading] = useState(true)
    const [error,seterror] = useState('')
    const [post,setpost] = useState({ })

    useEffect( () => {
       axios.get('https://jsonplaceholder.typicode.com/posts/4')
       .then( (result) => {
        setloading(false)
        setpost(result.data)
        seterror('')
        console.log('component mounted');
       })
       .catch(err => {
        console.log(err);
        setpost({})
        setloading(false)
        seterror('something went wrong')
       })
    } , [])
    
    return(
      <div>
        { loading ? 'loading' : post.title }
        { error ? error : null }
      </div>
    )
}

export default DataFetchOne