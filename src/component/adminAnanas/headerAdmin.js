import React from "react";
import Cookies from "js-cookie";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const HeaderAdmin = (props) => {
  const dispatch = useDispatch();
  let dangxuat = () => {
    dispatch({
      type: "DELETE",
    });
    Cookies.remove("username");
    Cookies.remove("authtoken");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
      <div className="container-fluid">
        <div className="navbar-wrapper">
          <a className="navbar-brand">Bảng quản lý {props.name}</a>
        </div>
        <div className="navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="d-none d-lg-inline">
                {Cookies.get("username")}
              </span>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                id="navbarDropdownProfile"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <AccountBoxIcon></AccountBoxIcon>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownProfile"
              >
                <Link
                  className="dropdown-item"
                  to={"/" + Cookies.get("username")}
                >
                  Hồ sơ
                </Link>
                <div className="dropdown-divider" />
                <Link
                  className="dropdown-item"
                  to="/"
                  onClick={() => dangxuat()}
                >
                  Đăng Xuất
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderAdmin;
