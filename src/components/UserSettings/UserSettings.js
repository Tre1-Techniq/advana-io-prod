/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import { AccountContext } from "../Accounts/Accounts";
// import ChangeEmail from '../ChangeEmail/ChangeEmail';
// import ChangePassword from "../ChangePassword/ChangePassword";

export default () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession().then(() => {
      setLoggedIn(true);
    });
  }, []);

  return (
    <div>
      {loggedIn && (
        <>
          {/* <h1>User Settings</h1>
          <ChangeEmail />
          <ChangePassword /> */}
        </>
      )}
    </div>
  );
};
