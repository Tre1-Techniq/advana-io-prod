import React from "react";
//import classNames from "classnames";
//import PropTypes from "prop-types";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

import { makeStyles } from "@material-ui/core/styles";
//import Drawer from "@material-ui/core/Drawer";
//import Hidden from "@material-ui/core/Hidden";

import EqualizerIcon from "@material-ui/icons/Equalizer";

// Advana Theme Overrides
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";

const useStyles = makeStyles(styles);

export default function Sidebar() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={advanaTheme}>
      <ProSidebar>
        <SidebarHeader>
          <p>NAVBAR</p>
        </SidebarHeader>
        <SidebarContent className={classes.proSidebar}>
          <Menu iconShape="square">
            <SubMenu title="Components" icon={<EqualizerIcon />}>
              <MenuItem>Component 1</MenuItem>
              <SubMenu title="Sub Component 1" icon={<EqualizerIcon />}>
                {/* you can have more nested submenus ... */}
              </SubMenu>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <p>FOOETER</p>
        </SidebarFooter>
      </ProSidebar>
    </ThemeProvider>
  );
}
