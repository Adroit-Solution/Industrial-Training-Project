import React, { useState } from 'react'

function ChildTwo() {
    const [count, setCount] = useState(0)


    console.log("ChildTw0")


    return (
        <>
            <h2>Child 2</h2>
            <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
        </>
    )
}

export default React.memo(ChildTwo);