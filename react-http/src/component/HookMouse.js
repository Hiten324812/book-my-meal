import React, { useEffect, useState } from "react";

function  HookMouse(){

    const [x , setx] = useState(0)
    const [y , sety] = useState(0)

 const logpositionmouse = e => {
    console.log('mouse event');
    setx(e.clientX)
    sety(e.clientY)
 }

    useEffect( () => {
        document.title = `${x}`
        console.log('mouse over')
        window.addEventListener('mousemove', logpositionmouse)
    } ,[] )


    return(
        <div>
            x - {x}
            y - {y}
        </div>
    )
}

export default HookMouse