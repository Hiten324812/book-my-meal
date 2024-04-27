import React from "react";

class Refdemo extends React.Component {

    constructor(props){
        super(props)
        this.inputref = React.createRef()
        this.cbref = null
        this.setcbref = (element) => {
            this.cbref = element
        }
    }

    componentDidMount(){
        if(this.cbref)
      {
        this.cbref.focus();
      }
    }

    clickHandler = () => {
      alert(this.cbref.value)
    }

    render() {
        return (
            <div>
              <input type="text" ref={this.inputref}/>
              <input type="text" ref={this.setcbref}/>

              <button onClick={this.clickHandler}> Click </button>
            </div>
        )
    }

}

export default Refdemo