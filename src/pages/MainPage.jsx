import React, { useEffect, useRef, useState } from 'react';
import { useGetFilms } from '../hooks/useGetFilms';
import './styles/MainPageStyle.css'
import FilmCard from '../Components/MainPage/FilmCard/FilmCard';
import Sidebar from '../Components/Common/Sidebar/Sidebar';
import Form from '../Components/Common/Form/Form';

const MainPage = () => {
    const [limit, setLimit] = useState(10)

    const popularFilms = useGetFilms(limit)
    const [filteredFilms, setFilteredFilms] = useState(popularFilms)
    const observer = useRef(null)
    const contentRef = useRef(null)
    

    useEffect(() => {

        observer.current = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && limit < 100) {
                    setLimit(prevLimit => prevLimit + 10);
                }
            });
        });

        if (contentRef.current) {
            observer.current.observe(contentRef.current);
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [limit])

    return (
        <>
            <h2 className='main-page__title'>Популярные фильмы</h2>
            <Form
                setFilms={setFilteredFilms}
                limit={limit}
            />
            <div className="content">
                <main className='main-page__content'>
                {popularFilms && filteredFilms.map(({ id, poster, name, genres, rating }) => (
                    <FilmCard 
                        key={id}
                        id={id}
                        poster={poster.url} 
                        title={name} 
                        genres={genres}
                        rating={rating}
                    />
                ))}
                </main>
                <Sidebar/>
            </div>
            <div ref={contentRef} className="main-page__observer"></div>
        </>
    );
}

export default MainPage;
