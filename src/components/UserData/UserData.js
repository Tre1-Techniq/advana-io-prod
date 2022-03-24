import React, { useState, useContext } from 'react';
import axios from 'axios';

import { AccountContext } from './Accounts'

export default () => {
  const [userData, setUserData] = useState([]);
  const [company, setCompany] = useState("");

  useEffect(() => {
    getSession().then((data) => {
      setCompany(data["custom:company"]);
    });
  }, []);

  const { getSession } = useContext(AccountContext)

  const fetchUserData = () => {
    getSession().then(async ({ headers }) => {
      const url =
        'https://4hb2b65d94.execute-api.us-east-1.amazonaws.com/prod/brands/{company}'

      console.log(headers)

      const userData = await axios(url, { headers });
      setUserData(userData);
    })
  }

  return (
    <div>
      <div>{company} Data: {userData}</div>
      <button onClick={fetchUserData}>Fetch new number</button>
    </div>
  )
}
