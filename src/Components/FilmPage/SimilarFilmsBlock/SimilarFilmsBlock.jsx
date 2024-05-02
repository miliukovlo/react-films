import React from 'react';
import FilmCard from '../../MainPage/FilmCard/FilmCard';
import './SimilarFilmsBlockStyle.css'

const SimilarFilmsBlock = ({similarFilms}) => {
    return (
        <div className="film-page__similar-block">
        <h2 className='film-page__title'>Похожие фильмы</h2>
        <div className="similar-block__films">
            {similarFilms.map(film => {
                return (
                    <FilmCard
                        key={film.id}
                        id={film.id}
                        poster={film.poster.url} 
                        title={film.name} 
                        genres={film.genres}
                        rating={film.rating}
                    />
                )
            })}
        </div>
    </div>
    );
}

export default SimilarFilmsBlock;
