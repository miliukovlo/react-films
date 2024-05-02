import { combineReducers, createStore } from "redux";
import { favoriteFilmsReducer } from './favoriteFilmsReducer';
import { watchLaterFilmsReducer } from "./watchLaterFilmsReducer";
import { commentReducer } from "./commentReducer";

const rootReducer = combineReducers({
    favorite: favoriteFilmsReducer,
    later: watchLaterFilmsReducer,
    comments: commentReducer
})

export const store = createStore(rootReducer)