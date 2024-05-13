import { useEffect } from "react";

function useDocumentitle(count){

    useEffect ( () => {
        document.title = `count ${count}`
    } , [count])

}


export default useDocumentitle