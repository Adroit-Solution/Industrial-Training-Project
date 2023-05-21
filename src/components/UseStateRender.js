import React, { useCallback, useEffect, useState } from 'react'
import debounce from 'lodash.debounce';

function UseStateRender() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [pass, setPass] = useState("")
    const [confPass, setConfPass] = useState("");
    const [count, setCount] = useState(0)

    const debounceName = useCallback(
        debounce(name =>
            setName(name), 1000
            ,
            [],
        )
    )

    const debounceEmail = useCallback(
        debounce(name =>
            setEmail(name), 1000
            ,
            [],
        )
    )

    const debouncePhone = useCallback(
        debounce(name =>
            setPhone(name), 1000
            ,
            [],
        )
    )


    const debouncePass = useCallback(
        debounce(name =>
            setPhone(name), 1000
            ,
            [],
        )
    )


    const debounceConf = useCallback(
        debounce(name =>
            setConfPass(name), 1000
            ,
            [],
        )
    )


    useEffect(() => {
        setCount(count + 1);
    }, [name, phone, email, pass, confPass])


    return (
        <>
            <h4>Document has been rendered for {count} time</h4>
            <form>
                <label for='name'>Name</label>
                <br />
                <input onChange={(e) => debounceName(e.target.value)} type='text' name='name' />
                <br /><br />
                <label>Email</label>
                <br />
                <input onChange={(e) => debounceEmail(e.target.value)} type='text' name='email' />
                <br /><br />
                <label>Phone</label>
                <br />
                <input onChange={(e) => debouncePhone(e.target.value)} type='text' name='phone' />
                <br /><br />
                <label>Password</label>
                <br />
                <input onChange={(e) => debouncePass(e.target.value)} type='password' name='name' />
                <br /><br />
                <label>Confirm Password</label>
                <br />
                <input onChange={(e) => debounceConf(e.target.value)} type='password' name='name' />
                <br /><br />
            </form>
        </>
    )
}

export default UseStateRender