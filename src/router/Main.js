import React from 'react';
import Header from "../component/Header"
import Direction from './Direction';
import Footer from '../component/Footer'
import HeaderMobile from '../component/HeaderMobile';
const Main = () => {
    return (
        <div>
            <Header/>
            <HeaderMobile/>
            <Direction/>
            <Footer/>
        </div>
    );
};

export default Main;