import React, { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Collections from './pages/Collections/Collections';
import NewCollection from './pages/NewCollection/NewCollection';
import Collection from './pages/Collection/Collection';
import NotFound from './pages/NotFound/NotFound';
import { AuthContext } from './shared/context/auth-context';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    let routes;
    if (isLoggedIn) {
        routes = (
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route
                    exact
                    path="/collections"
                    element={<Collections />}
                ></Route>
                <Route
                    exact
                    path="/collection/new"
                    element={<NewCollection />}
                ></Route>
                <Route
                    exact
                    path="/collection/:id"
                    element={<Collection />}
                ></Route>
                <Route
                    exact
                    path="/collection/edit/:id"
                    element={<NewCollection />}
                ></Route>

                <Route
                    exact
                    path="auth"
                    element={<Home replace to="/" />}
                ></Route>
                <Route exact path="*" element={<NotFound />}></Route>
            </Routes>
        );
    } else {
        routes = (
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="auth" element={<Auth />}></Route>
                <Route path="*" element={<Auth replace to="/auth" />}></Route>
            </Routes>
        );
    }

    return (
        <AuthContext.Provider
            value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
        >
            <Header />
            {routes}
            <Footer />
        </AuthContext.Provider>
    );
}

export default App;
