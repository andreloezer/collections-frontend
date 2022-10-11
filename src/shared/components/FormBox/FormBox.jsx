import { useReducer, useCallback, useEffect } from 'react';

import Input from '../Input/Input';
import './FormBox.css';

// Reducer function
const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value,
                        isValid: action.isValid,
                    },
                },
                isValid: formIsValid,
            };
        default:
            return state;
    }
};

const FormBox = (props) => {
    const { inputs, header, footer, onChange } = props;

    // Setup state
    const initialState = {
        inputs: {},
        isValid: false,
    };
    inputs.forEach((input) => {
        return (initialState.inputs[input.inputId] = {
            value: '',
            isValid: input === 'checkbox' ? true : false,
        });
    });
    const [formState, dispatch] = useReducer(formReducer, initialState);

    // Forward form validity to parent
    useEffect(() => {
        if (onChange) {
            onChange(formState.isValid);
        }
    }, [formState.isValid, onChange]);

    // Input change updates form state
    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            inputId: id,
            value: value,
            isValid: isValid,
        });
    }, []);

    // Create input elements
    let inputList = [];
    for (const [index, input] of inputs.entries()) {
        inputList.push(
            <Input
                className={input.className}
                key={index}
                name={input.name}
                type={input.type ?? input.name}
                label={input.label}
                displayValue={input.displayValue}
                inputId={input.inputId}
                options={input.options}
                checked={input.type === 'checkbox' ? input.checked : undefined}
                value={input.value}
                validators={input.validators}
                errorMessage={input.errorMessage}
                inline={input.inline}
                onInput={inputHandler}
            />
        );
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // Only submit is form is valid
        if (!formState.isValid) {
            // DISPLAY SOME ERROR MESSAGE
            return;
        }
        const formData = {};

        // Extract usable data
        for (const [key, value] of Object.entries(formState.inputs)) {
            formData[key] = value.value;
        }
        props.onSubmit(formData);
    };

    return (
        <form
            className={`form-box ${props.className}`}
            onSubmit={submitHandler}
        >
            <header className="form-box__header">
                <h2>{header}</h2>
            </header>
            <section className="form-box__main">{inputList}</section>
            <footer className="form-box__footer">{footer}</footer>
        </form>
    );
};

export default FormBox;
