import React, { useEffect, useState ,useRef } from "react";

function HookTimer(){
    const [timer,setimer] = useState(0)

    const intervalref = useRef()
    
    useEffect ( () => {

        intervalref.current = setInterval( () => {
            setimer(prevtime => prevtime + 1 )
        } , 1000 )

        return  () =>{
            clearInterval(intervalref.current)
        }
     
    } , [])

    return (
        <div>
              timer - {timer}
              <button onClick={ () => clearInterval(intervalref.current) }> clear </button>
        </div>
    )
}

export default HookTimer