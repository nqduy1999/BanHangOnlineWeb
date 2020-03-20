import React from 'react';
import {Link} from "react-router-dom";
const AsideAdmin = () => {
    return (
  <ul className="navbar-nav bg-dark sidebar sidebar-dark accordion fixed" id="accordionSidebar">
  {/* Sidebar - Brand */}
  <Link className="sidebar-brand d-flex align-items-center justify-content-center"  to ="/admin">
    <div className="sidebar-brand-text mx-3">Ananas Admin </div>
  </Link>
  {/* Divider */}
  <hr className="sidebar-divider my-0" />
  {/* Nav Item - Dashboard */}
  {/* Heading */}
  <div className="sidebar-heading">
    Quản lý
  </div>
  {/* Nav Item - Pages Collapse Menu */}
  <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#sanpham" aria-expanded="true" aria-controls="collapseTwo">
      <i className="fa fa-fw fa-cog" />
      <span>Quản lý sản phẩm</span>
    </a>
    <div id="sanpham" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        <Link to ="/admin/danhsachsanpham"className="collapse-item" >Danh sách sản phẩm</Link>
      </div>
    </div>
  </li>
  {/* Nav Item - Utilities Collapse Menu */}
  <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#khachhang" aria-expanded="true" aria-controls="collapseTwo">
   <i className="fa fa-user" />
      <span>Quản lý khách hàng</span>
    </a>
    <div id="khachhang" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
      <Link to ="/admin/danhsachkhachhang"className="collapse-item" >Danh sách khách hàng</Link>
      </div>
    </div>
  </li>
  <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#donhang" aria-expanded="true" aria-controls="collapseTwo">
   <i className="fa fa-file" />
   <span>Quản lý đơn hàng</span>
    </a>
    <div id="donhang" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        <Link to="/admin/danhsachdonhang" className="collapse-item" >Danh sách đơn hàng</Link>
      </div>
    </div>
  </li>
  <li className="nav-item">
    <a className="nav-link collapsed" data-toggle="collapse" data-target="#cungcap" aria-expanded="true" aria-controls="collapseTwo">
    <i class="fa fa-university"></i>
     <span>Danh sách nhà cung cấp</span>
    </a>
  </li>
  {/* Nav Item - Tables */}
  {/* Divider */}
  <hr className="sidebar-divider d-none d-md-block" />
  {/* Sidebar Toggler (Sidebar) */}
  <div className="text-center d-none d-md-inline">
    <button className="rounded-circle border-0" id="sidebarToggle" />
  </div>
</ul>

    );
};

export default AsideAdmin;