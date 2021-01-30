import React, { useEffect, useState } from 'react'
import Users from './Users';
import axios from 'axios';

export default function UsersContainer() {

    /**
     * @param initialValue
     * @return array[state, stateManipulatorFunction]
     */
    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);

    /**
     * @param function => what to do
     * @param dependancy array => what all parameters are dependent
     */
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            console.log(response.data);
            setUsers(response.data)
        })
        .catch((error) => {
            console.log(error);
            alert("error");
        })
        .then(() => {
            setLoading(false);
        })
    }, [])

    return (
        <Users users={users} loading={loading}/>
    )
}
