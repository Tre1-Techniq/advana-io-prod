// @mui/icons-material
import HomeIcon from '@material-ui/icons/Home';
//import DashboardIcon from '@material-ui/icons/Dashboard';
import CampaignIcon from "@material-ui/icons/TrendingUp";
import AnalyticsIcon from "@material-ui/icons/PieChart";
import MediaIcon from "@material-ui/icons/PermMedia";
import SettingsIcon from '@material-ui/icons/Settings';
import AdminIcon from "@material-ui/icons/Build";

// core components/views for Admin layout
import AdminHome from "./views/Dashboard/AdminHome";
import CampaignAdmin from "./views/Dashboard/CampaignAdmin";
import Analytics from "./views/Dashboard/Analytics";
import Media from "./views/Dashboard/Media";
import UserSettings from "./views/Dashboard/UserSettings";
import AdminPanel from "./views/Dashboard/AdminPanel";
// import AddEditUser from "./views/Dashboard/Users/AddEditUser";
// import ViewUserDetails from "./views/Dashboard/Users/ViewUserDetails";

const routesAdmin = [
  // {
  //   path: "/home",
  //   name: "Home",
  //   icon: HomeIcon,
  //   component: AdminHome,
  //   layout: "/admin",
  // },
  // {
  //   path: "/campaignadmin",
  //   name: "Campaigns",
  //   icon: CampaignIcon,
  //   component: CampaignAdmin,
  //   layout: "/admin",
  // },
  {
    path: "/sentry",
    name: "Sentry",
    icon: AnalyticsIcon,
    component: Analytics,
    layout: "/admin",
  },
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
    layout: "/admin"
  },
  // {
  //   path: "/media",
  //   name: "Media Library",
  //   icon: MediaIcon,
  //   component: Media,
  //   layout: "/admin",
  // },
];

export default routesAdmin;
