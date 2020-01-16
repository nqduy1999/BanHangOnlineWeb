import React from 'react';

import AboutMember from '../component/about/AboutMember';
import AboutReview from '../component/about/AboutReview';
import AboutSection from '../component/about/AboutSection';

const About = () => {
    return (
        <div>
            <AboutSection/>
            <AboutMember/>
            <AboutReview/>
        </div>
    );
};

export default About;