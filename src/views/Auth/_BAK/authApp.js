import '../../configureAmplify'
import React, { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'
import SignIn from '../../components/Auth/SignIn'
import SignUp from '../../components/Auth/SignUp'
import Portal from '../../components/Auth/Portal'
import ForgotPassword from '../../components/Auth/ForgotPassword'
import ForgotPasswordSubmit from '../../components/Auth/ForgotPasswordSubmit'
import ConfirmSignUp from '../../components/Auth/ConfirmSignUp'

function AuthApp() {
  const [uiState, setUiState] = useState(null)
  const [formState, setFormState] = useState({
    email: '', password: '', authCode: ''
  })
  const { email, password, authCode } = formState
  useEffect(() => {
    checkUser()
  }, [])
  async function checkUser() {
    console.log('checking user...')
    try {
      setUiState('loading')
      await Auth.currentAuthenticatedUser()
      setUiState('signedIn')
    } catch(err) {
      setUiState('signIn')
    }
  }
  function onChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  async function signUp() {
    try {
      await Auth.signUp({ username: email, password, attributes: { email }})
      setUiState('confirmSignUp')
    } catch (err) { console.log({ err })}
  }
  async function confirmSignUp() {
    try {
      await await Auth.confirmSignUp(email, authCode)
      await Auth.signIn(email, password)
      setUiState('signedIn')
    } catch (err) { console.log({ err })}

  }
  async function signIn() {
    try {
      await Auth.signIn(email, password)
      setUiState('signedIn')
    } catch (err) { console.log({ err })}
  }
  async function forgotPassword() {
    try {
      await Auth.forgotPassword(email)
      setUiState('forgotPasswordSubmit')
    } catch (err) { console.log({ err}) }
  }
  async function forgotPasswordSubmit() {
    await Auth.forgotPasswordSubmit(email, authCode, password)
    setUiState('signIn')
  }
  return (
    <div className="">
        <div className="">
          <div className="">
            <div className="">
              <p className="">amplify</p>
            </div>
            <div className="">
              {
                !uiState || uiState === 'loading' && <p className="font-bold">Loading ...</p>
              }
              {
                uiState === 'signedIn' && (
                  <Portal
                    setUiState={setUiState}
                    onChange={onChange}
                  />
                )
              }
              {
                uiState === 'signUp' && (
                  <SignUp
                    setUiState={setUiState}
                    onChange={onChange}
                    signUp={signUp}
                  />
                )
              }
              {
                uiState === 'confirmSignUp' && (
                  <ConfirmSignUp
                    setUiState={setUiState}
                    onChange={onChange}
                    confirmSignUp={confirmSignUp}
                  />
                )
              }
              {
                uiState === 'signIn' && (
                  <SignIn
                    setUiState={setUiState}
                    onChange={onChange}
                    signIn={signIn}
                  />
                )
              }
              {
                uiState === 'forgotPassword' && (
                  <ForgotPassword 
                    setUiState={setUiState}
                    onChange={onChange}
                    forgotPassword={forgotPassword}
                  />
                )
              }
              {
                uiState === 'forgotPasswordSubmit' && (
                  <ForgotPasswordSubmit
                    setUiState={setUiState}
                    onChange={onChange}
                    forgotPasswordSubmit={forgotPasswordSubmit}
                  />
                )
              }
            </div>
          </div>
        </div>
    </div>
  );
}

export default AuthApp;
