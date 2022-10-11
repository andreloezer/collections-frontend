import { useReducer, useEffect, memo } from 'react';

import Label from './Label';
import Option from './Option';
import { toCapitalize } from '../../util/capitalize';
import { validate } from '../../util/validators';
import './Input.css';

// Reducer
const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.value,
                isValid: validate(action.value, action.validators),
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true,
            };
        case 'TOGGLE':
            return {
                ...state,
                isChecked: action.value,
            };
        default:
            return state;
    }
};

const Input = memo((props) => {
    const {
        type,
        name,
        rows,
        options,
        label,
        min,
        max,
        inputId,
        onInput,
        validators,
    } = props;

    // Get input value
    let inputValue = props.value ?? '';
    let inputChecked = props.checked ?? false;

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '',
        isChecked: false,
        isTouched: false,
        isValid: type === 'checkbox' ? true : false,
    });

    // Update input value on re-render
    useEffect(() => {
        if (type === 'checkbox') {
            dispatch({
                type: 'TOGGLE',
                value: inputChecked,
            });
        } else {
            dispatch({
                type: 'CHANGE',
                value: inputValue,
                validators: validators,
            });
        }
    }, [type, inputValue, inputChecked]);

    // Forward value to parent
    useEffect(() => {
        if (!onInput) {
            return;
        }
        if (type === 'checkbox') {
            onInput(inputId, inputState.isChecked, inputState.isValid);
        } else {
            onInput(inputId, inputState.value, inputState.isValid);
        }
    }, [inputState, onInput, inputId, type]);

    // Update input value
    const changeHandler = (event) => {
        dispatch({
            type: 'CHANGE',
            value: event.target.value,
            validators: validators,
        });
    };

    // Toggle checkbox
    const toggleHandler = (event) => {
        if (props.onChange) {
            props.onChange(event);
        }
        dispatch({
            type: 'TOGGLE',
            value: event.target.checked,
        });
    };

    // Mark input as touched
    const touchHandler = () => {
        if (inputState.isTouched) {
            return;
        }

        dispatch({
            type: 'TOUCH',
        });
    };

    // Define input element
    let inputElement;

    switch (type) {
        case 'text':
        case 'email':
        case 'password':
            inputElement = (
                <input
                    className="input-text"
                    name={name}
                    type={type}
                    placeholder={toCapitalize(name)}
                    value={inputState.value}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                />
            );
            break;
        case 'number':
            inputElement = (
                <input
                    className="input-number"
                    name={name}
                    type="number"
                    placeholder={toCapitalize(name)}
                    min={min}
                    max={max}
                    value={inputState.value}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                />
            );
            break;
        case 'textarea':
            inputElement = (
                <textarea
                    className="textarea"
                    name={name}
                    rows={rows ?? '4'}
                    placeholder={toCapitalize(name)}
                    value={inputState.value}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                />
            );
            break;
        case 'checkbox':
            inputElement = (
                <input
                    name={name}
                    type="checkbox"
                    checked={inputState.isChecked}
                    onChange={toggleHandler}
                />
            );
            break;
        case 'select':
            const optionsElements = options.map((option, index) => {
                return <Option key={index} value={option} />;
            });

            inputElement = (
                <select
                    className="select"
                    name={name}
                    defaultValue={inputState.value}
                    onChange={changeHandler}
                >
                    {optionsElements}
                </select>
            );
            break;
        default:
            break;
    }

    return (
        <Label
            className={`form-control ${
                props.inline && 'form-control--inline'
            } ${
                !inputState.isValid &&
                inputState.isTouched &&
                'form-control--invalid'
            }`}
            title={name}
        >
            {label && <span className="label">{label}</span>}
            {inputElement}
            {!inputState.isValid && inputState.isTouched && (
                <span className="error">{props.errorMessage}</span>
            )}
        </Label>
    );
});

export default Input;
