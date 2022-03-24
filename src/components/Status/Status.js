/* eslint-disable */

import React, { useState, useContext, useEffect } from 'react';
//import { useHistory } from "react-router-dom";
import { AccountContext } from '../Accounts/Accounts';

import Button from '@material-ui/core/Button';

export default () => {
  const [status, setStatus] = useState(false);
  
  const { getSession, logout } = useContext(AccountContext);

  //let history = useHistory();

  useEffect(() => {
    getSession()
      .then(session => {
        console.log('Session:', session);
        setStatus(true);
      })
  }, []);

  return (
    <div>
      {status ? (
          <div>
            You are logged in.
            <Button
              onClick={logout}
              color="secondary"
            >
                Logout
            </Button>
          </div>
        ) : "Updating Session..."
      }
    </div>
  );
};
