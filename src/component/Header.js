import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Link, withRouter } from 'react-router-dom';

import Cookies from 'js-cookie';

import { useForm } from 'react-hook-form';

import { getOrder } from '../services/CartServices';
import { getProductByTextSearch } from '../services/ProductServices';
const Header = (props) => {
  const stateAuth = useSelector(state => state.auth);
  const stateCart = useSelector(state => state.cart);

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  // các url api
  const [anchorEl, setAnchorEl] = useState(null);
  // xử lý dropdown của profile
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
  }, [order]);

  let logout = ()  => {
    dispatch({type: "DELETE"});
    Cookies.remove('username');
    Cookies.remove('authtoken');
  }
  let onSubmit = (data) => {
    getProductByTextSearch(0, data.keyword).then((res) => {
      if(res.error !== true && res.data.code === 0) {
        dispatch({type: "SET_PAGEPRODUCT", pageProduct: res.data.result});
        props.history.replace("/sanpham");
      }
    })
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
                      <span type="submit"><i class="fas fa-search"></i></span>
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
                        <span>
                        <Button aria-controls="simple-menu" className="btn shadow text-secondary" aria-haspopup="true" onClick={handleClick}>
                        <i class="fas fa-user-cog fa-lg pr-1"></i>{stateAuth.user.account.username}
                        </Button>
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}>
                          <MenuItem><Link to={"/" + Cookies.get("username")}><i class="fas fa-user"></i> Tài khoản của tôi</Link></MenuItem>
                          <MenuItem ><Link to="/dangnhap" onClick={() => {logout()}}><i class="fas fa-sign-out-alt"></i> Đăng xuất</Link></MenuItem>
                        </Menu>
                        </span>
                      )
                      : (
                        <li><Link to="/dangnhap" className="btn shadow" ><i className="fas fa-user fa-lg pr-1"></i><span>Đăng nhập</span></Link></li>
                      )
                    }
                      <li>
                        <Link to="/giohang" className="btn ml-3 site-cart shadow">
                        <i className="fas fa-shopping-cart"></i>
                          <span className="count">{stateCart.inventory ? stateCart.inventory : 0 }</span>
                          <span> Giỏ hàng</span>
                        </Link>
                      </li>
                      <li className="d-inline-block d-md-none ml-md-0"><Link to="/" className="site-menu-toggle js-menu-toggle"><span className="icon-menu" /></Link></li>
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
                  <Link to="/sanpham">Sản phẩm</Link>
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