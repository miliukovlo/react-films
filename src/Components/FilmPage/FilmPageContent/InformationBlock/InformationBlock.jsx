import React from 'react';
import './InformationBlockStyle.css'


const InformationBlock = ({children}) => {
    return (
        <div className='content-information__block'>
            {children}
        </div>
    );
}

export default InformationBlock;
