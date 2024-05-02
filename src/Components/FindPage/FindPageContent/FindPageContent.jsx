import React from 'react';
import FilmCard from '../../MainPage/FilmCard/FilmCard';
import './FindPageContentStyle.css'

const FindPageContent = ({foundFilms}) => {
    return (
    <main className={foundFilms.length === 0 ? 'find-page__content-not-find' : 'find-page__content-find'}>
        {foundFilms.length === 0 ? 
            <h1 className='find-page__content-text'>Фильм не найден!</h1>
        :
            foundFilms.map(({ id, poster, name, genres, rating }) => {
                return (
                    <FilmCard
                        key={id}
                        id={id} 
                        poster={poster.url} 
                        title={name}
                        rating={rating} 
                        genres={genres} 
                />
                )
            })}
    </main>
    );
}

export default FindPageContent;
