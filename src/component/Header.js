import React from 'react';
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
            <a href="index.html" className="js-logo-clone">Ananas</a>
          </div>
        </div>
        <div className="col-6 col-md-4 order-3 order-md-3 text-right">
          <div className="site-top-icons">
            <ul>
              <li><a href="#" data-toggle="modal" data-target="#modalLoginForm"><span className="icon icon-person" /></a></li>
              <li><a><span className="icon icon-heart-o" /></a></li>
              <li>
                <a href="./html/cart.html" className="site-cart">
                  <span className="icon icon-shopping_cart" />
                  <span className="count">2</span>
                </a>
              </li> 
              <li className="d-inline-block d-md-none ml-md-0"><a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu" /></a></li>
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
          <button className="btn btn-deep-orange">Đăng Ký</button>
        </div>
      </div>
    </div>
  </div>
  {/**/}
  <nav className="site-navigation text-right text-md-center " id="header-nav" role="navigation">
    <div className="container">
      <ul className="site-menu js-clone-nav d-none d-md-block">
        <li className="active">
          <a href="../index.html">Trang chủ</a>
        </li>
        <li>
          <a href="./html/about.html">Giới thiệu</a>
        </li>
        <li className="has-children">
          <a href="./html/sanpham.html">Sản phẩm</a>
          <ul className="dropdown">
            <li className="has-children">
              <a href="#">Máy tính - Thiết bị văn phòng </a>
              <i className="fa fa-angle-down" />
              <ul className="dropdown">
                <li><a>Máy tính casio </a></li>
                <li><a>Chuột máy tính bàn phím </a></li>
                <li><a>Ổ cắm điện - phích cắm </a></li>
                <li><a>Pin - CD - DVD - USB - Điện thoại bàn </a></li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">Mực in - Bút</a>
              <ul className="dropdown">
                <li><a>Bút bi thiên long</a></li>
                <li><a>Bút bi - Bút nước - Bút ký</a></li>
                <li><a>Bút dạ quang - Lông bảng - Lông dầu</a></li>
                <li><a>Bút xoá</a></li>
                <li><a>Bút chì  - Ruột chì - Tẩy - Chuốt</a></li>
                <li><a>Mực dấu - Mực lông bản - Mực dầu</a></li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">Sổ - Tập</a>
              <ul className="dropdown">
                <li><a>Tập vở - Bao thư</a></li>
                <li><a>Sổ Namecard - Hộp Đựng Namecard</a></li>
                <li><a>Ổ cắm điện - phích cắm</a></li>
                <li><a>Phiếu thu chi - Phiếu xuất nhập kho</a></li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">Bách hoá văn phòng </a>
              <ul className="dropdown">
                <li><a>Chăm sóc sức khoẻ và sắc đẹp</a></li>
                <li><a >Thực phẩm văn phòng</a></li>
                <li><a >Chất tẩy rửa - giấy vệ sinh - Khăn giấy</a></li>
                <li><a >Bảo hộ lao động</a></li>
                <li><a >Văn phòng phẩm khác</a></li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">Bảng viết - Bút lông</a>
              <ul className="dropdown">
                <li><a>Máy tính casio</a></li>
                <li><a>Chuột máy tính bàn phím</a></li>
                <li><a >Ổ cắm điện - phích cắm</a></li>
                <li><a>Pin - CD - DVD - USB - Điện thoại bàn</a></li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">Giấy in văn phòng</a>
              <ul className="dropdown">
                <li><a >Giấy văn phòng phẩm - Giấy photo</a></li>
                <li><a >Bìa thái - Giấy FO màu - Bìa kiếng</a></li>
                <li><a >Giấy in màu - In ảnh - Giấy kẻ ngang</a></li>
                <li><a >Pin - CD - DVD - USB - Điện thoại bàn</a></li>
              </ul>
            </li>
            <li><a href="#">Combo Văn phòng phẩm</a></li>
          </ul>
        </li>
        <li><a href="./html/contact.html">Liên Hệ</a></li>
      </ul>
    </div>
  </nav>
</header>

        </div>
    );
};

export default Header;