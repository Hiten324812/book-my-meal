import React from "react";
import Componentf from "./Componentf";
import Usercontext from "./Usercontext";

class Componente extends React.Component{

    static contextType = Usercontext
    
    render(){
        return(

           <div>
            component E - {this.context}
            <Componentf />
           </div>
        )
    }
}



export default Componente