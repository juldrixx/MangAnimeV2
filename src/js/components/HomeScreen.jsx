// src/js/components/HomeScreen.jsx

import React, { Component } from 'react';
import { connect } from "react-redux";
import manga_preview_img from '../../img/manga.png';
import anime_preview_img from '../../img/anime.jpg';
import "../../css/preview.scss";
import { logout } from "../actions";


class Navbar extends Component {

    handleClick = (event) => {
        event.preventDefault();
        this.props.logout();
    }

    render() {
        return (
            <div id="preview">
                <a href="/Manga">
                    <div id="manga_preview">
                        <h1>Manga</h1>
                        <img src={manga_preview_img} alt="manga preview"></img>      
                        <div className="preview_cover"></div>          
                    </div>
                </a>
                <a href="/Anime">
                    <div id="anime_preview">
                        <h1>Anime</h1>
                        <img src={anime_preview_img} alt="anime preview"></img>
                        <div className="preview_cover"></div>  
                    </div>
                </a>
                <a href="/" className="disconnection fa fa-times-circle" onClick={this.handleClick}>{null}</a>
            </div>        
        );
    }    
}

export default connect(null, { logout })(Navbar);