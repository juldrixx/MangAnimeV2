import React from 'react';
import manga_preview_img from '../../img/manga.jpg';
import anime_preview_img from '../../img/anime.png';
import "../../css/preview.scss";


const Navbar = (props) => {
    console.log(props);
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
        </div>        
    )
}

export default Navbar;