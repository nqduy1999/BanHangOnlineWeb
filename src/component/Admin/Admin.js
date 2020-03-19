import React from 'react';
import AsideAdmin from './AsideAdmin';
import TopNavAdmin from './TopnavAdmin';
import "../../resource/css/fontawesome-free/css/all.min.css";
import "../../resource/css/admintable.css";
import DirectionAdmin from './DirectionAdmin';
const Admin = () => {
    return (
        <div id="wrapper">
            <AsideAdmin/>
            <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopNavAdmin/>
                <DirectionAdmin/>
            </div>
            </div>
        </div>
    );
};

export default Admin;