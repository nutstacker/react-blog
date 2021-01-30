import React from 'react'

export default function Login({
    email,
    handleEmail,
    password,
    handlePassword,
    handleSubmit
}) {
    return (
        <div>
            <h1>Login</h1>

            <label>Email</label>
            <input type="text" value={email} onChange={handleEmail} />

            <label>Password</label>
            <input type="password" value={password} onChange={handlePassword} />

            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}
