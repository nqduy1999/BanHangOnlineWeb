import React from 'react';

import "../../resource/css/AdminTable.css";

import AsideAdmin from './AsideAdmin';
import DirectionAdmin from './DirectionAdmin';
import TopNavAdmin from './TopnavAdmin';
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