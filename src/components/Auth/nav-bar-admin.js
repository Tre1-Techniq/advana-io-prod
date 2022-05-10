import React from 'react';

import AuthNavAdmin from './auth-nav-admin';

const NavBarAdmin = () => {
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
            <nav className="navbar-admin navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <div className="navbar-brand logo" />
                    <AuthNavAdmin />
                </div>
            </nav>
        </div>
    );
};

export default NavBarAdmin;
