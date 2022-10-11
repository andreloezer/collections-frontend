import { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../shared/context/auth-context';
import './Navigation.css';

const Navigation = (props) => {
    const auth = useContext(AuthContext);

    const logoutHandler = () => {
        auth.logout();
    };
    return (
        <nav className="nav-menu">
            <ul>
                {auth.isLoggedIn && (
                    <li>
                        <NavLink to="/collections">Collections</NavLink>
                    </li>
                )}
                {auth.isLoggedIn && (
                    <li>
                        <NavLink to="/user">User</NavLink>
                    </li>
                )}
                {auth.isLoggedIn && (
                    <li>
                        <button onClick={logoutHandler}>Logout</button>
                    </li>
                )}
                {!auth.isLoggedIn && (
                    <li>
                        <NavLink to="/auth">Auth</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
