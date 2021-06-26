import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

const NAME = 'Vishal'
const PASS = 'test1234'

const  Login = ({ history,setAuth }) => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit() {
        if(name == NAME && password == PASS){
            setAuth(true);
            history.push('/dash')
        }
    }
    return (
        <div>
            Username: <input name="login" onChange={(e) => setName(e.target.value)} />
            Password: <input name="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}> Login</button>
        </div >
    )
}
export default withRouter(Login)
