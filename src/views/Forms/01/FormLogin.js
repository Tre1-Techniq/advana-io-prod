import React, { useState } from 'react';
import { Auth } from "aws-amplify";
import "./Form.css";

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

// @material-ui/core components
//import { makeStyles } from "@material-ui/core/styles";

//const useStyles = makeStyles(styles);

//const classes = useStyles();

export default function FormLogin() {
    let [username, ] = useState("carlos");
    let [password, ] = useState("makani99!");

    let handleSubmit = async function (event) {
        event.preventDefault();
        let response = await Auth.signIn(username, password);
        console.log("Auth Response: ", response)
    };

    return (
        <ThemeProvider theme={advanaTheme}>
            <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get Started with <span>ADVANA</span></h1>
                <p>Chart your path to hyper-growth</p>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        USERNAME *
                    </label>
                    <input 
                        id="username"
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="enter your username"
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        PASSWORD *
                    </label>
                    <input 
                        id="password"
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="enter your password"
                    />
                </div>
                <Button variant="contained" color="secondary" type="submit" className="form-input-btn">
                    LOGIN
                </Button>
                <span className="form-input-login">
                    Alredy have an account? Login <a href="#">HERE</a>
                </span>
            </form>
        </div>
    </ThemeProvider>
        
    );
};
