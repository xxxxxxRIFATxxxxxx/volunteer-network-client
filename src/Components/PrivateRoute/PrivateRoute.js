import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';
import Loading from '../Loading/Loading';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="text-center my-5">
                <Loading></Loading>
            </div>
        );
    };

    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/register",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;