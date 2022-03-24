import { CognitoUserPool } from 'amazon-cognito-identity-js';

  const poolData = {
    UserPoolId: 'us-east-1_fkRzpFXac',
    ClientId: '7f7tkrbulamuddtpdhl68eglub'
  };

export default new CognitoUserPool(poolData);
