// src/js/actions/index.js

import {UNFOLLOW, GET_MANGA, GET_ANIME, UPDATE, ADD, ADD_ERROR_CLEARED } from "../constants/action-types";

export function unfollow(payload) {
    return { type: UNFOLLOW, payload };
}

export function getManga(payload) {
    return { type: GET_MANGA, payload };
}

export function getAnime(payload) {
    return { type: GET_ANIME, payload };
}

export function update(payload) {
    return { type: UPDATE, payload };
}

export function add(payload) {
    return { type: ADD, payload };
}

export function clearErrorAdd() {
    return { type: ADD_ERROR_CLEARED };
}