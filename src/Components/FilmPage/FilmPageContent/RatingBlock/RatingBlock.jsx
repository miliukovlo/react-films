import React from 'react';

const RatingBlock = ({rating}) => {
    return (
    <div className="rating-block">
        <p className="block__title">
            Рейтинг на кинопоиске: {rating.kp}
        </p>
    </div>
    );
}

export default RatingBlock;
