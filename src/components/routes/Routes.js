import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginContainer from '../login/LoginContainer'
import UsersContainer from '../users/UsersContainer'
import ProtectedRoute from './ProtectedRoute'
import Contact from '../Contact'
import Help from '../Help'

export default function Routes({
    isAuthenticated,
    setAuthenticated
}) {
    return (
        <Switch>

            <Route path="/" exact>
                <h1>Home</h1>
            </Route>

            <Route 
                path="/login"
                render={
                    () => (
                        <LoginContainer 
                            setAuthenticated={setAuthenticated} 
                        />
                    )
                } 
            />

            {/* <Routes path="/path" component={LoginContainer}/>
            <Route path="/path">
                <LoginContainer/>
            </Route>
            <Route path="/path" render={()=> (<LoginContainer/>)}/> */}


            <ProtectedRoute 
                isAuthenticated={isAuthenticated}
                path="/users" 
                component={UsersContainer} 
            />

            <Route path="/contact" component={Contact}/>
            <ProtectedRoute 
                isAuthenticated={isAuthenticated} 
                path="/help" 
                component={Help}
            />

        </Switch>
    )
}
