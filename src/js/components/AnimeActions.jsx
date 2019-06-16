// src/js/components/AnimeActions.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import { unfollow, update } from "../actions";

const mapStateToProps = (state) => {
    return {
        animes: state.animes
    };
};

class ConnectedAnimeActions extends Component {

    handleUnfollowClick = (event) => {
        event.preventDefault();
        this.props.unfollow([this.props.anime.id, 'anime']);
    }

    handleCheckClick = (event) => {
        event.preventDefault();
        this.props.update([this.props.anime.id, this.props.anime.release_number, 'anime']);
    }

    render() {

        return (
            <ul className="action_button">
                {this.props.anime.not_completed ? <li><i className="fa fa-times" aria-hidden="true" onClick={this.handleCheckClick} /></li> : <li><i className="fa fa-check" aria-hidden="true" /></li>}
                <li><i className="fa fa-link" aria-hidden="true" /></li>
                <li><i className="fa fa-trash" aria-hidden="true" onClick={this.handleUnfollowClick} /></li>
            </ul>
        );
    }
}

const AnimeActions = connect(mapStateToProps, {unfollow, update})(ConnectedAnimeActions);


export default AnimeActions;