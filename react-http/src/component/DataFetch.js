import React, { useEffect, useState } from "react";
import axios from'axios'

function DataFetch(){

    const [post,setpost] = useState({})
    const [id ,setid] = useState(1)
    const [button ,setbutton] = useState(1)

    const handleclick = () => {
        setbutton(id);
    }

    useEffect( () => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then( res => {
        console.log(res)
        setpost(res.data)
      })
      .catch ( err => console.log(err) )

      return () => {
        console.log('component unmount');
      }

    } , [button] ) // data dependencies 
    return (
        <div>
             <input type="text" value={id} onChange={ e => setid(e.target.value)}  />
             <button type="button" onClick={handleclick}> fetch post</button>
              <div>
                {post.title}
              </div>
            
        </div>
    )
}

export default DataFetch