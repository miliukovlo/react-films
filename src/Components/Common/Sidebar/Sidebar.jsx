import React from 'react';
import './SidebarStyle.css'
import { useNavigate } from 'react-router-dom';
import FavoriteButton from '../../UI/Sidebar/FavoriteButton';
import WatchLaterButton from './../../UI/Sidebar/WatchLaterButton';

const Sidebar = () => {
    const navigate = useNavigate()

    const handleNavigateFavorite = () => {
        navigate('/favorite')
    }

    const handleNavigateLater = () => {
        navigate('/later')
    }


    return (
        <aside className='sidebar'>
                <button className='function-block__button' onClick={handleNavigateFavorite}>
                    <FavoriteButton/>
                </button>
                <button className="function-block__button" onClick={handleNavigateLater}>
                    <WatchLaterButton/>
                </button>
        </aside>
    );
}

export default Sidebar;
