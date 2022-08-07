import React from 'react';

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../advanaTheme";

import AuthNavAdmin from './auth-nav-admin';

const NavBarAdmin = () => {
    return (
        <ThemeProvider theme={advanaTheme}>
            <div className="nav-container mb-3">
                <nav className="navbar-admin navbar-expand-md navbar-light bg-light">
                    <div className="container">
                        <div className="navbar-brand logo" />
                        <AuthNavAdmin />
                    </div>
                </nav>
            </div>
        </ThemeProvider>
    );
};

export default NavBarAdmin;
