import React ,{Component} from "react"


class ClassOne extends Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    componentDidMount(){
        document.title = `clicked ${this.state.count} times`
        console.log('did mount');
    }

    componentDidUpdate(prevprops,prevstate){

        if( prevstate.count !== this.state.count )
           document.title = `clicked ${this.state.count} times`

           
        console.log('did update');
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.name} onChange={ e => {
                    this.setState({
                        name : e.target.value
                    })
                }} />
                <button onClick={() => this.setState({count : this.state.count + 1})}> click {this.state.count} times </button>
            </div>
        )
    }
}

export default ClassOne