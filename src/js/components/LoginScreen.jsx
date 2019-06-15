// src/js/components/LoginScreen.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import '../../css/loginscreen.scss'


const mapStateToProps = (state, ownProps) => {
    return ({
        state: state,
        cookies: ownProps.cookies
    });
};

class ConnectedLoginScreen extends Component {

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {username} = this.state;
        const {cookies} = this.props;
        cookies.set('username', username);
        this.setState({username: ""});
    }

    constructor() {
        super();
        this.state = {
            username: ""
        };
    }

    render() {
        const {username} = this.state;
        return (
            <div className="container_login">
                <div className="login_form">
                    <div id="title" className="w-100 text-white">
                        <h1>Bon retour parmi nous !</h1>
                        <h2>Veuillez indiquer votre nom d'utilisateur</h2>
                    </div>
                    <form id="username_input" className="col-md-12 nopadding" onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={this.handleChange}
                                placeholder="Nom d'utilisateur"
                                aria-label="Nom d'utilisateur"
                                aria-describedby="basic-addon2"
                            />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="submit">Valider</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const LoginScreen = connect(mapStateToProps)(ConnectedLoginScreen)

export default LoginScreen;