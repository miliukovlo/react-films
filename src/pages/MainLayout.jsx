import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Common/Header/Header/Header';
import Footer from '../Components/Common/Header/Footer/Footer';

const MainLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default MainLayout;
