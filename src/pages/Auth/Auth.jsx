import React, { useState, useContext } from 'react';

import FormBox from '../../shared/components/FormBox/FormBox';
import Button from '../../shared/components/Button/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import { AuthContext } from '../../shared/context/auth-context';
import './Auth.css';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [isFormValid, setIsFormValid] = useState(false);

    const toggleAuthModeHandler = () => {
        setIsLoginMode((prevMode) => !prevMode);
    };

    const checkFormValidity = (validity) => {
        console.log(validity);
        setIsFormValid((prevState) => validity);
    };

    // Create inputs
    const inputs = [
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            inputId: 'email',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()],
            errorMessage: 'Please enter a valid email.',
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            inputId: 'password',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)],
            errorMessage: 'Please enter a valid password.',
        },
    ];

    if (!isLoginMode) {
        inputs.unshift({
            name: 'name',
            label: 'Your Name',
            type: 'text',
            inputId: 'name',
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)],
            errorMessage: 'Please enter a valid name.',
        });
    }

    const footer = (
        <React.Fragment>
            <Button
                inverse
                className="button-like"
                onClick={toggleAuthModeHandler}
                type="button"
            >
                SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
            </Button>
            <Button
                disable={!isFormValid}
                className="button-like"
                type="submit"
            >
                {isLoginMode ? 'LOGIN' : 'SIGNUP'}
            </Button>
        </React.Fragment>
    );

    const authSubmitHandler = (event) => {
        auth.login();
    };

    return (
        <main className="auth">
            <FormBox
                className="auth-form"
                header={isLoginMode ? 'Log In' : 'Sign Up'}
                footer={footer}
                inputs={inputs}
                onChange={checkFormValidity}
                onSubmit={authSubmitHandler}
            />
        </main>
    );
};

export default Auth;
