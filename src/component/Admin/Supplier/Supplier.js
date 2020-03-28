import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getListSupplier } from '../../../services/AdminService';
import SupplierItem from './SupplierItem';
const Supplier = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [pages, setPages] = useState([]);
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
      const [supplier, setSupplier] = useState([
        {
          name: "",
          description: "",
        }
      ]);
      useEffect(() => {
        getListSupplier(currentPage).then(res => {
          if (res.error !== true && res.data.code === 0) {
            setSupplier(res.data.result.content);
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
            data-target="#capnhat"
          >
            Thêm nhà cung cấp
          </button>
        </div>
      </div>
        <div className="table100 ver1 m-b-110">
        <table data-vertable="ver1">
          <thead>
            <tr className="row100 head">
              <th className="column100 column1" data-column="column1">
                Mã nhà cung cấp
              </th>
              <th className="column100 column2" data-column="column2">
                Tên nhà cung cấp
              </th>
              <th className="column100 column3" data-column="column3">
                Mô tả nhà cung cấp
              </th>
              <th className="column100 column4" data-column="column">
                Cập Nhật
              </th>
            </tr>
          </thead>
          {supplier.map((item, i) => {
            return <SupplierItem key={i} supplier={item}/>;
          })}        </table>
        <div></div>
      </div>
      <div className="row" data-aos="fade-up">
        <div className="col-md-12 text-center">
          <div className="site-block-27">
            <ul>
              <li>
                <Link
                  to="admin"
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
                    to="admin"
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
                  to="admin"
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
    </div>
    );
};

export default Supplier;