import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

// Material UI Icons
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import {
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const LogoutButton = () => {
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
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="d-none d-md-block" navbar>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret id="profileDropDown">
                <img
                    src={user.picture}
                    alt="Profile"
                    className="nav-user-profile rounded-circle"
                    width="50"
                />
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>{user.name}</DropdownItem>
                    <DropdownItem
                        tag={RouterNavLink}
                        to="/profile"
                        className="dropdown-profile"
                        activeClassName="router-link-exact-active"
                    >
                        <PersonIcon  className="mr-3" /> Profile
                    </DropdownItem>
                    <DropdownItem
                        id="qsLogoutBtn"
                        onClick={() => logoutWithRedirect()}
                    >
                        <PowerSettingsNewIcon className="mr-3" /> Log
                        out
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
        
        <Nav
            className="d-md-none justify-content-between"
            navbar
            style={{ minHeight: 170 }}
        >
        <NavItem>
            <span className="user-info">
            <img
                src={user.picture}
                alt="Profile"
                className="nav-user-profile d-inline-block rounded-circle mr-3"
                width="50"
            />
            <h6 className="d-inline-block">{user.name}</h6>
            </span>
        </NavItem>
        <NavItem>
            <PersonIcon  className="mr-3" />
            <RouterNavLink
            to="/profile"
            activeClassName="router-link-exact-active"
            >
            Profile
            </RouterNavLink>
        </NavItem>
        <NavItem>
            <PowerSettingsNewIcon className="mr-3" />
            <RouterNavLink
            to="#"
            id="qsLogoutBtn"
            onClick={() => logoutWithRedirect()}
            >
            Log out
            </RouterNavLink>
        </NavItem>
    </Nav>
    </Collapse>
    </>
    );
};

export default LogoutButton;
