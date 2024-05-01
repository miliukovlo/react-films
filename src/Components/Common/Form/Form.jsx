import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { filmsData } from './../../../data/filmsData';
import { useInput } from './../../../hooks/useInput';
import './FormStyle.css'
import { useSortFilms } from '../../../hooks/useSortFilms';
import { useSearchParams } from 'react-router-dom';
import { genresCheck } from './../../../data/genresData';
import Checkbox from '../../UI/Checkbox';

const allFilms = filmsData;

const Form = ({ setFilms, limit }) => {
    const [searchParams, setSearchParams] = useSearchParams({genres: []})
    const selectValue = useInput("1")
    const [genres, setGenres] = useState(genresCheck)
    const sortedFilms = useSortFilms(allFilms, selectValue.value)
    const [prevLimit, setPrevLimit] = useState(limit)
    const sortFilms = useMemo(() => sortedFilms, [sortedFilms])

    const handleCheckChange = useCallback((id) => {
        setGenres(prevGenres => prevGenres.map(genre => {
            if (genre.id === id) {
                return { ...genre, check: !genre.check }
            }
            return genre;
        }));
    }, [])


    useEffect(() => {
        if (selectValue.isChanged || limit > prevLimit) {
            setFilms(sortFilms.slice(0, limit))
            selectValue.setIsChanged(false)
            setPrevLimit(limit)
        }
    }, [selectValue.value, sortFilms, limit, selectValue.isChanged, setFilms])

    return (
        <form className='form'>
            <div className="genres-sort__block">
                {genres.map(check => {
                    return (
                        <Checkbox
                            id={check.id}
                            key={check.id}
                            check={check.check}
                            labelText={check.labelText}
                            onCheckChange={() => handleCheckChange(check.id)}
                        />
                    )
                })}
            </div>
            <div className="rating-sort__block">
                <select value={selectValue.value} onChange={selectValue.onChange}>
                    <option value="1">По умолчанию</option>
                    <option value="2">По возрастанию</option>
                    <option value="3">По убыванию</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
