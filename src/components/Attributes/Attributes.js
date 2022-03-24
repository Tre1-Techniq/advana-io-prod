import React, { useEffect, useContext, useState } from "react";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { AccountContext } from "../Accounts/Accounts";

export default () => {
  // const [tier, setTier] = useState("");
  // const [tier, setTier] = useState("");
  // const [tier, setTier] = useState("");
  // const [tier, setTier] = useState("");
  // const [tier, setTier] = useState("");
  const [tier, setTier] = useState("");

  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((data) => {
      setTier(data["custom:tier"]);
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    getSession().then(({ user }) => {
      const attributes = [
        // new CognitoUserAttribute({Name: "custom:firstname",Value: firstname}),
        // new CognitoUserAttribute({Name: "custom:lastname",Value: lastname}),
        // new CognitoUserAttribute({Name: "email",Value: email}),
        // new CognitoUserAttribute({Name: "custom:company",Value: company}),
        // new CognitoUserAttribute({Name: "custom:segment",Value: segment}),
        new CognitoUserAttribute({Name: "custom:tier",Value: tier}),
      ];

      user.updateAttributes(attributes, (err, result) => {
        if (err) console.error(err);
        console.log(result);
      });
    });
  };

  return (
    <div>
      <h1>Update your plan:</h1>
      <form onSubmit={onSubmit}>
        <input value={plan} onChange={(event) => setPlan(event.target.value)} />

        <button type="submit">Change plan</button>
      </form>
    </div>
  );
};
