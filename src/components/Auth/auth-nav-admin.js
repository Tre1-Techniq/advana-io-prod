import React from 'react';
import AuthenticationButtonAdmin from './authentication-button-admin';
import Hidden from "@material-ui/core/Hidden";

const AuthNavAdmin = () => (
    <div className="navbar-nav-admin ml-auto">
        <Hidden mdDown implementation="css">
            <AuthenticationButtonAdmin />
        </Hidden>
        
    </div>
);

export default AuthNavAdmin;
