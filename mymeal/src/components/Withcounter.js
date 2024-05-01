import React from "react";

const Updatedcomponent = Originalcomponent => {
    class Newcomponent extends React.Component{
        constructor(props)
        {
            super(props);
            this.state = {
                count : 1
            }
        }
    
        Increment = () => {
            this.setState( prevstate => {
                return { count : prevstate.count + 1 }
            })
        }

        render() {
            return (
                <Originalcomponent count={this.state.count} Increment={this.Increment} />
            )
        }
    }

    return Newcomponent
}

export default Updatedcomponent