import React from "react";
import Withcounter from './Withcounter'

class Hovercounter extends React.Component{

   
    render()
    {
        const { count , Increment } = this.props 
        
        return(
            <h2 onMouseOver={Increment}> hovered {count} times  </h2>
        )
    }
}

export default Withcounter(Hovercounter)