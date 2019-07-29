// src/js/components/App.jsx

import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";
import Displayer from "./Displayer.jsx";
import AddForm from "./AddForm.jsx";
import HomeScreen from "./HomeScreen.jsx";
import LoginScreen from "./LoginScreen.jsx";
import Banner from "./Banner.jsx";

class App extends Component {
    render() {
        var routes  = (this.props.username === undefined || this.props.username === "" || this.props.username === null) ? (
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
                                <AddForm type="manga" />
                                <Displayer type="manga" />
                            </div>
                        </Fragment>
                    )} />

                    <Route exact path="/Anime" render={ () => (
                        <Fragment>
                            <Banner type="anime" />
                            <div className="container_display">
                                <AddForm type="anime" />
                                <Displayer type="anime" />
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

const mapStateToProps = (state) => {
    console.log('a', state)
    return {
        username: state.username        
    };
};


export default connect(mapStateToProps, null)(withCookies(App));