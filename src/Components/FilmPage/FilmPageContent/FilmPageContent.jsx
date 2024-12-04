import React from 'react';
import './FilmPageContentStyle.css'
import GenresBlock from './GenresBlock/GenresBlock';
import InformationBlock from './InformationBlock/InformationBlock';
import DescriptionBlock from './DescriptionBlock/DescriptionBlock';
import ActorsBlock from './ActorsBlock/ActorsBlock';
import RatingBlock from './RatingBlock/RatingBlock';
import MovieLengthBlock from './MovieLengthBlock/MovieLengthBlock';
import YearBlock from './YearBlock/YearBlock';
import FunctionBlock from './FunctionBlock/FunctionBlock';
import PosterBlock from './PosterBlock/PosterBlock';


const FilmPageContent = ({
    poster,
    name,
    genres, 
    description,
    linkToStaff,
    rating,
    movieLength,
    year,
    id
}) => {

    const blocksOfPage = [
        {id: 1, element: <GenresBlock genres={genres}/>},
        {id: 2, element: <DescriptionBlock description={description}/>},
        {id: 3, element: <ActorsBlock linkToStaff={linkToStaff}/>},
        {id: 4, element: <RatingBlock rating={rating}/>},
        {id: 5, element: <MovieLengthBlock movieLength={movieLength}/>},
        {id: 6, element: <YearBlock year={year}/>},
        {id: 7, element: <FunctionBlock id={id} rating={rating} name={name} poster={poster} genres={genres}/>},
    ]

    return (
        <main className="film-page__content">
        <PosterBlock poster={poster} name={name}/>
        <div className="content-information">
            {blocksOfPage.map(block => {
                return (
                    <InformationBlock key={block.id} children={block.element}/>
                )
            })}
        </div>
    </main>
    );
}

export default FilmPageContent;
