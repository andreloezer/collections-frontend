import Navigation from '../Navigation/Navigation';
import Brand from './Brand/Brand';
import './Header.css';

const Header = () => {
    return (
        <header className="header-main">
            <Brand />
            <Navigation />
        </header>
    );
};

export default Header;
