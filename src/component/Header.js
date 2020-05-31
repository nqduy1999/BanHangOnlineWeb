import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Link, withRouter } from 'react-router-dom';

import Cookies from 'js-cookie';

import { useForm } from 'react-hook-form';

import { getOrder } from '../services/CartServices';
const Header = (props) => {
  const stateAuth = useSelector(state => state.auth);
  const stateCart = useSelector(state => state.cart);

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const order = getOrder();
  useEffect(() => {
    order.then((res) => {
      if(res.error === false && res.data.code === 0) {
        let total = 0;
        res.data.result.listOrderDetail.map((item) => {
          total += item.quantity;
        })
        dispatch({type: "CHANGE_INVENTORY", inventory: total});
      }
    });
  }, []);

  let logout = ()  => {
    dispatch({type: "DELETE"});
    Cookies.remove('username');
    Cookies.remove('authtoken');
  }
  let onSubmit = (data) => {
      props.history.replace(`/sanpham?type=search&keyword=${data.keyword}&currentPage=0`);
  }
    return (
        <div>
          <header className="site-navbar" role="banner">
          <div className="site-navbar-top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-4 order-2 order-md-1 site-search-icon text-left">
                  <form onSubmit={handleSubmit(onSubmit)} className="row">
                    <div className="col-10">
                      <input name="keyword" type="text"  ref={register({ required: false })} className="form-control border-0" placeholder="Tìm Kiếm" />
                    </div>
                    <div className="col-2">
                      <span type="submit"><i className="fas fa-search"></i></span>
                    </div>
                  </form>
                </div>
                <div className="col-md-4 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                  <div className="site-logo">
                    <Link to="/" className="js-logo-clone">Ananas<i className="fab fa-accusoft"></i></Link>
                  </div>
                </div>
                <div className="col-md-4 col-md-4 order-3 order-md-3 text-right">
                  <div className="site-top-icons">
                    <ul>
                    {
                      stateAuth.user ?
                      (
                        <span className="dropdown">
                          <button className="btn btn-white mr-2 mb-1 mt-1 text-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-user-cog fa-lg pr-1"></i><span className="d-none d-lg-inline">{stateAuth.user.account.username}</span>
                          </button>
                          <div className="dropdown-menu" style={{width: "100%"}} aria-labelledby="dropdownMenuButton">
                            <Link className="pl-2" to={"/" + Cookies.get("username")}><i className="fas fa-user"></i> Tài khoản của tôi</Link> <br/>
                            {
                              stateAuth.user.account.roles ? stateAuth.user.account.roles.map((role, key) =>(
                                role.name === 'ADMIN' ?  <Link key={key} className="pl-2" to={"/admin"}><i className="fas fa-user-shield"></i> Quản lý</Link>
                                : ""
                              )): ""
                            } <br/>
                            <Link className="pl-2" to="/dangnhap" onClick={() => {logout()}}><i className="fas fa-sign-out-alt"></i> Đăng xuất</Link>
                          </div>
                        </span>
                      )
                      : (
                        <li><Link to="/dangnhap" className="btn btn-primary mb-1 " ><i className="fas fa-user fa-lg pr-1"></i><span className="d-none d-lg-inline">Đăng nhập</span></Link></li>
                      )
                    }
                      <li>
                        <Link to="/giohang" className="btn site-cart btn-primary mb-1 mt-1">
                        <i className="fas fa-shopping-cart"></i>
                          <span className="count">{stateCart.inventory ? stateCart.inventory : 0 }</span>
                          <span className="d-inline-block d-md-none"> Giỏ hàng</span>
                        </Link>
                      </li>
                      <li className="d-none"><a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="site-navigation text-right text-md-center " id="header-nav" role="navigation">
            <div className="container">
              <ul className="site-menu js-clone-nav d-none d-md-block">
                <li >
                  <Link to="/">Trang chủ</Link>
                </li>
                <li>
                  <Link to="/gioithieu">Giới thiệu</Link>
                </li>
                <li>
                  <Link to="/sanpham?type=&keyword=&currentPage=0">Sản phẩm</Link>
                </li>
                <li><Link to="/lienhe">Liên Hệ</Link></li>
              </ul>
            </div>
          </nav>
        </header>

        </div>
    );
};

export default withRouter(Header);