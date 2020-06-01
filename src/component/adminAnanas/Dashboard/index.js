import React, { useEffect, useState } from "react";
import StoreIcon from "@material-ui/icons/Store";
import AssignmentIcon from "@material-ui/icons/Assignment";
import GroupIcon from "@material-ui/icons/Group";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import VisibilitySensor from "react-visibility-sensor";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { getSoProduct } from "../../../services/ProductServices";
import { getListCus } from "../../../services/AdminService";
import { ListSupplier } from "../../../services/SupplierService";
import CountUp from "react-countup";
import { getListOrderByUsername } from "../../../services/OrderServices";
import { Link } from "react-router-dom";
const DashBoard = () => {
  const [soSanPham, setSoSanPham] = useState(null);
  const [soKhachHang, setSoKhachHang] = useState(null);
  const [doitac, setDoiTac] = useState(null);
  const [khachdathang, setKhachDatHang] = useState(null);
  const [order, setOrder] = useState(null);
  let tongdoanhthu = 0;
  let key = 0;
  useEffect(() => {
    getSoProduct().then((res) => {
      setSoSanPham(res.data.result.length);
    });
  }, []);
  useEffect(() => {
    getListCus().then((res) => {
      setSoKhachHang(res.data.result.length);
    });
  }, []);
  useEffect(() => {
    getListCus().then((res) => {
      console.log(res);
      setKhachDatHang(res.data.result);
    });
  }, []);
  useEffect(() => {
    ListSupplier().then((res) => {
      setDoiTac(res.data.result);
    });
  }, []);
  useEffect(() => {
    console.log(khachdathang);
    if (khachdathang) {
      khachdathang.map((khach, index) => {
        getListOrderByUsername(khach.account.username).then((res) => {
          setOrder(res.data.result);
          console.log(res.data.result);
        });
      });
    }
  }, [khachdathang]);
  const tongdoanhthusanpham = (giatrihoadon) =>{
    let tong= 0;
    tong+=giatrihoadon;
    console.log(tong);
    tong = tongdoanhthu;
    return tong;
  }
  const renderSupplier = () => {
    if (doitac) {
      return doitac.map((doitac, index) => {
        const { name } = doitac;
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
          </tr>
        );
      });
    }
  };
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-warning card-header-icon">
                <Link to="quanly/sanpham" className="card-icon text-white">
                  <StoreIcon />
                </Link>
                <p className="card-category">Số sản phẩm</p>
                <CountUp start={0} end={soSanPham} redraw={true}>
                  {({ countUpRef }) => (
                    <h3 className="card-title" ref={countUpRef} />
                  )}
                </CountUp>{" "}
              </div>
              <div className="card-footer">
                <div className="stats"> </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-success card-header-icon">
                <div className="card-icon">
                  <AssignmentIcon />
                </div>
                <p className="card-category">Số đơn hàng được đặt</p>
                <h3 className="card-title">5</h3>
              </div>
              <div className="card-footer">
                <div className="stats"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-danger card-header-icon">
                <div className="card-icon">
                  <GroupIcon />
                </div>
                <p className="card-category">Khách của chúng tôi</p>
                <CountUp end={soKhachHang}>
                  {({ countUpRef }) => (
                    <h3 className="card-title" ref={countUpRef} />
                  )}
                </CountUp>
              </div>
              <div className="card-footer">
                <div className="stats"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-info card-header-icon">
                <div className="card-icon">
                  <AttachMoneyIcon />
                </div>
                <p className="card-category">Tổng doanh thu</p>
                <CountUp end={77} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <h3 className="card-title" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>{" "}
              </div>
              <div className="card-footer">
                <div className="stats"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header card-header-tabs card-header-warning">
                <div className="nav-tabs-navigation">
                  <div className="nav-tabs-wrapper">
                    <span className="nav-tabs-title">
                      Sản phẩm được khách hàng đặt
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-body table-responsive">
                <table className="table table-hover">
                  <thead className="text-warning">
                    <tr>
                      <th>Tên</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Tổng tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order &&
                      order.map((item, i) =>{
                       return item.listOrderDetail.map((orderdetail, i) => (
                          <tr>
                            <td>{orderdetail.product.name}</td>
                            <td>{orderdetail.quantity}</td>
                            <td>{orderdetail.unitPrice}</td>
                            <td>{item.totalMoney}</td>
                          </tr>
                        ))
                        }
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header card-header-tabs card-header-primary">
                <div className="nav-tabs-navigation">
                  <div className="nav-tabs-wrapper">
                    <span className="nav-tabs-title">Đối tác cung cấp</span>
                  </div>
                </div>
              </div>
              <div className="card-body table-responsive">
                <div className="tab-content">
                  <div className="tab-pane active" id="profile">
                    <table className="table ">
                      <thead className="text-primary">
                        <tr>
                          <th>STT</th>
                          <th>Tên</th>
                        </tr>
                      </thead>
                      <tbody>{renderSupplier()}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
