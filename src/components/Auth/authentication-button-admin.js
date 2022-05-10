import React from 'react';

import LoginButton from './login-button';
import LogoutButtonAdmin from './logout-button-admin';

import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <LogoutButtonAdmin /> : <LoginButton />;
};

export default AuthenticationButton;
