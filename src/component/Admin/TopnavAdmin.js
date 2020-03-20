import React from 'react';
import {Link} from "react-router-dom"
const AdminSearch = () => {
    return (
        <div>
<nav className="navbar navbar-expand navbar-light bg-white topbar  static-top shadow">
  {/* Sidebar Toggle (Topbar) */}
  <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
    <i className="fa fa-bars" />
  </button>
  {/* Topbar Search */}
  <div className="container my-auto">
    <div className="copyright text-center my-auto">
      <span>Nhóm 4 - Website bán văn phòng phẩm</span>
    </div>
  </div>
  {/* Topbar Navbar */}
  <ul className="navbar-nav ml-auto">
    {/* Nav Item - Search Dropdown (Visible Only XS) */}
    <li className="nav-item dropdown no-arrow d-sm-none">
      <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-search fa-fw" />
      </a>
      {/* Dropdown - Messages */}
      <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
        <form className="form-inline mr-auto w-100 navbar-search">
          <div className="input-group">
            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>
    {/* Nav Item - Alerts */}
    <li className="nav-item dropdown no-arrow mx-1 mt-2">
      <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-envelope fa-fw" />
        {/* Counter - Messages */}
        <span className="badge badge-danger badge-counter">7</span>
      </a>
      {/* Dropdown - Messages */}
      <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
        <h6 className="dropdown-header">
          Message Center
        </h6>
      </div>
    </li>
    <div className="topbar-divider d-none d-sm-block" />
    {/* Nav Item - User Information */}
    <li className="nav-item dropdown no-arrow mt-2">
      <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Quốc Duy</span>
        <img className="img-profile rounded-circle"  />
      </a>
      {/* Dropdown - User Information */}
      <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
        <a className="dropdown-item" href="#">
          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
          Thông tin
        </a>
        <div className="dropdown-divider" />
        <Link to="/">
          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
          Đăng Xuất
          </Link>
                </div>
    </li>
  </ul>
</nav>

        </div>
    );
};

export default AdminSearch;