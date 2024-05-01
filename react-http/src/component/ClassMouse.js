import React, { Component } from "react";

class ClassMouse extends Component{

    constructor(props){
        super(props)
        this.state = {
            x : 0 ,
            y : 0
        }
    }

    logmouseposition = e => {
        this.setState({x : e.clientX , y : e.clientY})
    }

    componentDidMount(){
        window.addEventListener('mousemove',this.logmouseposition)
    }

    render(){
        return(
            <div>
                x - {this.state.x}
                y - {this.state.y}
            </div>
        )
    }


}

export default ClassMouse