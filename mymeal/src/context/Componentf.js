import React from "react";
import { Userconsumer } from "./Usercontext"
class Componentf extends React.Component{
    render(){
        return(
            <Userconsumer>
                { username => {

                       return (
                        <h1> hello {username}  </h1>
                       )

                    }
                }
            </Userconsumer>
        )
    }
}

export default Componentf