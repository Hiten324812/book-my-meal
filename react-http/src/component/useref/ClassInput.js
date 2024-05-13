import React, { Component } from "react";

class ClassInput extends Component {

    constructor(props){
        super(props)

        this.state = {
            timer : 0
        }
    }

    componentDidMount(){
        console.log('component did mount');
        this.interval = setInterval ( () => {
           this.setState( prevstate => {
           return {timer : prevstate.timer + 1}
           } )
        } , 1000)
        
    }
      
    componentWillUnmount(){
        console.log('component unmount!!')
        clearInterval(this.interval)
    }

    render(){
        return (
            <div>
                class timer - {this.state.timer}

                <button onClick={() => clearInterval(this.interval)}>
                    Clear timer 
                </button>
            </div>
        )
    }
}

export default ClassInput