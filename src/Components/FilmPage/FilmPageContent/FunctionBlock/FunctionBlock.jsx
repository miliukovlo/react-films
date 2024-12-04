import React from 'react';
import AddToFavoriteButton from '../../../UI/addToFavoriteButton';
import AddToWatchLater from '../../../UI/AddToWatchLater';
import './FunctionBlockStyle.css'

const FunctionBlock = ({
    id,
    rating,
    name,
    poster,
    genres
}) => {
    return (
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
    );
}

export default FunctionBlock;
