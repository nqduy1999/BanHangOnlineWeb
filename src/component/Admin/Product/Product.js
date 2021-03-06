import React from "react";
import { useState, useEffect } from "react";
import { alertNotify } from "../../../untils/alert";
import {
  getListProduct,
  removeProduct,
  addProduct,
  updateProduct,
  searchProduct
} from "../../../services/AdminService";
import ProductItem from "./ProductItem";
import Update from "./UpdateProduct";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import ProductDetail from "./ProductDetail";
const Product = () => {
  const { register, handleSubmit } = useForm();
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [hideButton, showButton]=useState(false);
  const [updatePro, getUpdateProduct]=useState(null);
  const [pageSearch, setPageSearch] = useState(null);
  const [addButton, setAddButton] = useState(false);
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
      category: {},
    }
  ]);
  let Search = (data) => {
    console.log(data);
    searchProduct(0, data.keyword).then((res) => {
      console.log(res.data);   
      if(res.error !== true && res.data.code === 0) {
        setPageSearch(res.data.result);
      }
    })
  }
  const removePd = id => {
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
    console.log(value);
    addProduct(value)
      .then(res => {
        console.log(res);
        if (res.data.code === 0) {
          alertNotify("Thông báo", res.data.message, "success");
          getListProduct(currentPage).then(res => {
            setData(res.data.result.content);
          });
          getUpdateProduct(null);
          showButton(true);
        } else {
          alertNotify("Thông báo", res.data.message, "warning");
        }
        showButton(true);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleUpdateProduct=(id, value)=>{
    updateProduct(id, value)
    .then((res) => {
      if(res.error !== true){
      alertNotify("Thông Báo", res.data.message, "success");
      getListProduct(currentPage).then(res => {
        setData(res.data.result.content);
      });
      showButton(true);
      }
      else{
        alertNotify("Thông Báo","Sai nhập liệu", "warning");
      }
    })	        
  }
  useEffect(() =>{
    if(pageSearch !== null){
      console.log(pageSearch);
      setData(pageSearch.content)
      genPage(pageSearch.totalPages);
    }
  },[pageSearch])
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
          <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" onSubmit={handleSubmit(Search)}>
            <div className="input-group">
              <input
                type="text"
                name="keyword"
                ref={register}
                className="form-control bg-light border-0 small"
                placeholder="Tìm kiếm "
              />
              <div className="input-group-append">
                <button className=" btn btn-primary" type="submit">
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
            onClick={()=> {getUpdateProduct(null)
              showButton(false);
              setAddButton(true);
            }}
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
                Hình Ảnh
              </th>
              <th className="column100 column3" data-column="column3">
                Giá
              </th>
              <th className="column100 column4" data-column="column4">
                Xem chi tiết 
              </th>
              <th className="column100 column5" data-column="column5">
                Cập Nhật
              </th>
            </tr>
          </thead>
          {listdata.map((item, i) => {
            return <ProductItem key={i} product={item} removePd={removePd} showButton={showButton} getUpdateProduct={getUpdateProduct} setAddButton={setAddButton}/>;
          })}
        </table>
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
                  <i className="fa fa-arrow-alt-circle-left"></i>
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
                  }}>
                  <i className="fa fa-arrow-circle-right"></i>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Update addButton={addButton} hideButton={hideButton} handleAddSubmit={handleAddProduct} handleUpdateProduct={handleUpdateProduct} updateProduct={updatePro} getUpdateProduct={getUpdateProduct}/>
      {/* <ProductDetail /> */}
    </div>
  );
};

export default Product;
