import React , {useContext} from "react";

import { Usercontext , Channelcontext } from "../App";

function Componentf(){

   const name =  useContext(Usercontext)
   const surname = useContext(Channelcontext)

   return (
    <div>
        <h1> {name} - {surname} </h1>
    </div>
   )


}

export default Componentf