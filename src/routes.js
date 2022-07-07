/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui/icons-material
import HomeIcon from '@material-ui/icons/Home';
//import DashboardIcon from '@material-ui/icons/Dashboard';
import CampaignIcon from "@material-ui/icons/TrendingUp";
import AnalyticsIcon from "@material-ui/icons/PieChart";
// import MediaIcon from "@material-ui/icons/PermMedia";
import SettingsIcon from '@material-ui/icons/Settings';
import AdminIcon from "@material-ui/icons/Build";

// core components/views for Admin layout
import AdminHome from "./views/Dashboard/AdminHome";
import CampaignAdmin from "./views/Dashboard/CampaignAdmin";
import Analytics from "./views/Dashboard/Analytics";
// import Media from "./views/Dashboard/Media";
import UserSettings from "./views/Dashboard/UserSettings";
import AdminPanel from "./views/Dashboard/AdminPanel";

const routes = [
  {
    path: "/home",
    name: "Home",
    icon: HomeIcon,
    component: AdminHome,
    layout: "/admin",
  },
  {
    path: "/campaignadmin",
    name: "Campaigns",
    icon: CampaignIcon,
    component: CampaignAdmin,
    layout: "/admin",
  },
  {
    path: "/sentry",
    name: "Sentry",
    icon: AnalyticsIcon,
    component: Analytics,
    layout: "/admin",
  },
  // {
  //   path: "/media",
  //   name: "Media Library",
  //   icon: MediaIcon,
  //   component: Media,
  //   layout: "/admin",
  // },
  {
    path: "/settings",
    name: "Settings",
    icon: SettingsIcon,
    component: UserSettings,
    layout: "/admin",
  },
  {
    path: "/admin-panel",
    name: "Admin Panel",
    icon: AdminIcon,
    component: AdminPanel,
    layout: "/admin",
  },
];

export default routes;
