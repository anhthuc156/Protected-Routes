import React from 'react';
import { Redirect } from 'react-router-dom';

import fakeAuth from '../mockApi';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            redirectRef: false
        }
    }

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState(() => ({
                redirectRef: true
            }))
        })
    }
    render() {
        
        let { from } = this.props.location.state || { from: { pathname: '/' } };
        let { redirectRef } = this.state;
        debugger
        if (redirectRef === true) {
            return (
                <Redirect to={from} />
            )
        }

        return (
            <div>
                <p>You must log in to view the page</p>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}

export default Login;