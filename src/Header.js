import React from 'react'
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
const Header = ({auth}) => {
    return (
        <div className="nav-bar">
            <Link to="/"> Home</Link>
            <Link to="/dash">Dashboard</Link>
            {auth?<Link to="/logout">Logout </Link>:<Link to="/login">Login </Link>}
        </div>

    )
}

export default Header
