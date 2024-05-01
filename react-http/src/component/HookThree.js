import React from "react";

function HookThree(){
    const [name , setname] = React.useState({firstname : '' , lastname : ''})

    return(
        <form>
            <input type="text" value={name.firstname} onChange={ e => setname(
                { ...name ,firstname : e.target.value })} />

            <input type="text" value={name.lastname}  onChange={ e => setname({ ...name, lastname : e.target.value})}/>

            <h2> Your first name is : { name.firstname }</h2>
            <h2> Your last name is : { name.lastname }</h2>
        
        </form>
    )
}

export default HookThree