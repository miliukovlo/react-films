import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 4000)
    })
    return (
        <div>
            Страница не найдена!
        </div>
    );
}

export default NotFoundPage;
