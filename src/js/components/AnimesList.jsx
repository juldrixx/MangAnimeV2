// src/js/components/AnimesList.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/ItemList.scss";
import Anime from "./Anime";
import { getAnime } from "../actions";

const mapStateToProps = (state) => {
    return {
        animes: state.animes
    };
};

class ConnectedAnimesList extends Component {

    componentDidMount() {
        this.props.getAnime(this.props.username);
    }

    render() {
        return (
            this.props.animes.map(anime => (
                <Anime key={anime.id} anime={anime} />
            ))
        );
    }
}

const AnimesList = connect(mapStateToProps, {getAnime})(ConnectedAnimesList);

export default AnimesList;