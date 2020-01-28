import React from 'react';
import "../../resource/css/sb-admin-2.min.css"
import '../../resource/css/fontawesome-free/css/all.min.css'
import NavAdmin from './ToolboxAdmin';
import AdminSearch from './AdminSearch';
const Admin = () => {
    return (
<div id="wrapper">
       <NavAdmin/>
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <AdminSearch/>
</nav>      </div>
    </div>
</div>

    );
};

export default Admin;