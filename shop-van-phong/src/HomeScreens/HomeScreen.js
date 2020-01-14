import React from 'react';
import "../resource/icomoon/style.css"
import "../resource/css/style.css"
import "../resource/css/bootstrap.min.css"
import "../resource/css/jquery-ui.css"
import "../resource/css/magnific-popup.css"
import "../resource/css/aos.css"
import "../resource/css/owl.carousel.min.css"
import "../resource/css/owl.theme.default.min.css"
import "../resource/css/mdb.min.css"
import "../resource/css/mdb.lite.min.css"
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import ServiceContent from './ServiceContent';

const HomeScreen = () => {
    return (
        <div className="site-wrap">
            <Header/>
            <ServiceContent/>
            <Footer/>
        </div>
    );
};

export default HomeScreen;