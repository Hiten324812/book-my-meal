import React, { useState } from "react";
import useDocumentitle from "../hooks/useDocumentitle";

function DocTitleTwo(){

    const [count,setcount] = useState(0)
   
    useDocumentitle(count)

    return(
        <div>
              <button onClick={ () => { setcount(count + 1)}}>
                count - {count}
              </button>
        </div>
    )
}


export default DocTitleTwo