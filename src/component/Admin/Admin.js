import React from 'react';

import "../../resource/css/AdminTable.css";
import TopnavAdmin from './TopnavAdmin'
import AsideAdmin from './AsideAdmin';
import DirectionAdmin from './DirectionAdmin';
const Admin = () => {
    return (
        <div id="wrapper">
            <AsideAdmin/>
            {/* <DirectionAdmin/> */}
        </div>
    );
};

export default Admin;