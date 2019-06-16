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
        return (
            this.props.mangas.map(manga => (
                <Manga key={manga.id} manga={manga} />
            ))
        );
    }
}

const MangasList = connect(mapStateToProps, {getManga})(ConnectedMangasList);

export default MangasList;