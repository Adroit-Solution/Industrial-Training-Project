import React, { useEffect, useState } from 'react'
import Child from './Child';
import ChildTwo from './ChildTwo';

function Parent() {
    const [count, setCount] = useState(0)
    console.log("Parent")


    return (
        <>
            <h2>Parent</h2>
            <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
            <Child />
            <ChildTwo />
        </>
    )
}

export default Parent