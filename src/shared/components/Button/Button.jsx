import { Link } from 'react-router-dom';

import './Button.css';

const Button = (props) => {
    const className = `button button--${props.size || 'default'}${
        props.className && ` ${props.className}`
    }${props.danger ? ' button--danger' : ''}${
        props.inverse ? ' button--inverse' : ''
    }${props.disable ? ' button--disable' : ''}`;

    if (props.to) {
        return (
            <Link className={className} to={props.to} exact={`${props.exact}`}>
                {props.children}
            </Link>
        );
    } else if (props.href) {
        return (
            <a className={className} href={props.href}>
                {props.children}
            </a>
        );
    } else {
        return (
            <button
                className={className}
                type={props.type}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.children}
            </button>
        );
    }
};

export default Button;
