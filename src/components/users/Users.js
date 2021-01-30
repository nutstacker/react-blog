import React from 'react'
import Loading from '../Loading'

export default function Users({ users = [], loading }) {
    return (
        <div>
            {users.map(user => (
                    <h1 key={user.id}>{user.name}</h1>
                ))
            }

            {loading && (<Loading/>)}
        </div>
    )
}
