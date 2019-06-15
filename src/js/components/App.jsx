// src/js/components/App.jsx
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Displayer from "./Displayer.jsx";
import AddForm from "./AddForm.jsx";
import Navbar from "./Navbar.jsx";

const App = () => (
    <BrowserRouter>
        <div className="container">
            <Route exact path="/" component={Navbar} />
            <Route path="/Manga" render={ () => (
                <div className="container_display">
                    <AddForm type="manga" />
                    <Displayer type="manga" />
                </div>                
            )}/>
            <Route path="/Anime" render={ () => (
                <div className="container_display">
                    <AddForm type="anime" />
                    <Displayer type="anime" />
                </div>               
            )}/>

        </div>
    </BrowserRouter>
);

export default App;