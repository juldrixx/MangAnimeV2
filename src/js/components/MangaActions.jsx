// src/js/components/MangaActions.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import { unfollow, update } from "../actions";

const mapStateToProps = (state) => {
    return {
        mangas: state.mangas        
    };
};

class ConnectedMangaActions extends Component {

    handleUnfollowClick = (event) => {
        event.preventDefault();
        this.props.unfollow([this.props.manga.id, 'manga']);
    }

    handleCheckClick = (event) => {
        event.preventDefault();
        this.props.update([this.props.manga.id, this.props.manga.release_number, 'manga']);
    }

    render() {
        return (
            <ul className="action_button">
                {this.props.manga.not_completed ? <li><i className="fa fa-times" aria-hidden="true" onClick={this.handleCheckClick} /></li> : <li><i className="fa fa-check" aria-hidden="true" /></li>}
                <li><i className="fa fa-link" aria-hidden="true" /></li>
                <li><i className="fa fa-trash" aria-hidden="true" onClick={this.handleUnfollowClick} /></li>
            </ul>
        );
    }
}

const MangaActions = connect(mapStateToProps, {unfollow, update})(ConnectedMangaActions);


export default MangaActions;