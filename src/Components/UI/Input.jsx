import React from 'react';
import './InputStyle.css'

const Input = ({
    value,
    onChange,
    sizes,
    placeholder
}) => {
    return <input 
        type="text" 
        value={value} 
        onChange={onChange} 
        className={sizes === 'M' ? 'size-m' : sizes === 'L' ? 'size-l' : ''}
        placeholder={placeholder}
    />
}

export default Input;
