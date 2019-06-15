import { ADD_MANGA, ADD_ANIME, DELETE_ANIME, DELETE_MANGA } from "../constants/action-types";

const initialState = {
  mangas: [],
  animes: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_MANGA) {
    return Object.assign({}, state, {
      mangas: state.mangas.concat(action.payload)
    });
  }

  if (action.type === ADD_ANIME) {
    return Object.assign({}, state, {
      animes: state.animes.concat(action.payload)
    });
  }

  if (action.type === DELETE_ANIME) {
    let newAnimes = state.animes.filter(anime => {
      return action.payload !== anime.id;
    });
    
    return {
      ...state,
      animes: newAnimes
    };
  }

  if (action.type === DELETE_MANGA) {
    let newMangas = state.animes.filter(manga => {
      return action.payload !== manga.id;
    });
    
    return {
      ...state,
      mangas: newMangas
    };
  }

  return state;
}

export default rootReducer;
