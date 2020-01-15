import React from 'react';

import Footer from '../component/Footer';
import Header from '../component/Header';
import ServiceContent from '../component/home/ServiceContent';

const Home = () => {
    return (
        <div className="site-wrap">
            <Header/>
            <ServiceContent/>
            <Footer/>
        </div>
    );
};

export default Home;