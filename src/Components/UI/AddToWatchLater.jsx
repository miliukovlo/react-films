import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWatchLater, removeWatchLater } from '../../data/reducer/watchLaterFilmsReducer';

const AddToWatchLater = ({id, title, genres, poster, rating}) => {

    const dispatch = useDispatch()
    const watchLaterFilms = useSelector(state => state.later.films)
    const isWatchLaterFilm = watchLaterFilms.some(film => film.id === id)

    const handleAddToWatchLater = useCallback(() => {
        if (!watchLaterFilms.some(film => film.id === id)) {
            const newFilm = {
                title: title,
                genres: genres,
                poster: poster,
                rating: rating, 
                id: id
            }
            dispatch(addWatchLater(newFilm))
        } else {
            dispatch(removeWatchLater(id))
        }
    }, [watchLaterFilms, dispatch, title, genres, poster, id, rating])

    return (
        <button className="function-block__button" onClick={handleAddToWatchLater}>
            <svg className={isWatchLaterFilm ? 'watch-later__image watch-later__image-true' : 'watch-later__image'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    );
}

export default AddToWatchLater;
