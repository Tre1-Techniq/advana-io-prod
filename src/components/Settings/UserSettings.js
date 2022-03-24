import React, { useState, useEffect, useContext } from "react";
import { AccountContext } from "../Accounts/Accounts";
import ChangePassword from "./ChangePassword";
import ChangeEmail from "./ChangeEmail";

/*eslint-disable */
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
          <h1>Settings</h1>
          <ChangePassword />
          <ChangeEmail />
        </>
      )}
    </div>
  );
};
