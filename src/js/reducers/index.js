import { MANGA_LOADED, ANIME_LOADED, UNFOLLOW_SUCCEEDED, UPDATE_SUCCEEDED, ADDED, ADD_ERRORED, ADD_ERROR_CLEARED} from "../constants/action-types";

const initialState = {
    mangas: [],
    animes: [],
    error_add: false
};

function rootReducer(state = initialState, action) {
    if (action.type === MANGA_LOADED) {
        return Object.assign({}, state, {
            mangas: state.mangas.concat(action.payload)
        });
    }

    if (action.type === ANIME_LOADED) {
        return Object.assign({}, state, {
            animes: state.animes.concat(action.payload)
        });
    }

    if (action.type === UNFOLLOW_SUCCEEDED) {
        if (action.payload[1] === 'manga') {
            let newMangas = state.mangas.filter(manga => {
                return action.payload[0] !== manga.id;
            });

            return {
                ...state,
                mangas: newMangas
            };
        }
        else if (action.payload[1] === 'anime') {
            let newAnimes = state.animes.filter(anime => {
                return action.payload[0] !== anime.id;
            });
            
            return {
                ...state,
                animes: newAnimes
            };
        }
    }

    if (action.type === UPDATE_SUCCEEDED) {
        if (action.payload[1] === 'manga') {
            let newMangas = state.mangas.map(manga => {
                if(manga.id !== action.payload[0].id){
                    return manga;
                }
                else {
                    return action.payload[0];
                }
            });
            return {
                ...state,
                mangas: newMangas
            };
        }
        else if (action.payload[1] === 'anime') {
            let newAnimes = state.animes.map(anime => {
                if(anime.id !== action.payload[0].id){
                    return anime;
                }
                else {
                    return action.payload[0];
                }
            });
            
            return {
                ...state,
                animes: newAnimes
            };
        }
    }

    if (action.type === ADDED) {
        if (action.payload[1] === 'manga') {
            return Object.assign({}, state, {
                mangas: state.mangas.concat(action.payload[0])
            });
        }
        else if (action.payload[1] === 'anime') {
            return Object.assign({}, state, {
                animes: state.animes.concat(action.payload[0])
            });
        }
    }

    if(action.type === ADD_ERRORED) {
        return {
            ...state,
            error_add: true
        };
    }

    if(action.type === ADD_ERROR_CLEARED) {
        return {
            ...state,
            error_add: false
        };
    }

    return state;
}

export default rootReducer;
