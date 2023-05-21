import React, { useEffect, useState } from 'react'

function Child() {
    const [count, setCount] = useState(0)


    console.log("Child")


    return (
        <>
            <h2>Child</h2>
            <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
        </>
    )
}

export default Child;