import React, { useState } from "react";

export default function UseState(){

    const [count,setcount] = useState(0)
    console.log('rendering');

 return(
    <div>
        <button onClick={ () => setcount(count+1)}> Count {count} </button>
        <button onClick={ () => setcount(0) }> Count to 0  </button>
        <button onClick={ () => setcount(5) }> Count to 5  </button>
    </div>
 )

}