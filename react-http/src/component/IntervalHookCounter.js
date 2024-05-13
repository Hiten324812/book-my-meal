import React, { useEffect, useState } from "react";

function IntervalHookCounter(){

    const [count,setcount] = useState(0)

    const tick = () => {
        setcount(prevcount => prevcount + 1 );
    }

    useEffect( () => {
        console.log('component monut');
        const interval = setInterval(tick,1000);

        return () => {
            clearInterval(interval)
        }

    } ,[])

    return(
        <div>
            {count} seconds
        </div>
    )
}

export default IntervalHookCounter