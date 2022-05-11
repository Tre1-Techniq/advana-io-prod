import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

import {
    Nav,
    NavItem,
    Button,
  } from "reactstrap";

const LoginButton = () => {
    const {
        loginWithRedirect,
    } = useAuth0();

    return (
        // <button
        //     className="btn btn-primary btn-block"
        //     onClick={() => loginWithRedirect()}
        // >
        //     Log In
        // </button>
        <Nav>
            <NavItem>
                <Button
                    id="qsLoginBtn"
                    color="primary"
                    className="btn-margin"
                    onClick={() => loginWithRedirect()}
                >
                    Portal
                </Button>
            </NavItem>
        </Nav>
        
    );
};

export default LoginButton;
