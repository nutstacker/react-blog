import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Login from './Login'

export default function LoginContainer({ setAuthenticated }) {

    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("cityslicka");

    /**
     * for redirect
     */

    const history = useHistory();
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {

        if(!email) {
            alert("email cannot be null")
            return
        }

        if (!password) {
            alert("password cannot be null")
            return
        }

        const credentials = {
            email,
            password
        }

        axios.post('https://reqres.in/api/login', credentials).then((response) => {
            console.log(response.data);
            setAuthenticated(true);
            history.push('/');
        }).catch(error =>{
            console.log(error)
            setAuthenticated(false);
        })
    }

    const loginProps = {
        email,
        handleEmail,
        password,
        handlePassword,
        handleSubmit
    }

    return (
        <Login 
            {...loginProps}
        />
    )
}
