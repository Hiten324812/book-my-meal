import React , {useState}  from "react";
import HookMouse from "./HookMouse";


function MouseCont(){
    const [display,setdisplay] = useState(true)

    return(
        <div>
            <button onClick={() => setdisplay(!display)}> Toggle display </button>
            {display && <HookMouse />}
        </div>
    )
}

export default MouseCont