/* eslint-disable no-unused-expressions */

import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Loading from "../../components/Loading/Loading";

// nodejs library to set properties for components
// import PropTypes from "prop-types";

// PrivateRoute.propTypes = {
//   component: PropTypes.element,
//   location: PropTypes.string,
//   isAuth: PropTypes.bool
// };

const PrivateRoute = ({ component, ...args }) => {
    <Route
        component={withAuthenticationRequired(component, {
            onRedirecting: ()=> <Loading />,
        })}
        {...args}
    />
}

export default PrivateRoute
