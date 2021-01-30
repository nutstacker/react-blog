import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component,isAuthenticated, path }) => {
    return (
        // <Route
        //     path={path}
        //     render={() =>
        //         isAuthenticated ? (
        //             <Component />
        //         ) : (
        //                 <Redirect to="/login" />
        //             )
        //     }
        // />
        <Route path={path}>
            {
                isAuthenticated ? (
                    <Component />
                ) : (
                    <Redirect to="/login" />
                )
            }
        </Route>
    );
};

export default ProtectedRoute;
