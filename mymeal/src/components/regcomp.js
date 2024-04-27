import React from 'react'

class regcomp extends React.Component {
   
    render(){
        console.log('regular')
        return(
            <div>
                <h1> regular component {this.props.name}  </h1>
            </div>
        )
    }
}

export default regcomp