import React from "react";

function HookArray(){
    const [items , setitems] = React.useState([]) 
     // initialize empty array 

    const additem = () =>{
        setitems([...items  //spread operator - copy paste all elements
            , {  
            id : items.length ,
            value : Math.floor(Math.random()*100) + 1
        }])
    }

    return(
        <div>

            <button onClick={additem}> add a number </button>
        
         <ul>
            {
                items.map( i => (
                    <li key={i.id}> {i.id} - {i.value}  </li>
                )) // print array element using map method 
            }
         </ul>

        </div>
    )
}

export default HookArray