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

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Amplify, { Auth } from 'aws-amplify';
import Embed from './Embed';
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

function Dashboard() {
  const [user, updateUser] = useState(null);
  let history = useHistory();

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      updateUser(user)
    } catch (err) {
      console.log("User Auth Error: ", err)
      updateUser(null)
      history.push("/signin")
    }
  }

  return (
    <>
      <Embed
        user={user}
      />
      <button
        onClick={() => { Auth.signOut().then(history.push("/signin")) }}
      >Sign Out
      </button>
    </>
  );
}

export default Dashboard;
