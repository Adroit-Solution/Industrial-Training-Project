import React, { useEffect, useState } from 'react'
import Child from './Child';

function Parent() {
    const [count, setCount] = useState(0)
    console.log("Parent")


    return (
        <>
            <h2>Parent</h2>
            <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
            <button onClick={() => setCount((c) => c)}>No Change {count}</button>
            <Child />
        </>
    )
}

export default Parent