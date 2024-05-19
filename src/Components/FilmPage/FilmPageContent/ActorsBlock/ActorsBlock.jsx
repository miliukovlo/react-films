import React from 'react';
import { Link } from 'react-router-dom';
import './ActorsBlockStyle.css'

const ActorsBlock = ({linkToStaff}) => {
    return (
        <div className="actors-block">
            <p className="block__title">
                Актеры: <Link target='_blank' className='actors-link' to={linkToStaff}>Список актеров</Link>
            </p>
        </div>
    );
}

export default ActorsBlock;
