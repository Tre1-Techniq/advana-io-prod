import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import { Account } from './components/Accounts/Accounts'

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "./advanaTheme";

// pages for this product
import LandingPage from "./views/LandingPage/LandingPage";
import Sentry from './views/Products/Sentry/Sentry';
import Insight from './views/Products/Insight/Insight';
import Promote from './views/Products/Promote/Promote';
import Dooh from './views/Products/Dooh/Dooh';
import Campaigns from './views/Campaigns/Campaigns';
import Admin from "./layouts/Admin";
// import Auth from "./views/Auth/Auth";
// import SignUp from "./views/Auth/SignUp";
// import ConfirmSignUp from "./views/Auth/ConfirmSignUp";
import SignIn from "./views/Auth/SignIn";
import Login from "./components/Auth/Login";
// import Welcome from "./views/Auth/Welcome";
import NotFound from "./views/NotFound/NotFound";
import PepsiQ1Sweeps from "./views/Promos/Sweeps/PepsiQ1Sweeps";
import Santikos from "./views/Promos/Santikos";
import SantikosCoupon from "./views/Promos/SantikosCoupon";
//import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

// nodejs library to set properties for components
//import PropTypes from "prop-types";

function App() {
  //const [ isAuth, setIsAuth ] = useState(false);

  //const { getSession } = useContext(AccountContext);

  // useEffect(() => {
  //   getSession();
  //   { getSession ? setIsAuth(true) : setIsAuth(false) }
  // }, [getSession]);

  if (window.location.host.split(".")[0] == "auth") {
    // Check if the subdomain is named projects.
    return (
      <ThemeProvider theme={advanaTheme}>
        <Account>
          <Router>
            <Switch>
              <Route path="/signin" component={SignIn} />
              {/* <Route path="/admin" component={Admin} /> */}
            </Switch>
          </Router>
        </Account>
      </ThemeProvider>
      
    );
  };
  
  return (
    <ThemeProvider theme={advanaTheme}>
      <Account>
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/dooh" exact component={Dooh} />
            <Route path="/sentry" exact component={Sentry} />
            <Route path="/insight" exact component={Insight} />
            <Route path="/promote" exact component={Promote} />
            <Route path="/campaigns" exact component={Campaigns} />
            {/* <Route path="/auth" component={Auth} /> */}
            {/* <Route path="/signup" exact component={SignUp} />
            <Route path="/confirmsignup" exact component={ConfirmSignUp} />
            <Route path="/welcome" exact component={Welcome} /> */}
            <Route path="/signin" exact component={SignIn} />
            <Route path="/login" exact component={Login} />
            {/* <ProtectedRoute path="/admin" component={Admin} isAuth={isAuth} /> */}
            <Route path="/admin" component={Admin} />
            <Route path="/pepsisweeps" component={PepsiQ1Sweeps} />
            <Route path="/santikos" component={Santikos} />
            <Route path="/santikoscoupon" component={SantikosCoupon} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Router>
      </Account>
    </ThemeProvider>
  );
}

export default App;

