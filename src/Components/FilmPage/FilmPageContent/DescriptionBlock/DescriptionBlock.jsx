import React from 'react';

const DescriptionBlock = ({description}) => {
    return (
        <div className="description-block">
            <p className="block__title">Описание: {description}</p>
        </div>
    );
}

export default DescriptionBlock;
