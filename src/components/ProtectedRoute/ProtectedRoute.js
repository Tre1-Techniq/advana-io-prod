import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// nodejs library to set properties for components
import PropTypes from "prop-types";

ProtectedRoute.propTypes = {
  component: PropTypes.element,
  location: PropTypes.string,
  isAuth: PropTypes.bool
};

function ProtectedRoute({ isAuth: isAuth, component: Component, ...rest }) {
    return <Route {...rest} render={(props) => {
        if (isAuth) {
            return <Component />
        } else  {
            <Redirect to={{pathname: '/auth', state: { from: props.location } }} />
        };
    }} />;
}

export default ProtectedRoute
