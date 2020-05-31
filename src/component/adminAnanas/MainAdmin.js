import React, { useEffect, useState } from "react";
import DashBoard from "./Dashboard";
import AdminFooter from "./footeradmin";
import DashboardIcon from '@material-ui/icons/Dashboard';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import PersonIcon from '@material-ui/icons/Person';
import HeaderAdmin from "./headerAdmin";
import { Link } from 'react-router-dom';
import { MenuList } from "@material-ui/core";
import ProductAdmin from "./Product/ProductAdmin";
import DirectionAdmin from "./DirectionAdmin";
const MainAdmin = () => {
  const [showComponent, setShowComponent] = useState("dashboard");
  const [currentComponent, setCurrentComponent] = useState(<ProductAdmin/>);
  useEffect(() => {
    switch(showComponent) {
      case 'dashboard':
        setCurrentComponent(<DashBoard/>)
        break;
      case 'product':
        setCurrentComponent(<ProductAdmin/>)
          break;
      default:
          setCurrentComponent("loading");
  }
  }, [showComponent]);
  return (
    <div className="wrapper">
      <div
        className="sidebar"
        data-color="purple"
        data-background-color="white"
        data-image="../assets/img/sidebar-1.jpg"
      >
        <div className="logo text-center text-primary">
               Admin - Ananas 
        </div>
        <div className="sidebar-wrapper">
        <MenuList className="nav">
            <MenuList className="nav-item ">
              <a className="nav-link sidebar-hover" href="./dashboard.html">
                  <DashboardIcon className="text-center"/>
                <span>Dashboard</span>
              </a>
            </MenuList>
            <MenuList className="nav-item ">
              <Link to="/quanly/sanpham" className="nav-link sidebar-hover text-black">
                <AllInboxIcon/>
                <span>Quản lý sản phẩm</span>
              </Link>
            </MenuList>
            <MenuList className="nav-item ">
              <a className="nav-link sidebar-hover" href="./tables.html">
                  <PersonIcon/>
                  <span>Quản lý khách hàng</span>
              </a>
            </MenuList>
          </MenuList>
        </div>
      </div>

      <div className="main-panel">
        <HeaderAdmin  />
        <DirectionAdmin/>
        <AdminFooter />
      </div>
    </div>
  );
};

export default MainAdmin;
