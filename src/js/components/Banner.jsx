// src/js/components/Banner.jsx

import React from 'react'
import { Component } from "react";
import ReactPlayer from "react-player";
import bannerVideo from "../../video/banner.mp4"
import "../../css/banner.scss"

class Banner extends Component {
    
    render() {
        return (
            <div className="banner">
                <div className="overlay"></div>
                <ReactPlayer
                    className="react-player"
                    width='auto'
                    height='auto'
                    url={bannerVideo}
                    playing
                    muted
                    loop
                />
                <a href="/" className="return fa fa-angle-left" onClick={this.handleClick}>{null}</a>
                <h1 className="title_type">Mes {this.props.type === "anime" ? "Animes" : this.props.type === "manga" && "Mangas"}</h1>
            </div>
        );
    }
}

export default Banner;