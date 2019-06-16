import { takeEvery, call, put, all } from "redux-saga/effects";
import { GET_MANGA, API_ERRORED, MANGA_LOADED, GET_ANIME, ANIME_LOADED, UNFOLLOW, UNFOLLOW_SUCCEEDED, UPDATE, UPDATE_SUCCEEDED, ADD, ADDED, ADD_ERRORED } from "../constants/action-types";

export default function* watcherGetManga() {
    yield all([
        takeEvery(GET_MANGA, workerGetManga),
        takeEvery(GET_ANIME, workerGetAnime),
        takeEvery(UNFOLLOW, workerUnfollow),
        takeEvery(UPDATE, workerUpdate),
        takeEvery(ADD, workerAdd),
    ]);
}

function* workerGetManga(action) {  
    try {
        const payload = yield call(getManga, action.payload);
        yield put({ type: MANGA_LOADED, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}

function getManga(payload) {
    return fetch("http://localhost:9000/api/get/manga/" + payload).then(response =>
        response.json()
    );
}

function* workerGetAnime(action) {
    try {
        const payload = yield call(getAnime, action.payload);
        yield put({ type: ANIME_LOADED, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}

function getAnime(payload) {
    return fetch("http://localhost:9000/api/get/anime/" + payload).then(response =>
        response.json()
    );
}

function* workerUnfollow(action) {
    try {
        yield call(unfollow, action.payload[0]);        
        const payload = action.payload;
        yield put({ type: UNFOLLOW_SUCCEEDED, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}

function unfollow(payload) {
    return fetch("http://localhost:9000/api/unfollow/" + payload).then(response =>
        response.json()
    );
}

function* workerUpdate(action) {
    try {
        const mediaUpdated = yield call(update, [action.payload[0], action.payload[1]]);        
        const payload = [mediaUpdated, action.payload[2]];
        yield put({ type: UPDATE_SUCCEEDED, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}

function update(payload) {
    return fetch("http://localhost:9000/api/update/" + payload[0] + "/" + payload[1]).then(response =>
        response.json()
    );
}

function* workerAdd(action) {
    try {
        const newMedia = yield call(add, action.payload);    
        const type_media = action.payload[0];    
        const payload = [newMedia, type_media];
        yield put({ type: ADDED, payload });
    } catch (e) {
        yield put({ type: ADD_ERRORED, payload: e });
    }
}

function add(payload) {
    const post = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'type': payload[0],
            'username': payload[1],
            'rss': payload[2],
        }),
    }
    return fetch("http://localhost:9000/api/add/", post).then(response =>
        response.json()
    )
}