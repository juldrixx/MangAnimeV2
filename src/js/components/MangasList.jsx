// src/js/components/MangasList.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/ItemList.scss";
import MangaActions from "./MangaActions";

const mapStateToProps = (state) => {
    return {
        mangas: state.mangas        
    };
};

class ConnectedMangasList extends Component {

    render() {
        return (
            this.props.mangas.map(manga => (
                <tr key={manga.id}>
                    <td></td>
                    <td>{manga.rss_url}</td>
                    <td>{manga.rss_url}</td>
                    <td>{manga.rss_url}</td>
                    <td>{manga.rss_url}</td>
                    <td>
                        <MangaActions manga={manga} />
                    </td>                    
                </tr>
            ))
        );
    }
}

const MangasList = connect(mapStateToProps)(ConnectedMangasList);

export default MangasList;