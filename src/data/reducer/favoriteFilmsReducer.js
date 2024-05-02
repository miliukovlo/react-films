const defaultValue = {
    films: []
}

const ADD_FAVORITE_FILM = "ADD_FAVORITE_FILM"
const REMOVE_FAVORITE_FILM ="REMOVE_FAVORITE_FILM"

export const favoriteFilmsReducer = (state = defaultValue, action) => {
    switch (action.type) {

        case ADD_FAVORITE_FILM:
            return {...state, films: [...state.films, action.payload]}
        case REMOVE_FAVORITE_FILM:
            return {...state, films: state.films.filter(film => film.id !== action.payload)}
        default: 
            return state
    }
}

export const addFavoriteFilm = (payload) => ({type: ADD_FAVORITE_FILM, payload})
export const removeFavoriteFilm = (payload) => ({type: REMOVE_FAVORITE_FILM, payload})