import React from 'react';
import FormLogin from './FormLogin';
import "./Form.css";
import imgLeft from "../../assets/img/forms/img-2.svg";

const Form = () => {
    return (
        <>
            <div className="form-container">
                <span className="close-btn">
                    X
                </span>
                <div className="form-content-left">
                    <img src={imgLeft} alt="spaceship" className="form-img" />
                </div>
                <FormLogin />
            </div>
        </>
    )
}

export default Form
