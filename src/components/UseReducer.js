import React, { useEffect, useReducer, useState } from 'react'

const intialState = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case 'add': return state + parseInt(action.data)
        case 'subtract': return state - parseInt(action.data)
        case 'multiply': return state * parseInt(action.data)
        default: return state
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, intialState)
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Component Rendered")
    }, [])

    return (
        <>
            <h1>Ans {state}</h1>
            <input type='number' name="text" />
            <br /><br />
            <button onClick={() => dispatch({ type: "add", data: document.getElementsByName("text")[0].value })}>Add</button>&nbsp;&nbsp;
            <button onClick={() => dispatch({ type: "subtract", data: document.getElementsByName("text")[0].value })}>Substract</button>&nbsp;&nbsp;
            <button onClick={() => dispatch({ type: "multiply", data: document.getElementsByName("text")[0].value })}>Multiply</button>
        </>
    )
}

export default UseReducer