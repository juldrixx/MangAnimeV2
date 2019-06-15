// src/js/components/App.jsx

import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withCookies } from "react-cookie";
import Displayer from "./Displayer.jsx";
import AddForm from "./AddForm.jsx";
import HomeScreen from "./HomeScreen.jsx";
import LoginScreen from "./LoginScreen.jsx";
import Banner from "./Banner.jsx";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Route exact path="/" render={ () => (this.props.cookies.get('username') === undefined || this.props.cookies.get('username') === "" ? <LoginScreen cookies={this.props.cookies}/> : <HomeScreen cookies={this.props.cookies}/>)} />
                
                <Route path="/Manga" render={ () => (
                    <Banner type="manga" />
                )}/>
                <Route path="/Anime" render={ () => (
                    <Banner type="anime" />
                )}/>
                
                <Route path="/Manga" render={ () => (
                    <div className="container_display">
                        <AddForm type="manga" user={this.props.cookies.get('username')} />
                        <Displayer type="manga" user={this.props.cookies.get('username')} />
                    </div>                
                )}/>
                <Route path="/Anime" render={ () => (
                    <div className="container_display">
                        <AddForm type="anime" user={this.props.cookies.get('username')} />
                        <Displayer type="anime" user={this.props.cookies.get('username')} />
                    </div>               
                )}/>
            </div>
        );        
    }
}

export default withCookies(App);