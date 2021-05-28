import React from 'react';
import PropTypes from "prop-types";

import { Auth } from 'aws-amplify';
import { FaEnvelope } from 'react-icons/fa';
import AmplifyOrange from '../../../assets/img/amplifyorange.png';

function Buttons(props) {
  return (
    <div>
      <div style={styles.container}>
        <button
          style={{ ...styles.button, ...styles.hostedUI }}
          onClick={() => Auth.federatedSignIn()}
        >
          <img
            alt='Amplify'
            src={AmplifyOrange}
            style={styles.icon}
          />
          <p style={{...styles.text, ...styles.orangeText}}>Sign in with Hosted UI</p>
        </button>
        <button
          style={{ ...styles.button, ...styles.email }}
          onClick={() => props.updateFormState('email')}
        >
          <FaEnvelope color='white' />
          <p style={{...styles.text}}>Sign in with Email</p>
        </button>
      </div>
    </div>
  );
};

Buttons.propTypes = {
    updateFormState: PropTypes.func,
};

const styles = {
  container: {
    height: '80vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  button: {
    width: '100%', 
    maxWidth: 250,
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0px 16px',
    borderRadius: 2,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, .3)',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    minHeight: 40
  },
  facebook: {
    backgroundColor: "#3b5998"
  },
  email: {
    backgroundColor: '#db4437'
  },
  checkAuth: {
    backgroundColor: '#02bd7e'
  },
  hostedUI: {
    backgroundColor: 'rgba(0, 0, 0, .6)'
  },
  signOut: {
    backgroundColor: 'black'
  },
  withAuthenticator: {
    backgroundColor: '#FF9900'
  },
  icon: {
    height: 16,
    marginLeft: -1
  },
  text: {
    color: 'white',
    fontSize: 14,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  blackText: {
    color: 'black'
  },
  grayText: {
    color: 'rgba(0, 0, 0, .75)'
  },
  orangeText: {
    color: '#FF9900'
  }
}

export default Buttons
