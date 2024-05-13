import React from "react";
import UseInput from "./UseInput";


function UserForm(){
   
    
   const [ firstname ,bindfirstname ,resetfirstname] =  UseInput('')
   const [ lastname , bindlastname,resetlastname] =  UseInput('')

    const submithandler = e => {
        e.preventDefault();
        
        alert(`Hello ${firstname} ${lastname}`)
        resetfirstname()
        resetlastname()
    }

    return(
        <div>
            <form onSubmit={submithandler}>
                <div>
                    <label> First name </label>
                    <input type="text" {...bindfirstname} />
                </div>
                <div>
                    <label> last name </label>
                    <input type="text" {...bindlastname} />
                </div>

                <button> submit </button>
            </form>
        </div>
    )
}

export default UserForm