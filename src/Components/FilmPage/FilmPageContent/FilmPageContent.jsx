import React from 'react';
import { Link } from 'react-router-dom';
import AddToFavoriteButton from '../../UI/addToFavoriteButton';
import AddToWatchLater from '../../UI/AddToWatchLater';
import './FilmPageContentStyle.css'

const FilmPageContent = ({
    poster,
    name,
    genres, 
    description,
    linkToStaff,
    rating,
    movieLength,
    year,
    id
}) => {
    return (
        <main className="film-page__content">
        <div className="content-poster">
            <img className='content-poster__image' src={poster.url} alt={name} />
        </div>
        <div className="content-information">
            <div className="content-information__block">
                <p className='block__title'>Жанры: </p>
                    <ul className='genre-block__list'>
                        {genres.map(genre => {
                            return (
                                <li className='list-element' key={genre.name}>{genre.name}</li>
                            )
                        })}
                    </ul>
            </div>
            <div className="content-information__block">
                <div className="description-block">
                    <p className="block__title">Описание: {description}</p>
                </div>
            </div>
            <div className="content-information__block">
                <div className="actors-block">
                    <p className="block__title">
                        Актеры: <Link target='_blank' className='actors-link' to={linkToStaff}>Список актеров</Link>
                    </p>
                </div>
            </div>
            <div className="content-information__block">
                <div className="rating-block">
                    <p className="block__title">
                        Рейтинг на кинопоиске: {rating.kp}
                    </p>
                </div>
            </div>
            <div className="content-information__block">
                <div className="movie-length__block">
                        <p className="block__title">
                            Продолжительность: {movieLength} минут
                        </p>
                </div>    
            </div>
            <div className="content-information__block">
                <div className="year-block">
                    <p className="block__title">
                        Фильм вышел в: {year} году
                    </p>
                </div>
            </div>
            <div className="content-information__block">
                <div className="function-block">
                    <AddToFavoriteButton
                        id={id}
                        rating={rating}
                        name={name}
                        poster={poster.url}
                        genres={genres}
                    />
                    <AddToWatchLater
                        id={id}
                        rating={rating}
                        title={name}
                        poster={poster.url}
                        genres={genres}
                    />
                </div>
            </div>
        </div>
    </main>
    );
}

export default FilmPageContent;
