import { Link } from 'react-router-dom';

import './Brand.css';

const Brand = () => {
    return (
        <div className="brand">
            <Link to="/">
                {/* <img alt='App brand'></img> */}
                <span>Collections App</span>
            </Link>
        </div>
    );
};

export default Brand;
