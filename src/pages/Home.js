import React from 'react';

import ServiceArea from '../component/home/ServiceArea';
import ServiceContent from '../component/home/ServiceContent';

const Home = () => {
    return (
        <div className="site-wrap">
            <ServiceContent/>
            <ServiceArea/>
        </div>
    );
};

export default Home;