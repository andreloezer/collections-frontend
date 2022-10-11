import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
    useEffect(() => {
        document.title = 'Collections App';
    });

    return (
        <main className="home">
            <h1>Catalog Your Collections </h1>
            <p>
                Create dynamics catalogs for all your collections with texts,
                numbers, images and bools.
            </p>
            <Link className="button-like" to="/auth">
                Start now!
            </Link>
        </main>
    );
};

export default Home;
