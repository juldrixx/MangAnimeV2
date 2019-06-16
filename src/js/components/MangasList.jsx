// src/js/components/MangasList.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/ItemList.scss";
import Manga from "./Manga";
import { getManga } from "../actions";

const mapStateToProps = (state) => {
    return {
        mangas: state.mangas        
    };
};

class ConnectedMangasList extends Component {

    componentDidMount() {
        this.props.getManga(this.props.username);
    }

    render() {
        const {mangas} = this.props;
        mangas.sort(function (a, b) {
            return (a.not_completed === b.not_completed) ? 0 : a.not_completed ? -1 : 1;
        });
        return (
            mangas.map(manga => (
                <Manga key={manga.id} manga={manga} />
            ))
        );
    }
}

const MangasList = connect(mapStateToProps, {getManga})(ConnectedMangasList);

export default MangasList;