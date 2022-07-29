import React, { useEffect } from 'react';

import { useAuth0 } from "@auth0/auth0-react";

const UserSettings = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  const { getAccessTokenSilently } = useAuth0();

  async function getAccessToken() {
    const token = await getAccessTokenSilently();
  }

  useEffect(() => {
    getAccessToken();
  },[]);
  const namespace = 'https://user.metadata.io';
  const company = `${namespace}/manufacturer`;
  const companyName = `${user[company]}`;

  const roles = `${namespace}/roles`;
  const rolesList = `${user[roles]}`;

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="col-md text-center text-md-left">
          <p><strong>Company:</strong> {companyName}</p>
          <p><strong>Roles:</strong> {user[roles][1]}</p>
      </div>
    </div>
  );
};

export default UserSettings;
