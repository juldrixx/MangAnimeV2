import { MANGA_LOADED, ANIME_LOADED, UNFOLLOW_SUCCEEDED, UPDATE_SUCCEEDED, ADDED, ADD_ERRORED, ADD_ERROR_CLEARED, LOGOUT, LOGIN} from "../constants/action-types";

const initialState = {
    mangas: [],
    animes: [],
    username: localStorage.getItem('username'),
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
			const manga = state.mangas.filter(manga => {
				if(manga.id === action.payload[0][0].id) {
					return manga;
				}
			});
			
			if (manga.length === 0)  {
				return Object.assign({}, state, {
					mangas: state.mangas.concat(action.payload[0])
				});
			}
        }
        else if (action.payload[1] === 'anime') {			
			const anime = state.animes.filter(anime => {
				if(anime.id === action.payload[0][0].id) {
					return anime;
				}
			});
			
			if (anime.length === 0)  {
				return Object.assign({}, state, {
					animes: state.animes.concat(action.payload[0])
				});
			}
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

    if(action.type === LOGIN) {
        localStorage.setItem('username', action.payload);
        return {
            ...state,
            username: action.payload
        }
    }

    if(action.type === LOGOUT) {
        localStorage.removeItem('username');
        return {
            ...state,
            username: ""
        }
    }

    return state;
}

export default rootReducer;
