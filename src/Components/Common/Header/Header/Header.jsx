import React from 'react';
import './HeaderStyle.css';
import { Link } from 'react-router-dom';

const linksArray = [
    {
        linkId: 1,
        linkText: 'Главная страница',
        to: '/'
    },
    {
        linkId: 2,
        linkText: 'Найти фильм',
        to: '/find'
    }
]

const Header = () => {
    return (
        <header className='header'>
            <nav className='header-nav'>
                <ul className='header-nav__list'>
                    {linksArray.map(link => {
                        return (
                            <li key={link.linkId} className='nav-list__element'>
                                <Link className='nav-list__link' to={link.to}>{link.linkText}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
