import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../pages/MainLayout';
import MainPage from '../pages/MainPage';
import FindPage from '../pages/FindPage';
import FilmPage from '../pages/FilmPage';
import NotFoundPage from '../pages/NotFoundPage';
import FavoritePage from '../pages/FavoritePage';
import WatchLaterPage from '../pages/WatchLaterPage';

const Router = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout/>} exact>
                        <Route path='' element={<MainPage/>} exact/>
                        <Route path='find' element={<FindPage/>} exact/>
                        <Route path='/films/:id' element={<FilmPage/>} exact/>
                        <Route path='/favorite' element={<FavoritePage/>} exact/>
                        <Route path='/later' element={<WatchLaterPage/>} exact/>
                        <Route path='*' element={<NotFoundPage/>} exact/>
                    </Route>
                </Routes>
            </BrowserRouter>
    );
}

export default Router;
