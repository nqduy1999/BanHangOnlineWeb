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
  const [inventory, setInventory] = useState(0);
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
        setInventory(total);
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
        props.history.replace("/sanpham?index=0");
      }
    })
  }
    return (
        <div>
          <header className="site-navbar" role="banner">
          <div className="site-navbar-top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                  <form onSubmit={handleSubmit(onSubmit)} className="site-block-top-search">
                    <input name="keyword" type="text"  ref={register({ required: false })} className="form-control border-0" placeholder="Tìm Kiếm" />
                    <button type="submit"><i className="fa fa-search"></i> </button>
                  </form>
                </div>
                <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                  <div className="site-logo">
                    <Link to="/" className="js-logo-clone">Ananas<i className="fab fa-accusoft"></i></Link>
                  </div>
                </div>
                <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                  <div className="site-top-icons">
                    <ul>
                    {
                      stateAuth.user ?
                      (
                        <span>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                          {stateAuth.user.account.username}
                        </Button>
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}>
                          <MenuItem><Link to={"/" + Cookies.get("username")}>Tài khoản của tôi</Link></MenuItem>
                          <MenuItem ><Link to="/dangnhap" onClick={() => {logout()}}>Đăng xuất</Link></MenuItem>
                        </Menu>
                        </span>
                      )
                      : (
                        <li><Link to="/dangnhap" ><i className="fa fa-user"></i></Link></li>
                      )
                    }
                      <li>
                        <Link to="/giohang" className="site-cart">
                        <i className="fa fa-shopping-cart"></i>
                          <span className="count">{stateCart.inventory ? stateCart.inventory : inventory }</span>
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