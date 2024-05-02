const defaultValue = {
    films: []
}

const ADD_WATCH_LATER_FILM = "ADD_WATCH_LATER_FILM"
const REMOVE_WATCH_LATER_FILM ="REMOVE_WATCH_LATER_FILM"

export const watchLaterFilmsReducer = (state = defaultValue, action) => {
    switch (action.type) {

        case ADD_WATCH_LATER_FILM:
            return {...state, films: [...state.films, action.payload]}
        case REMOVE_WATCH_LATER_FILM:
            return {...state, films: state.films.filter(film => film.id !== action.payload)}
        default: 
            return state
    }
}

export const addWatchLater = (payload) => ({type: ADD_WATCH_LATER_FILM, payload})
export const removeWatchLater = (payload) => ({type: REMOVE_WATCH_LATER_FILM, payload})