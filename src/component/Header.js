import React, { useState } from 'react';

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

const Header = () => {
  const [taiKhoan, setTaiKhoan] = useState(null);
  const [matKhau, setMatKhau] = useState(null);
  let registration = () => {
    const user = {

    }
  }
  const submitForm = data => console.log(data);
  
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
              <li><Link to="/" data-toggle="modal" data-target="#modalLoginForm"><span className="icon icon-person" /></Link></li>
              <li><Link to="/"><span className="icon icon-heart-o" /></Link></li>
              <li>
                <Link to="/giohang" className="site-cart">
                  <span className="icon icon-shopping_cart" />
                  <span className="count">2</span>
                </Link>
              </li>
              <li className="d-inline-block d-md-none ml-md-0"><Link to="/" className="site-menu-toggle js-menu-toggle"><span className="icon-menu" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*login modal*/}
  <div className="modal fade" id="modalLoginForm" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header text-center">
          <h4 className="modal-title w-100 font-weight-bold">Đăng Nhập </h4>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body mx-3">
          <div className="md-form mb-5">
            <i className="fas fa-envelope prefix grey-text" />
            <input type="email" id="defaultForm-email" className="form-control validate" />
            <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">Email</label>
          </div>
          <div className="md-form mb-4">
            <i className="fas fa-lock prefix grey-text" />
            <input type="password" id="defaultForm-pass" className="form-control validate" />
            <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Mật khẩu</label>
          </div>
        </div>
        <div className="modal-footer d-flex justify-content-center">
          <button className="btn btn-default">Đăng Nhập</button>
          <button className="btn btn-default" data-toggle="modal" data-target="#modalRegisterForm">Đăng Ký</button>
        </div>
      </div>
    </div>
  </div> 
  {/**/}
  {/*signup modal*/}
  <div className="modal fade" id="modalRegisterForm" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <form onSubmit={submitForm}>
          <div className="modal-header text-center">
          <h4 className="modal-title w-100 font-weight-bold">Đăng Ký</h4>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body mx-3">
          <div className="md-form mb-5">
            <i className="fas fa-user prefix grey-text" />
            <input type="text" id="orangeForm-name" className="form-control validate" />
            <label data-error="wrong" data-success="right" htmlFor="orangeForm-name">Tên của bạn</label>
          </div>
          <div className="md-form mb-5">
            <i className="fas fa-envelope prefix grey-text" />
            <input type="email" id="orangeForm-email" className="form-control validate" />
            <label data-error="wrong" data-success="right" htmlFor="orangeForm-email">Email</label>
          </div>
          <div className="md-form mb-4">
            <i className="fas fa-lock prefix grey-text" />
            <input type="password" id="orangeForm-pass" className="form-control validate" />
            <label data-error="wrong" data-success="right" htmlFor="orangeForm-pass">Mật khẩu</label>
          </div>
        </div>
        <div className="modal-footer d-flex justify-content-center">
          <button type="submit" className="btn btn-deep-orange">Đăng Ký</button>
        </div>
      </form>
      </div>
    </div>
  </div>
  {/**/}
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
          <Link to="/sanpham">Sản phẩm</Link>
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