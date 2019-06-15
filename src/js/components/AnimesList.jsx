// src/js/components/AnimesList.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/ItemList.scss";
import AnimeActions from "./AnimeActions";

const mapStateToProps = (state) => {
    return {
        animes: state.animes        
    };
};

class ConnectedAnimesList extends Component {

    render() {
        return (
            this.props.animes.map(anime => (
                <tr key={anime.id}>
                    <td></td>
                    <td>{anime.rss_url}</td>
                    <td>{anime.rss_url}</td>
                    <td>{anime.rss_url}</td>
                    <td>{anime.rss_url}</td>
                    <td>
                        <AnimeActions anime={anime} />
                    </td>                    
                </tr>
            ))
        );
    }
}

const AnimesList = connect(mapStateToProps)(ConnectedAnimesList);

export default AnimesList;