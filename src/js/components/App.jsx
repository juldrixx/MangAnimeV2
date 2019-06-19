// src/js/components/App.jsx

import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { withCookies } from "react-cookie";
import Displayer from "./Displayer.jsx";
import AddForm from "./AddForm.jsx";
import HomeScreen from "./HomeScreen.jsx";
import LoginScreen from "./LoginScreen.jsx";
import Banner from "./Banner.jsx";

class App extends Component {
    
    render() {
        var routes  = (localStorage.getItem('username') === undefined || localStorage.getItem('username') === "") ? (
            <Fragment>
                <Redirect to="/Login" />
                <Route  component={LoginScreen} /> 
            </Fragment>
        ) : (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />

                    <Route exact path="/Manga" render={ () => (
                        <Fragment>
                            <Banner type="manga" />
                            <div className="container_display">
                                <AddForm type="manga" user={localStorage.getItem('username')} />
                                <Displayer type="manga" user={localStorage.getItem('username')} />
                            </div>
                        </Fragment>
                    )} />

                    <Route exact path="/Anime" render={ () => (
                        <Fragment>
                            <Banner type="anime" />
                            <div className="container_display">
                                <AddForm type="anime" user={localStorage.getItem('username')} />
                                <Displayer type="anime" user={localStorage.getItem('username')} />
                            </div>
                        </Fragment>
                    )} />

                    <Redirect from="/Login" to="/" />

                    <Route exact component={HomeScreen} />
                </Switch>
            </Fragment>
        );
        return (
            <div className="container">
                {routes}
            </div>
        );        
    }
}

export default withCookies(App);