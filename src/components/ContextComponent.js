import React, { useContext } from 'react'
import { Context } from './Parent'

export function ContextComponentChild1() {

    console.log("child 1")
    return (
        <>
            <div>ContextComponent</div>
            <ContextComponentChild2 />
        </>
    )
}

export const MemoisedChile = React.memo(ContextComponentChild1);

export function ContextComponentChild2() {

    console.log("child 2")
    return (
        <>
            <div>ContextComponent</div>
            <ContextComponentChild3 />
        </>
    )
}

export function ContextComponentChild3() {
    const count = useContext(Context);
    console.log("child 3")
    return (
        <>
            <div>ContextComponent {count}</div>
        </>
    )
}