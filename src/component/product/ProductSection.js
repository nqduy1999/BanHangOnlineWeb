import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { withCookies } from 'react-cookie';

import HashLoader from "react-spinners/HashLoader";

import { useSelector, useDispatch } from 'react-redux';

import Loading from '../loading/Loading';
import { findALlCategory } from '../../services/CategoryServices';
import { getALlProduct, sortByAsc, sortByDesc, findAllProductByCategory } from '../../services/ProductServices';

import ProductCard from './ProductCard';
const ProductSection = (props) => {
  const state = useSelector(state => state.pageProduct);
  const dispatch = useDispatch();
    const [pages, setPages] = useState([]);
    // lấy page hiện tại đang hiển thị
    const [currentPage, setCurrentPage] = useState(0);
    //loading
    const [loading, setLoading] = useState(true);
    // danh sách category
    const [listCategory, setListCategory] = useState([]);
    // lấy danh sách sản phẩm hiển thị

    // hiển thị tổng số trang
    let genPage = (total) => {
      let array = [];
      for (let index = 0; index < total; index++) {
        array.push(index);
      }
      setPages(array);
    }
    // xử lý khi nhấn nút chuyển trang qua trái
    let handleMoveLeft = () => {
      return (currentPage - 1) < 0 ? currentPage : (currentPage - 1);
    }
    // xử lý khi nhấn nút chuyển trang qua phải
    let handleMoveRight = () => {
      return (currentPage + 1) > (pages.length - 1) ? currentPage : (currentPage + 1);
    }
    const [listProduct, setListProduct] = useState([]);
    // sắp xếp tăng dần - fieldSort là thuộc tính cần sắp xếp
    const sortByASC = (index, fieldSort) => {
      sortByAsc(index, fieldSort).then((res) => {
        if(res.error !== true && res.data.code === 0) {
          dispatch({type: "SET_PAGEPRODUCT", pageProduct: res.data.result});
        }
      })
    }
      // sắp xếp giảm dần - fieldSort là thuộc tính cần sắp xếp
    const sortByDESC = (index, fieldSort) => {
      sortByDesc(index, fieldSort).then((res) => {
        if(res.error !== true && res.data.code === 0) {
          dispatch({type: "SET_PAGEPRODUCT", pageProduct: res.data.result});
        }
      })
    }

    const getALLProductByCategory = (index, id) => {
      findAllProductByCategory(index, id).then((res) => {
        if(res.error !== true && res.data.code === 0) {
          dispatch({type: "SET_PAGEPRODUCT", pageProduct: res.data.result});
        }
      })
    }
    // lấy tổng số page
    useEffect(() => {
      if(state.pageProduct) { // state cho tìm kiếm và sắp xếp
        setListProduct(state.pageProduct.content)
        genPage(state.pageProduct.totalPages);
      }
    }, [state]);
    // lấy tổng số page
    useEffect(() => {
        getALlProduct(currentPage).then((res) => { // set khi ko có state
          if(res.error !== true && res.data.code === 0) {
            setListProduct(res.data.result.content)
            genPage(res.data.result.totalPages);
          }
        });
    }, [currentPage]);

    useEffect(() => {
      setLoading(false);
      findALlCategory().then((res) => {
        if(res.error === false && res.data.code === 0) {
          setListCategory(res.data.result);
        }
      })
    }, []);
    useEffect(() => {
      return () => {
        dispatch({type: "DELETE_PAGEPRODUCT"});
      }
    }, []);
    return loading ? <Loading loading={loading}/>  :(
        <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-9 order-2">
              <div className="row">
                <div className="col-md-12 mb-5">
                  <div className="float-md-left mb-4"><h2 className="text-black h5">Tất cả sản phẩm</h2></div>
                  <div className="d-flex">
                    <div className="dropdown mr-1 ml-md-auto">
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Bộ lọc</button>
                      <div style={{cursor: "pointer"}} className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                        <span onClick={() => {sortByASC(currentPage, "name");}} className="dropdown-item">Tên, từ A đến Z</span>
                        <span onClick={() => {sortByDESC(currentPage, "name");}} className="dropdown-item">Tên, từ Z đến A</span>
                        <div className="dropdown-divider" />
                        <span onClick={() => {sortByASC(currentPage, "price");}} className="dropdown-item">Giá, thấp đến cao</span>
                        <span onClick={() => {sortByDESC(currentPage, "price");}} className="dropdown-item">Giá, cao đến thấp</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                {listProduct.map((item, i) => (
                    <ProductCard key={i} id={item.id} url={item.urlImage} name={item.name} description={item.description} price={item.price}/>
                  ))}
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-md-12 text-center">
                  <div className="site-block-27">
                    <ul>
                      <li><Link to="sanpham" onClick={() => {setCurrentPage(handleMoveLeft())}}>&lt;</Link></li>
                      {
                        pages.map((item, i) => (
                          <li key={i} className={currentPage === item ? 'active' : ''}><Link to="sanpham" onClick={() => {setCurrentPage(item)}}>{item}</Link></li>
                        ))
                      }
                      <li><Link to="sanpham"
                      onClick={() => {setCurrentPage(handleMoveRight());
                      }}>&gt;</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 order-1 mb-5 mb-md-0">
              <div className="border p-4 rounded mb-4">
                <h3 className="mb-3 h6 text-uppercase text-black d-block font-weight-bold">Loại sản phẩm</h3>
                <ul className="list-unstyled mb-0 text-primary"  style={{cursor: "pointer"}}>
                      {
                        listCategory.map((item, key) => (
                          <li key={key} className="mb-1" onClick={() => getALLProductByCategory(currentPage, item.id)}><span>{item.name}</span></li>
                        ))
                      }
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="site-section site-blocks-2">
                <div className="row justify-content-center text-center mb-5">
                  <div className="col-md-7 site-section-heading pt-4">
                    <h2>Hàng vừa xem</h2>
                  </div>
                </div>
                <div className="row">
                  <div  style={{cursor: "pointer"}} className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay={100}>
                    <span className="block-2-item" href="#">
                      <figure className="image">
                        <img src="" alt="" className="img-fluid" />
                      </figure>
                      <div className="text">
                        <h3>Bao thư trắng</h3>
                      </div>
                    </span>
                  </div>
                  <div  style={{cursor: "pointer"}} className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay={100}>
                    <span className="block-2-item" href="#">
                      <figure className="image">
                        <img src="" alt="" className="img-fluid" />
                      </figure>
                      <div className="text">
                        <h3>Bút bi thiên long</h3>
                      </div>
                    </span>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay={200}>
                    <span className="block-2-item" href="#">
                      <figure className="image">
                        <img src="" alt="" className="img-fluid" />
                      </figure>
                      <div className="text">
                        <h3>Bút bi xanh</h3>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default withCookies(ProductSection);