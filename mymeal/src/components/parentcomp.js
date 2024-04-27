import React from 'react'
import Regcomp from './regcomp'
import Purecomp from './purecomp'

class parentcomp extends React.PureComponent {

    constructor(props){
        super(props)

        this.state = {
            name : "hiten"
        }
    }

    componentDidMount() {
        setInterval ( () => {
            this.setState({
                name : 'jaimin'
            })
        } , 2000 )
    }
    render(){
        console.log('parent component render');
        return(
            <div>
                <Regcomp name= {this.state.name}> </Regcomp>
                <Purecomp name= {this.state.name}> </Purecomp>
            </div>
        )
    }
}

export default parentcomp