import React from 'react';

const MovieLengthBlock = ({movieLength}) => {
    return (
    <div className="movie-length__block">
        <p className="block__title">
            Продолжительность: {movieLength} минут
        </p>
    </div> 
    );
}

export default MovieLengthBlock;
