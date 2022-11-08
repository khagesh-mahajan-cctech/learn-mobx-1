import {observer} from 'mobx-react'
import { useEffect } from 'react';

export const Counter = observer( ({counter}) => {

    // useEffect(() =>{
    //     console.log(counter.counterValue);
    // }, [])
    
    return (
        <>
            <h3>{counter.counterValue}</h3>
            <button onClick={counter.increment}>+</button>
            <button onClick={counter.decrement}>-</button>
        </>
    )

})