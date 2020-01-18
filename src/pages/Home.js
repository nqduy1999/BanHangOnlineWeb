import React from 'react';

import BigSaleArea from '../component/home/BigSaleArea';
import PopularArea from '../component/home/PopularArea';
import ServiceArea from '../component/home/ServiceArea';
import ServiceContent from '../component/home/ServiceContent';
import FeatureProduct from '../component/home/FeatureProduct';

const Home = () => {
    return (
        <div className="site-wrap">
            <ServiceContent/>
            <ServiceArea/>
            <PopularArea/>
            <FeatureProduct/>
            <BigSaleArea/>
        </div>
    );
};

export default Home;