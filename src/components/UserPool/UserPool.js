import { CognitoUserPool } from 'amazon-cognito-identity-js';

  const poolData = {
    UserPoolId: 'us-east-1_BLIvGOWaC',
    ClientId: '7jf9np3f974kv4dtm7d9lvl46o'
  };

export default new CognitoUserPool(poolData);
