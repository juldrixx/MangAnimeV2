// src/js/actions/index.js

import { ADD_MANGA, ADD_ANIME, DELETE_ANIME, DELETE_MANGA } from "../constants/action-types";


export function addAnime(payload) {
    return { type: ADD_ANIME, payload };
}

export function addManga(payload) {
    return { type: ADD_MANGA, payload };
}

export function deleteAnime(payload) {
    return { type: DELETE_ANIME, payload };
}

export function deleteManga(payload) {
  return { type: DELETE_MANGA, payload };
}