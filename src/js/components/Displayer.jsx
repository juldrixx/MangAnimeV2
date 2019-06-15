// src/js/compoents/Displayer.jsx

import React from 'react';
import AnimesList from './AnimesList';
import MangasList from './MangasList';
import '../../css/displayer.scss';

const Displayer = (props) => (
    <table className="table table-hover table-dark">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Date de la dernière sortie</th>
                <th scope="col">{props.type === 'anime' ? "Anime" : props.type === 'manga' && 'Manga'}</th>
                <th scope="col">Dernier {props.type === 'anime' ? "épisode vu" : props.type === 'manga' && 'chapitre lu'}</th>
                <th scope="col">Dernier {props.type === 'anime' ? "épisode sorti" : props.type === 'manga' && 'chapitre sorti'}</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {props.type === 'anime' ? <AnimesList /> : props.type === 'manga' && <MangasList />}
        </tbody>
    </table>    
);

export default Displayer;