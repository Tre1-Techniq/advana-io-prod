import React from 'react';
import PropTypes from "prop-types";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

// @material-ui/core components
//import { makeStyles } from "@material-ui/core/styles";

//const useStyles = makeStyles(styles);

//const classes = useStyles();

const FormSignup = (props) => {
    const { ...submitForm } = props;
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm,validate);

    return (
        <ThemeProvider theme={advanaTheme}>
            <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get Started with <span>ADVANA</span></h1>
                <p>Chart your path to hyper-growth</p>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        USERNAME
                    </label>
                    <input 
                        id="username"
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="create a username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        EMAIL
                    </label>
                    <input 
                        id="email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="enter your email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        PASSWORD
                    </label>
                    <input 
                        id="password"
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="create a password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <Button variant="contained" color="secondary" type="submit" className="form-input-btn">
                    SIGN UP
                </Button>
                <span className="form-input-login">
                    Alredy have an account? Login <a href="#">HERE</a>
                </span>
            </form>
        </div>
    </ThemeProvider>
        
    );
};

FormSignup.propTypes = {
    submitForm: PropTypes.func,
};

export default FormSignup
