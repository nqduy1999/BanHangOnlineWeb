import React from "react";
import { useState, useEffect } from "react";
import { alertNotify } from "../../../untils/alert";
import {
  getListProduct,
  removeProduct,
  addProduct,
  updateProduct
} from "../../../services/AdminService";
import ProductItem from "./ProductItem";
import AddProduct from "./AddProduct";
import { Link } from "react-router-dom";
const Product = () => {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  let genPage = total => {
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
  const [listdata, setData] = useState([
    {
      id: "",
      name: "",
      description: "",
      price: "",
      inventory: "",
      supplier: {},
      category: {}
    }
  ]);
  let removePd = id => {
    removeProduct(id)
      .then(res => {
        if (res.error !== true && res.data.code === 0) {
          getListProduct(currentPage).then(res=>{
            setData(res.data.result.content);
          })
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleAddProduct = value => {
    addProduct(value)
      .then(res => {
        console.log(res);
        if (res.data.code === 0) {
          alertNotify("Thông báo", res.data.message, "success");
        } else {
          alertNotify("Thông báo", res.data.message, "warning");
        }
        getListProduct(currentPage).then(res => {
          setData(res.data.result.content);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getListProduct(currentPage).then(res => {
      if (res.error !== true && res.data.code === 0) {
        setData(res.data.result.content);
        genPage(res.data.result.totalPages);
      }
    });
  }, [currentPage]);
  return (
    <div>
      <div className="d-flex flex-row bd-highlight">
        <div className="p-2 bd-highlight ml-5  pl-5 pr-5">
          <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input
                type="text"
                className="form-control bg-light border-0 small"
                placeholder="Tìm kiếm "
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className=" btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="p-2 bd-highlight ml-5 ">
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#modalPoll-1"
          >
            Thêm sản phẩm
          </button>
        </div>
      </div>
      <div className="table100 ver1 m-b-110">
        <table data-vertable="ver1">
          <thead>
            <tr className="row100 head">
              <th className="column100 column1" data-column="column1">
                Tên Sản phẩm
              </th>
              <th className="column100 column2" data-column="column2">
                Mã Sản Phẩm
              </th>
              <th className="column100 column3" data-column="column3">
                Mô Tả
              </th>
              <th className="column100 column4" data-column="column4">
                Giá
              </th>
              <th className="column100 column5" data-column="column5">
                Số Lượng
              </th>
              <th className="column100 column6" data-column="column6">
                Hình Ảnh
              </th>
              <th className="column100 column7" data-column="column7">
                Nhà cung cấp
              </th>
              <th className="column100 column8" data-column="column8">
                Loại{" "}
              </th>
              <th className="column100 column9" data-column="column">
                Cập Nhật
              </th>
            </tr>
          </thead>
          {listdata.map((item, i) => {
            return <ProductItem key={i} product={item} removePd={removePd} />;
          })}
        </table>
        <div></div>
      </div>
      {listdata.map(item => {
        return <div></div>;
      })}
      <div className="row" data-aos="fade-up">
        <div className="col-md-12 text-center">
          <div className="site-block-27">
            <ul>
              <li>
                <Link
                  to="danhsachsanpham"
                  onClick={() => {
                    setCurrentPage(handleMoveLeft());
                  }}
                >
                  <i class="fa fa-arrow-alt-circle-left"></i>
                </Link>
              </li>
              {pages.map((item, i) => (
                <li key={i} className={currentPage === item ? "active" : ""}>
                  <Link
                    to="danhsachsanpham"
                    onClick={() => {
                      setCurrentPage(item);
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="danhsachsanpham"
                  onClick={() => {
                    setCurrentPage(handleMoveRight());
                  }}
                >
                  <i class="fa fa-arrow-circle-right"></i>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <AddProduct product={listdata} handleAddSubmit={handleAddProduct} />
    </div>
  );
};

export default Product;
