import React from "react";


    class Newcomponent extends React.Component{
        constructor(props)
        {
            super(props);
            this.state = {
                count : 0
            }
        }
    
        Increment = () => {
            this.setState( prevstate => {
               return  { count : prevstate.count + 2 }
            })
        }

        render() {
            return (
                <button onClick={this.Increment}> <h1>
                    Clicked {this.state.count} times
                    </h1> </button>
            )
        }
    }




export default Newcomponent