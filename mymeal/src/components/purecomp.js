import React from 'react'

class purecomp extends React.PureComponent {
    render(){
        console.log('pure component')
        return(
            <div>
                <h1> pure component {this.props.name}</h1>
            </div>
        )
    }
}

export default purecomp