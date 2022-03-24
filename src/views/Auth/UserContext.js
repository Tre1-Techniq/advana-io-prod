
import React, { createContext, useEffect, useState } from react;
import { Auth, Hub } from aws-amplify;

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [groupType, setGroupType] = useState(null);

  useEffect(() => {
    checkUser();
    Hub.listen(auth, ({ payload: { event, data } }) => {
      switch (event) {
        case signIn:
          checkUser();
        case signOut:
          setUser(null);
          setGroupType(null);
          break;
        default:
          return;
      }
    });
  }, []);
  async function checkUser() {
    try {
      const resultUser = await Auth.currentAuthenticatedUser();
      setUser(resultUser);

      setGroupType(
        resultUser.signInUserSession.accessToken.payload[cognito:groups][0]
      );
      getDbUser(resultUser);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <UserContext.Provider value={{ user, groupType }}>
      {props.children}
    </UserContext.Provider>
  );
};
