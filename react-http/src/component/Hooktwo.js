import React , { useState } from 'react'

function Hooktwo(){

    const initial = 0
   const [count , setcount] = useState(initial)

    return (
        <div>
            <button onClick={ () => setcount(count+1)}> increment {count} </button>
            <button onClick={ () => setcount(count-1)}> decrement {count} </button>
        </div>
    )
}

export default Hooktwo