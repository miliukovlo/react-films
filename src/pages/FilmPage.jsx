import React from 'react';
import { useGetCurrentFilm } from '../hooks/useGetCurrentFilm';
import './styles/FilmPageStyle.css'
import FilmPageContent from '../Components/FilmPage/FilmPageContent/FilmPageContent';
import { useFindSimilarFilms } from '../hooks/useFindSimilarFilms';
import SimilarFilmsBlock from '../Components/FilmPage/SimilarFilmsBlock/SimilarFilmsBlock';
import { useInput } from './../hooks/useInput';
import { useGetComments } from '../hooks/useGetComments';
import CommentsFilmBlock from '../Components/FilmPage/CommentsFilmBlock/CommentsFilmBlock';
import Sidebar from '../Components/Common/Sidebar/Sidebar';


const FilmPage = () => {
    const currentFilm = useGetCurrentFilm()

    const commentsCurrentFilm = useGetComments(currentFilm.id)

    const linkToStaff = `https://www.kinopoisk.ru/film/${currentFilm.id}/cast/`

    const similarFilms = useFindSimilarFilms(currentFilm.genres, currentFilm.id)

    const comment = useInput('')

    return (
        <>
            <h2 className='film-page__title'>Страница фильма {currentFilm.name}</h2>
            <div className="content">
                <FilmPageContent
                    name={currentFilm.name} 
                    poster={currentFilm.poster} 
                    genres={currentFilm.genres}
                    description={currentFilm.description}
                    id={currentFilm.id}
                    rating={currentFilm.rating}
                    movieLength={currentFilm.movieLength}
                    year={currentFilm.year}
                    linkToStaff={linkToStaff}
                />
                <Sidebar/>
            </div>
            <SimilarFilmsBlock
                similarFilms={similarFilms}
            />
            <CommentsFilmBlock
                commentsCurrentFilm={commentsCurrentFilm}
                comment={comment}
                currentFilm={currentFilm}
            />
        </>
    );
}

export default FilmPage;
