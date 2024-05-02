import React, { useState } from 'react';
import './styles/FindPageStyle.css'
import Input from './../Components/UI/Input';
import { useInput } from '../hooks/useInput';
import { useFindFilms } from '../hooks/useFindFilms';
import Form from '../Components/Common/Form/Form';
import { filmsData } from '../data/filmsData';
import FindPageContent from '../Components/FindPage/FindPageContent/FindPageContent';
import Sidebar from '../Components/Common/Sidebar/Sidebar';

const allFilms = filmsData

const FindPage = () => {
    const findValue = useInput('')
    const [filteredFilms, setFilteredFilms] = useState(allFilms)
    const foundFilms = useFindFilms(findValue.value, filteredFilms)

    return (
        <>
            <h2 className='find-page__title'>Страница поиска</h2>
                <div className="find-page__input-block">
                    <Form
                        setFilms={setFilteredFilms}
                    />
                        <Input
                            value={findValue.value}
                            onChange={findValue.onChange}
                            placeholder={'Введите название фильма'}
                            sizes={'M'}
                        />
                </div>
                    <div className="content">
                    <FindPageContent
                        foundFilms={foundFilms}
                    />
                    <Sidebar/>
                </div>
        </>
    );
}

export default FindPage;
