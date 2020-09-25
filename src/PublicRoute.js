import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './utils';

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
            {...rest}
            render={(props) => !getToken() ? <Component {...props} /> : <Redirect to={{ path: '/dashboard'}} />}
        />
    )
}

export default PublicRoute;