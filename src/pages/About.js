import React from 'react';

import AboutMember from '../component/about/AboutMember';
import AboutSection from '../component/about/AboutSection';
import AboutService from '../component/about/AboutService';

const About = () => {
    return (
        <div>
            <AboutSection/>
            <AboutMember/>
            <AboutService/>
        </div>
    );
};

export default About;