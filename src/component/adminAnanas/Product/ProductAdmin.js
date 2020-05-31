import React, { useState, useEffect } from "react";
import StoreIcon from "@material-ui/icons/Store";
import { getSoProduct } from "../../../services/ProductServices";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { MenuList, MenuItem, Input } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddIcon from '@material-ui/icons/Add';
import { getListProduct, addProduct, removeProduct, updateProduct } from "../../../services/AdminService";
import SearchIcon from '@material-ui/icons/Search';
import ProductItemAdmin from "./ProductItemAdmin";
import { alertNotify } from "../../../untils/alert";
import AddProduct from "./AddProduct";
const ProductAdmin = () => {
  const [sanPhamDuocCapNhat, setSanPhamDuocCapNhat]=useState(null);
  const [hideButton, setHideButton]=useState(false);
  const [soSanPham, setSoSanPham] = useState(null);
  const [sanpham, setSanpham] = useState([]);
  const [pageSearch, setPageSearch] = useState(null);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let key = 0;
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
  useEffect(() =>{
    if(pageSearch !== null){
      console.log(pageSearch);
      setSanpham(pageSearch.content)
      genPage(pageSearch.totalPages);
    }
  },[pageSearch])
  useEffect(() => {
    getListProduct(currentPage).then(res => {
      if (res.error !== true && res.data.code === 0) {
        console.log(res.data.result);
        setSanpham(res.data.result.content);
        genPage(res.data.result.totalPages);
      }
    });
  }, [currentPage]);
  useEffect(() => {
    getSoProduct().then((res) => {
      setSoSanPham(res.data.result.length);
    });
  }, []);
  const xoaSanpham = id => {
    removeProduct(id)
      .then(res => {
        if (res.error !== true && res.data.code === 0) {
          getListProduct(currentPage).then(res=>{
            setSanpham(res.data.result.content);
          })
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const capNhatSanPham=(id, value)=>{
    updateProduct(id, value)
    .then((res) => {
      if(res.error !== true){
      alertNotify("Thông Báo", res.data.message, "success");
      getListProduct(currentPage).then(res => {
        setSanpham(res.data.result.content);
      });
      setHideButton(true);
      }
      else{
        alertNotify("Thông Báo","Sai nhập liệu", "warning");
      }
    })	        
  }
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-3 col-sm-3">
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
              <div className="card-footer">
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header card-header-tabs card-header-warning">
            <div className="nav-tabs-navigation">
              <div className="nav-tabs-wrapper row">
                <span className="nav-tabs-title col-lg-4 pl-2">Bảng quản lý sản phẩm</span>
                        <div className="nav-item col-lg-4 pt-2">
                          <button className="nav-link btn btn-warning" href="#profile" data-toggle="tab" onClick={handleOpen}>
                            <AddIcon className="pb-1" /> <span>Thêm sản phẩm </span>
                            <div className="ripple-container"></div>
                          </button>
                        </div>
                        <div className="nav-item col-lg-4">
                          <div className="nav-link " href="#profile" data-toggle="tab">
                            <input type="text" className="form-group pb-1 mr-1" placeholder="Nhập từ khoá ...."/>
                            <button className="btn btn-warning pt-1 pr-1 pl-1 pb-1"><SearchIcon className="pb-1 mr-2"/>
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
                  <th>Tên</th>
                  <th>Đơn giá</th>
                  <th>Chi tiết</th>
                  <th>Cập nhật </th>
                </tr>
              </thead>
              <tbody>
              {sanpham.map((item, i) => {
                  return <ProductItemAdmin key={i} sanpham={item} />;
                })}
              </tbody>
            </table>
          </div>
          <div className="row" data-aos="fade-up">
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
                      <ArrowBackIcon/>
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
                      <ArrowForwardIcon/>
                    </Link>
                  </MenuItem>
                </MenuList>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddProduct open={open} setOpen={setOpen}/>
    </div>
  );
};

export default ProductAdmin;
