import  { useState } from "react";


function UseInput(initialvalue){

    const [value,setvalue] = useState(initialvalue)


    const reset = () => {
        setvalue(initialvalue)
    }
   
    
    const bind = {
        value : value ,
        onChange : e => {
            setvalue(e.target.value)
        }
    }

    return [value,bind,reset]
}

export default UseInput