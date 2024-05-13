import React , { useReducer } from "react";

const initialstate = {
    firstcounter : 0
}

const reducer = (state,action) => {

    switch(action.type) {
        case 'increment' :
            return {firstcounter : state.firstcounter + 1}
        case 'decrement' :
            return {firstcounter : state.firstcounter - 1}
        case 'reset' :
            return initialstate
        default :
           return state
    }
}

function CounterTwo() {

   const [count,dispatch] =  useReducer(reducer,initialstate)

    return (
        <div>
           <h1> {count.firstcounter} times </h1>
          <button onClick={ () => dispatch({ type : 'increment'}) }> increment  </button>
          <button onClick={ () => dispatch({type : 'decrement'}) }> decrement  </button>
          <button onClick={ () => dispatch({type : 'reset'})}> reset </button>

        </div>
    )
}

export default CounterTwo