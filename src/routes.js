/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

import {
    Switch,
    Route,
} from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

export default function MainRoutes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/login">
                <Login />
            </Route>

            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    );
}