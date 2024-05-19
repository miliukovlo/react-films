import React from 'react';
import './GenresBlockStyle.css'

const GenresBlock = ({genres}) => {
    return (
        <>
            <p className='block__title'>Жанры: </p>
                <ul className='genre-block__list'>
                    {genres.map(genre => {
                        return (
                            <li className='list-element' key={genre.name}>{genre.name}</li>
                        )
                    })}
                </ul>
        </>
    );
}

export default GenresBlock;
