import React from 'react';

import AuthNav from './auth-nav';

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const NavBar = () => {
    return (
        // <div className="nav-container mb-3">
        //     <nav className="navbar navbar-expand-md navbar-light bg-light">
        //         <div className="container">
        //             <div className="navbar-brand logo" />
        //             <AuthNav />
        //         </div>
        //     </nav>
        // </div>

        <div className="nav-container mb-3">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <div className="navbar-brand logo" />
                    <AuthNav />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
