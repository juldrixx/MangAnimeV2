// src/js/components/MangaActions.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteManga } from "../actions";

const mapDisptachToProps = (dispatch) => {
    return {
        deleteManga: id => dispatch(deleteManga(id))
    };
}

class ConnectedMangaActions extends Component {

    handleDeleteClick = () => {
        this.props.deleteManga(this.props.manga.id);
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

const MangaActions = connect(null, mapDisptachToProps)(ConnectedMangaActions);


export default MangaActions;