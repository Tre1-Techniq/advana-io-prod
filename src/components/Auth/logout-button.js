// import React from "react";
import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

import { makeStyles } from "@material-ui/core/styles";

// Material UI Icons
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import styles from "../../assets/jss/material-dashboard-react/components/headerStyle";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const useStyles = makeStyles(styles);

const LogoutButton = () => {
    // const { user, logout } = useAuth0();

    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const {
        user,
        logout,
    } = useAuth0();
    const toggle = () => setIsOpen(!isOpen);

    const logoutWithRedirect = () =>
        logout({
        returnTo: window.location.origin,
    });

    return (
        // <button
        //     className="btn btn-danger btn-block"
        //     onClick={() =>
        //         logout({
        //             returnTo: window.location.origin,
        //         })
        //     }
        // >
        //     Log Out
        // </button>
        <>
        <Navbar expand="sm">
            <Container>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret id="profileDropDown">
                            <img
                                src={user.picture}
                                alt="Settings"
                                className="nav-user-profile rounded-circle"
                                width="50"
                            />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>{user.email}</DropdownItem>
                                <DropdownItem
                                    tag={RouterNavLink}
                                    to="/admin/settings"
                                    className="dropdown-profile"
                                    activeClassName="router-link-exact-active"
                                >
                                    <PersonIcon  className="mr-3" /> Settings
                                </DropdownItem>
                                <DropdownItem
                                    id="qsLogoutBtn"
                                    onClick={() => logoutWithRedirect()}
                                >
                                    <PowerSettingsNewIcon className="mr-3" /> Log
                                    Out
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
            </Collapse>
        </Container>
    </Navbar>
    </>
    );
};

export default LogoutButton;
