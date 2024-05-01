import react from 'react'
import axios from 'axios'

class Postlist extends react.Component{
    constructor(props){
        super(props)

        this.state = {
            posts : [] ,
            error : ""
        }
    }

    componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then( result => {
            console.log(result);
            this.setState({
                posts : result.data
            })
         })
         .catch ( err => {
            console.log(err)
            this.setState({
                error : 'error retrieving data '
            })
         })
    }

    render(){

        const {posts ,error } = this.state;

        return(
            <div>
                List of post 

                {
                    posts.length ? 
                    posts.map(p => <div key={p.id}>
                        
                         {p.title} - {p.id}  </div>) : null
                }
                {
                   error ? <div> {error} </div> : null
                }
            </div>
        )
    }
}

export default Postlist