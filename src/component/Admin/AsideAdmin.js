import React from 'react';
import duyImg from "../../resource/images/duyyy.png";
import {Link} from "react-router-dom";
import "../../resource/css/sb-admin-2.css"
const AsideAdmin = () => {
    return (
        <div>
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
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
      <i className="fas fa-fw fa-cog" />
      <span>Quản lý sản phẩm</span>
    </a>
    <div id="sanpham" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
      <Link to ="/admin/themsanpham"className="collapse-item" >Thêm sản phẩm</Link>
        <Link to ="/admin/danhsachsanpham"className="collapse-item" >Danh sách sản phẩm</Link>
      </div>
    </div>
  </li>
  {/* Nav Item - Utilities Collapse Menu */}
  <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#khachhang" aria-expanded="true" aria-controls="collapseTwo">
    <i class="fa fa-user"></i>      <span>Quản lý khách hàng</span>
    </a>
    <div id="khachhang" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
      <Link to ="/admin/danhsachkhachhang"className="collapse-item" >Danh sách khách hàng</Link>
      </div>
    </div>
  </li>
  <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#donhang" aria-expanded="true" aria-controls="collapseTwo">
    <i class="fa fa-user"></i>      <span>Quản lý đơn hàng</span>
    </a>
    <div id="donhang" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        <a className="collapse-item" href="cards.html">Danh sách đơn hàng</a>
      </div>
    </div>
  </li>
  {/* Nav Item - Tables */}
  {/* Divider */}
  <hr className="sidebar-divider d-none d-md-block" />
  {/* Sidebar Toggler (Sidebar) */}
  <div className="text-center d-none d-md-inline">
    <button className="rounded-circle border-0" id="sidebarToggle" />
  </div>
</ul>

        </div>
    );
};

export default AsideAdmin;