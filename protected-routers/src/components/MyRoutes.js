import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Public from './Public';
import Login from './Login';
import Protected from './Protected';
import SignOut from './SignOut';

function MyRoutes () {
    return(
        <Router>
            <div>
                <SignOut/>
                <ul>
                    <li><Link to="/public">Public Page</Link></li>
                    <li><Link to="/protected">Protected Page</Link></li>
                </ul>
                <Route path="/public" component={Public}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/protected" component={Protected} />
            </div>
        </Router>
    )
}

export default MyRoutes;