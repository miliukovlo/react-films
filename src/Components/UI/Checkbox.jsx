import React from 'react';

const Checkbox = ({labelText, genre, check, onCheckChange}) => {

    return (
        <div>
            <input type="checkbox" name={genre} id={genre} checked={check} onChange={onCheckChange}/>
            <label htmlFor={genre}>{labelText}</label>
        </div>
    );
}

export default React.memo(Checkbox);
