import React from 'react';

const YearBlock = ({year}) => {
    return (
    <div className="year-block">
        <p className="block__title">
            Фильм вышел в: {year} году
        </p>
    </div>
    );
}

export default YearBlock;
