import React from 'react';
import AsideAdmin from './AsideAdmin';
import TopNavAdmin from './TopnavAdmin';
import "../../resource/css/fontawesome-free/css/all.min.css";
import FooterAdmin from './FooterAdmin';
const Admin = () => {
    return (
        <div id="wrapper">
            <AsideAdmin/>
            <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopNavAdmin/>
                <FooterAdmin/>
            </div>
            </div>
        </div>
    );
};

export default Admin;