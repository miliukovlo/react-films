import React from 'react';
import './styles/FavoritePageStyle.css'
import { useSelector } from 'react-redux';
import FilmCard from '../Components/MainPage/FilmCard/FilmCard';
import Sidebar from './../Components/Common/Sidebar/Sidebar';

const FavoritePage = () => {
    const favoriteFilms = useSelector(state => state.favorite.films)

    return (
        <>
            <h2 className='favorite-page__title'>Страница избранных фильмов</h2>
            <div className="content">
                {favoriteFilms.length > 0 ?
                        <main className='favorite-page__content'>
                            {
                                favoriteFilms.map((film) => {
                                    return (
                                        <FilmCard
                                            key={film.id}
                                            {...film}
                                        />
                                    )
                                })
                            }
                        </main>
                    :
                    <main className="favorite-page__no-content">
                        <h2 className='favorite-page__title'>Список избранных фильмов пуст!</h2>
                    </main>    
                }
                <Sidebar/>
            </div>
        </>
    );
}

export default FavoritePage;
