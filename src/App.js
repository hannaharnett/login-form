import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <div>
                <div className="header">
                    <Nav className="justify-content-center nav" >
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="login">Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="dashboard">Dashboard</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <PublicRoute path="/login" component={Login} />
                        <PrivateRoute path="/dashboard" component={Dashboard} />
                    </Switch>
                </div>
            </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
