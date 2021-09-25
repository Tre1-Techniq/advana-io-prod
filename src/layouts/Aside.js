import React from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

import { FaTachometerAlt, FaGem, FaTools, FaUser, FaUserShield, FaImages } from 'react-icons/fa';

import sidebarBg from './assets/sidebar-dark.jpg';
import fullLogo from "../assets/img/logo-full-grad.png";
import pillLogo from "../assets/img/advana-pill-logo.png";

// nodejs library to set properties for components
import PropTypes from "prop-types";

const Aside = ({ image, collapsed, toggled, handleToggleSidebar }) => {
  const intl = useIntl();
  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            // textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
            <a href="/">
            <img src={!collapsed ? fullLogo : pillLogo} className={!collapsed ? "sidebar-logo" : "sidebar-logo pill"} />
            </a>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaUser />}
            suffix={<span className="badge teal">Pro</span>}
          >
            {intl.formatMessage({ id: 'profile' })}
          </MenuItem>
          <MenuItem icon={<FaGem />}> {intl.formatMessage({ id: 'campaigns' })}</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={intl.formatMessage({ id: 'dashboard' })}
            icon={<FaTachometerAlt />}
          >
            {/* <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem> */}
            <MenuItem>Dashboard 1</MenuItem>
            <MenuItem>Dashboard 2</MenuItem>
            <MenuItem>Dashboard 3</MenuItem>
          </SubMenu>
          <Menu iconShape="circle">
            <MenuItem icon={<FaImages />}>Media Library</MenuItem>
            <MenuItem icon={<FaTools />}>Settings</MenuItem>
          </Menu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="#"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaUserShield />
            <span> {intl.formatMessage({ id: 'adminLogin' })}</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

Aside.propTypes = {
    image: PropTypes.bool,
    collapsed: PropTypes.bool,
    toggled: PropTypes.bool,
    handleToggleSidebar: PropTypes.func,
};

export default Aside;
