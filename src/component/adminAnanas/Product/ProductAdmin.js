import React, { useState, useEffect } from "react";
import StoreIcon from "@material-ui/icons/Store";
import { getSoProduct } from "../../../services/ProductServices";
import CountUp from "react-countup";
import { Link, useLocation } from "react-router-dom";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddIcon from "@material-ui/icons/Add";
import {
  getListProduct,
  addProduct,
  removeProduct,
  updateProduct,
} from "../../../services/AdminService";
import SearchIcon from "@material-ui/icons/Search";
import ProductItemAdmin from "./ProductItemAdmin";
import { alertNotify } from "../../../untils/alert";
import AddProduct from "./AddProduct";
import { MenuList, MenuItem } from "@material-ui/core";
import ProductProfile from "./ProductProfile";
const ProductAdmin = () => {
  const [hideButton, setHideButton] = useState(false);
  const [soSanPham, setSoSanPham] = useState(null);
  const [sanpham, setSanpham] = useState([]);
  const [pageSearch, setPageSearch] = useState(null);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openUpdate, setOpenUpdate] = useState({});
  const handleOpen = () => {
    setOpen(true);
  };
  let genPage = (total) => {
    let array = [];
    for (let index = 0; index < total; index++) {
      array.push(index);
    }
    setPages(array);
  };
  let handleMoveLeft = () => {
    return currentPage - 1 < 0 ? currentPage : currentPage - 1;
  };
  let handleMoveRight = () => {
    return currentPage + 1 > pages.length - 1 ? currentPage : currentPage + 1;
  };
  let key=0;
  const xoaSanpham = (id) => {
    removeProduct(id)
      .then((res) => {
        if (res.error !== true && res.data.code === 0) {
          getListProduct(currentPage).then((res) => {
            setSanpham(res.data.result.content);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const themSanPham = (value) => {
    addProduct(value)
      .then((res) => {
        console.log(res);
        if (res.data.code === 0) {
          alertNotify("Thông báo", res.data.message, "success");
          getListProduct(currentPage).then((res) => {
            setSanpham(res.data.result.content);
          });
        } else {
          alertNotify("Thông báo", res.data.message, "warning");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const capNhatSanPham = (id, value) => {
    updateProduct(id, value).then((res) => {
      console.log(value);
      if (res.error !== true) {
        alertNotify("Thông Báo", res.data.message, "success");
        getListProduct(currentPage).then((res) => {
          setSanpham(res.data.result.content);
        });
        setHideButton(true);
      } else {
        alertNotify("Thông Báo", "Sai nhập liệu", "warning");
      }
    });
  };
  useEffect(() => {
    getSoProduct().then((res) => {
      setSoSanPham(res.data.result.length);
    });
  });
  useEffect(() => {
    if (pageSearch !== null) {
      setSanpham(pageSearch.content);
      genPage(pageSearch.totalPages);
    }
  }, [pageSearch]);
  useEffect(() => {
    getListProduct(currentPage).then((res) => {
      if (res.error !== true && res.data.code === 0) {
        setSanpham(res.data.result.content);
        genPage(res.data.result.totalPages);
      }
    });
  }, [currentPage]);
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="card card-stats">
              <div className="card-header card-header-warning card-header-icon">
                <div className="card-icon">
                  <StoreIcon />
                </div>
                <p className="card-category">Tổng số sản phẩm</p>
                <CountUp start={0} end={soSanPham} redraw={true}>
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
          <div className="card-header card-header-tabs card-header-warning">
            <div className="nav-tabs-navigation">
              <div className="nav-tabs-wrapper row">
                <span className=" nav-tabs-title col-lg-4 pl-2 col-md-4">
                  Bảng quản lý sản phẩm
                </span>
                <div className="nav-item col-lg-4 pt-2 col-md-4 col-sm-6">
                  <button
                    className="nav-link btn btn-warning"
                    href="#profile"
                    data-toggle="tab"
                    onClick={handleOpen}
                  >
                    <AddIcon className="pb-1" /> <span>Thêm sản phẩm </span>
                    <div className="ripple-container"></div>
                  </button>
                </div>
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
                      <button className="btn btn-warning">
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
              <thead className="text-warning">
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Đơn giá</th>
                  <th>Chi tiết</th>
                  <th>Cập nhật </th>
                </tr>
              </thead>
              <tbody>
                {sanpham.map((item, i) => {
                  key=i+1;
                  return <ProductItemAdmin stt={key} sanpham={item} xoaSanpham={xoaSanpham} setOpenView={setOpenView} setOpenUpdate={setOpenUpdate}/>;
                })}
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="site-block-27">
                <MenuList>
                  <MenuItem>
                    <Link
                      to="sanpham"
                      onClick={() => {
                        setCurrentPage(handleMoveLeft());
                      }}
                    >
                      <ArrowBackIcon />
                    </Link>
                  </MenuItem>
                  {pages.map((item, i) => (
                    <li
                      key={i}
                      className={currentPage === item ? "active" : ""}
                    >
                      <Link
                        to="sanpham"
                        onClick={() => {
                          setCurrentPage(item);
                        }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                  <MenuItem>
                    <Link
                      to="sanpham"
                      onClick={() => {
                        setCurrentPage(handleMoveRight());
                      }}
                    >
                      <ArrowForwardIcon />
                    </Link>
                  </MenuItem>
                </MenuList>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddProduct open={open} setOpen={setOpen} themSanPham={themSanPham} />
      <ProductProfile open={openView} setOpen={setOpenView} openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} updateProduct={capNhatSanPham}/>
    </div>
  );
};

export default ProductAdmin;
