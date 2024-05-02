import React from 'react';
import './FilmCardStyle.css'
import { useNavigate } from 'react-router-dom';
import AddToFavoriteButton from '../../UI/addToFavoriteButton';
import AddToWatchLater from '../../UI/AddToWatchLater';

const FilmCard = ({
    title,
    genres,
    poster,
    rating, 
    id
}) => {

    const navigate = useNavigate()

    const handleNavigateToFilm = () => {
        navigate(`/films/${id}`)
    }
    

    return (
        <div className='film-card'>
            <img onClick={handleNavigateToFilm} className='film-card__poster' src={poster} alt="Постер к фильму" />
            <h2 onClick={handleNavigateToFilm} className='film-card__title'>{title}</h2>
            <h3 className='film-card__rating'>Рейтинг: {rating.kp}</h3>
            <div className="film-card__genre-block">
                <p> жанр:
                {genres.map((genre, index) => {
                    return (
                        <span key={index} className='genre-block__text'>{genre.name}</span>
                    )
                })}
                </p>
            </div>
            <div className="film-card__function-block">
                <AddToFavoriteButton
                    id={id}
                    rating={rating}
                    name={title}
                    poster={poster}
                    genres={genres}
                    />
                <AddToWatchLater
                    id={id}
                    rating={rating}
                    title={title}
                    poster={poster}
                    genres={genres}
                />
            </div>
        </div>
    );
}

export default React.memo(FilmCard);
