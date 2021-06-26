import React from 'react'
import { Redirect, } from 'react-router-dom'
const Logout = ({ setAuth }) => {
    setAuth(false);

    return (
        <Redirect to={'/'} />
    )
}

export default Logout
