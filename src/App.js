
import React, { useState } from "react";
import Dashboard from './Dashboard'
import Login from './Login'
const App = () => {
    const [auth, setAuth] = useState(false)
    return (
        <div>
            {
                auth ? <Dashboard /> : <Login setAuth ={setAuth} />
            }
        </div>
    )
}
export default App;