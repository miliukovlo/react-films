import React from 'react';
import { useSelector } from 'react-redux';
import FilmCard from '../Components/MainPage/FilmCard/FilmCard';
import './styles/WatchLaterPageStyle.css'
import Sidebar from '../Components/Common/Sidebar/Sidebar';

const WatchLaterPage = () => {

    const watchLaterFilms = useSelector(state => state.later.films)

    return (
        <>
            <h2 className='watch-later-page__title'>Страница смотреть позже</h2>
            <div className="content">
                {watchLaterFilms.length > 0 ?
                    <main className='watch-later-page__content'>
                        {
                            watchLaterFilms.map((film) => {
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
                    <main className="watch-later-page__no-content">
                        <h2 className='watch-later-page__title'>Список смотреть позже пуст!</h2>
                    </main>
                }
                <Sidebar/>
            </div>
        </>
    );
}

export default WatchLaterPage;
