import React, {useState} from 'react'

const Login = () => {
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");


    return (
        <div className="login">
            <form className="login_form">
                <h1>Login Here</h1>
                <input type="name" placeholder="Name" value={name} onChange={(e) =>setName(e.target.value)}/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>

            </form>
        </div>
    )
}

export default Login
