import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import "../resource/icomoon/style.css"
import "../resource/css/style.css"
import "../resource/css/bootstrap.min.css"
import "../resource/css/jquery-ui.css"
import "../resource/css/magnific-popup.css"
import "../resource/css/aos.css"
import "../resource/css/owl.carousel.min.css"
import "../resource/css/owl.theme.default.min.css"
import "../resource/css/mdb.min.css"
import "../resource/css/mdb.lite.min.css"
import Cookies from 'js-cookie';
import { getOrder } from '../services/productServices';
const Header = () => {
  const stateAuth = useSelector(state => state.auth);
  const stateCart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  // các url api
  const [inventory, setInventory] = useState(0);
  const order = getOrder();
  useEffect(() => {
    order.then((res) => {
      if(res.error === false && res.data.code === 0) {
        let total = 0;
        res.data.result.danhsachCTHD.map((item) => {
          total += item.soLuong;
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

    return (
        <div>
    <header className="site-navbar" role="banner">
  <div className="site-navbar-top">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
          <form className="site-block-top-search">
            <span className="icon icon-search2" />
            <input type="text" className="form-control border-0" placeholder="Tìm Kiếm" />
          </form>
        </div>
        <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
          <div className="site-logo">
            <Link to="/" className="js-logo-clone">Ananas</Link>
          </div>
        </div>
        <div className="col-6 col-md-4 order-3 order-md-3 text-right">
          <div className="site-top-icons">
            <ul>
            {
              stateAuth.user ?
              (
                <span>
                <li className="pr-2"><span>{stateAuth.user.taiKhoan.taiKhoan}</span></li>
                <li><Link to="/dangnhap" onClick={() => {logout()}}><span className="fas fa-sign-out-alt"></span></Link></li>
                </span>
              )
              : (
                <li><Link to="/dangnhap" ><span className="icon icon-person" /></Link></li>
              )
            }
              <li>
                <Link to="/giohang" className="site-cart">
                  <span className="icon icon-shopping_cart" />
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
        <li className="has-children">
          <Link to="/sanpham?index=0">Sản phẩm</Link>
          <ul className="dropdown">
            <li className="has-children">
              <Link to="/may-tinh-thiet-bi-van-phong">Máy tính - Thiết bị văn phòng </Link>
              <i className="fa fa-angle-down" />
              <ul className="dropdown">
                <li><Link to="/may-tinh-casio">Máy tính casio </Link></li>
                <li><Link to="/chuot-banphim">Chuột máy tính bàn phím </Link></li>
                <li><Link to="/o-cam-dien">Ổ cắm điện - phích cắm </Link></li>
                <li><Link to="/pin-cd-dvd-usb">Pin - CD - DVD - USB - Điện thoại bàn </Link></li>
              </ul>
            </li>
            <li className="has-children">
              <Link to="muc-in-but">Mực in - Bút</Link>
              <ul className="dropdown">
                <li><Link to="/but-bi-thien-long">Bút bi thiên long</Link></li>
                <li><Link to="/but-bi-but-nuoc-but-ky">Bút bi - Bút nước - Bút ký</Link></li>
                <li><Link to="/but-da-quang">Bút dạ quang - Lông bảng - Lông dầu</Link></li>
                <li><Link to="/but-xoa">Bút xoá</Link></li>
                <li><Link to="/but-chi">Bút chì  - Ruột chì - Tẩy - Chuốt</Link></li>
                <li><Link to="/muc-dau-muc-long-ban">Mực dấu - Mực lông bản - Mực dầu</Link></li>
              </ul>
            </li>
            <li className="has-children">
              <Link to="/sotap">Sổ - Tập</Link>
              <ul className="dropdown">
                <li><Link to="/tap-vo">Tập vở - Bao thư</Link></li>
                <li><Link to="/namecard">Sổ Namecard - Hộp Đựng Namecard</Link></li>
                <li><Link to="/o-cam-dien">Ổ cắm điện - phích cắm</Link></li>
                <li><Link to="/phieuthuchi">Phiếu thu chi - Phiếu xuất nhập kho</Link></li>
              </ul>
            </li>
            <li className="has-children">
              <Link to="/bachhoavanphong">Bách hoá văn phòng </Link>
              <ul className="dropdown">
                <li><Link to="/chamsocsuckhoe">Chăm sóc sức khoẻ và sắc đẹp</Link></li>
                <li><Link to="/thucphamvanphong">Thực phẩm văn phòng</Link></li>
                <li><Link to="/chattayrua">Chất tẩy rửa - giấy vệ sinh - Khăn giấy</Link></li>
                <li><Link to="/baoholaodong">Bảo hộ lao động</Link></li>
                <li><Link to="/vanphongphamkhac">Văn phòng phẩm khác</Link></li>
              </ul>
            </li>
            <li className="has-children">
              <Link to="/bangviet">Bảng viết - Bút lông</Link>
              <ul className="dropdown">
                <li><Link to="/maytinhcasio">Máy tính casio</Link></li>
                <li><Link to="/chuotmaytinh">Chuột máy tính bàn phím</Link></li>
                <li><Link to="/ocamdien">Ổ cắm điện - phích cắm</Link></li>
                <li><Link to="/pincd">Pin - CD - DVD - USB - Điện thoại bàn</Link></li>
              </ul>
            </li>
            <li className="has-children">
              <Link to="/giayinvanphong">Giấy in văn phòng</Link>
              <ul className="dropdown">
                <li><Link to="/giayvanphong">Giấy văn phòng phẩm - Giấy photo</Link></li>
                <li><Link to="/biathai">Bìa thái - Giấy FO màu - Bìa kiếng</Link></li>
                <li><Link to="/giayinmau">Giấy in màu - In ảnh - Giấy kẻ ngang</Link></li>
                <li><Link to="/pincddvd">Pin - CD - DVD - USB - Điện thoại bàn</Link></li>
              </ul>
            </li>
            <li><Link to="/combovanphongpham">Combo Văn phòng phẩm</Link></li>
          </ul>
        </li>
        <li><Link to="/lienhe">Liên Hệ</Link></li>
      </ul>
    </div>
  </nav>
</header>

        </div>
    );
};

export default Header;