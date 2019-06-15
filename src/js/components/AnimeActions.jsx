// src/js/components/AnimeActions.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteAnime } from "../actions";

const mapDisptachToProps = (dispatch) => {
    return {
        deleteAnime: id => dispatch(deleteAnime(id))
    };
}

class ConnectedAnimeActions extends Component {

    handleDeleteClick = () => {
        this.props.deleteAnime(this.props.anime.id);
    }

    render() {
        return (
            <ul className="action_button">
                <li><i className="fa fa-check" aria-hidden="true" /></li>
                <li><i className="fa fa-times" aria-hidden="true" /></li>
                <li><i className="fa fa-link" aria-hidden="true" /></li>
                <li><i className="fa fa-trash" aria-hidden="true" onClick={this.handleDeleteClick} /></li>
            </ul>
        );
    }
}

const AnimeActions = connect(null, mapDisptachToProps)(ConnectedAnimeActions);


export default AnimeActions;