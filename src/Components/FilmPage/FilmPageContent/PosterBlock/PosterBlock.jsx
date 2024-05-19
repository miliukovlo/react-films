import React from 'react';
import './PosterBlockStyle.css'

const PosterBlock = ({poster, name}) => {
    return (
        <div className="content-poster">
            <img className='content-poster__image' src={poster.url} alt={name} />
        </div>
    );
}

export default PosterBlock;
