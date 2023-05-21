import React, { useEffect, useState } from 'react'
import Child from './Child';
import ChildTwo from './ChildTwo';
import { MemoisedChile } from './ContextComponent';


export const Context = React.createContext();
const Provider = Context.Provider;
let a = 0;
function Parent() {
    const [count, setCount] = useState(0)
    console.log("Parent")


    return (
        <>
            <h2>Parent Rendered {a++}</h2>
            <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
            <Provider value={count}>
                <MemoisedChile />
            </Provider>
        </>
    )
}

export default Parent