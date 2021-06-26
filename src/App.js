
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard'
import Login from './Login'
import Logout from './Logout'
import Header from "./Header";
import Home from "./Home";
function App() {
    const [auth, setAuth] = useState(false)
    return (
        <main>
            <Header auth={auth} />
            <Switch>
                <Route exact path="/" render={(props) => {
                    return <Home {...props} />
                }} />
                <Route path="/dash" render={(props) => {
                    return <Dashboard {...props} auth={auth} />
                }} />
                <Route path="/login" render={(props) => {
                    return <Login {...props} setAuth={setAuth} />
                }} />
                <Route path="/logout" render={(props) => {
                    return <Logout {...props} setAuth={setAuth} />
                }} />
            </Switch>
        </main>
    )
}

export default App;