import React, { useState, useEffect } from "react";
import GroupIcon from "@material-ui/icons/Group";
import CountUp from "react-countup";
import { getListCus } from "../../../services/AdminService";
import { MenuList, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CustomerItem from "./CustomerItem";
import CustomerProfile from "./CustomerProfile";
const CustomerAdmin = () => {
    const [soKhachHang, setSoKhachHang] = useState(null);
    const [khachHang,setKhachHang] = useState([]);
    let key =0;
    useEffect(() => {
        getListCus().then((res) => {
          setKhachHang(res.data.result);
          setSoKhachHang(res.data.result.length);
        });
    }, []);
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="card card-stats">
              <div className="card-header card-header-danger card-header-icon">
                <div className="card-icon">
                  <GroupIcon />
                </div>
                <p className="card-category">Tổng số khách hàng</p>
                <CountUp start={0} end={soKhachHang} redraw={true}>
                  {({ countUpRef }) => (
                    <h3 className="card-title" ref={countUpRef} />
                  )}
                </CountUp>{" "}
              </div>
              <div className="card-footer"></div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header card-header-tabs card-header-danger">
            <div className="nav-tabs-navigation">
              <div className="nav-tabs-wrapper row">
                <span className=" nav-tabs-title col-lg-8 pl-2 col-md-4">
                  Bảng quản lý khách hàng
                </span>
                <div className="nav-item col-lg-3 col-md-4 col-sm-6">
                  <div className="nav-link " href="#profile" data-toggle="tab">
                    <input
                      type="text"
                      className="pb-1 form-control"
                      placeholder="Nhập từ khoá ...."
                    />
                    <div className="ripple-container"></div>
                  </div>
                </div>
                <div className="nav-item col-lg-1 col-md-4 col-sm-6 row">
                  <div className="nav-link row"  data-toggle="tab">
                      <button className="btn btn-danger">
                    <i class="fa fa-search"></i>
                    </button>
                    <div className="ripple-container"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body table-responsive">
            <table className="table table-hover">
              <thead className="text-danger">
                <tr>
                  <th>STT</th>
                  <th>Tài khoản</th>
                  <th>Tên khách hàng</th>
                  <th>Chi tiết</th>
                  <th>Cập nhật </th>
                </tr>
              </thead>
              <tbody>
                {khachHang.map((kh, i) => {
                  key=i+1;
                  return <CustomerItem stt={key} khachhang={kh}/>;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <CustomerProfile/>
    </div>
  );
};

export default CustomerAdmin;
