import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getToken } from '../service/AuthService';

// nodejs library to set properties for components
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, ...rest}) => {
  PrivateRoute.propTypes = {
    component: PropTypes.string,
  };
  return (
    <Route 
      {...rest}
      render={props => {
        return getToken() ? <Component {...props} />
        : <Redirect to={{ pathname: '/auth'}} />
      }}
    />
  )
}

export default PrivateRoute;
