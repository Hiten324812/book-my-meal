import React, { useEffect, useState } from "react";

function ClassTwo(){

    const [count ,setcount] = useState(0)
    const [name , setname] = useState('')

    useEffect(() => {
        document.title = ` ${count} times`
        console.log('did update');
    } , [count] ) // did update run when this array change 

    return(
        <div>
            <input type="text" value={name} onChange={ e => { setname(e.target.value)}}  />
            
              <button onClick={() => setcount(count+1)}> click {count} times </button>
        </div>
    )
}

export default ClassTwo