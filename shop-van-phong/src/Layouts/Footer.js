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
const Footer = () => {
    return (
        <div>
<footer className="site-footer border-top">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <div className="row">
          <div className="col-md-12">
            <h3 className="footer-heading mb-4">Chuyển Trang</h3>
          </div>
          <div className="col-md-6 col-lg-4">
            <ul className="list-unstyled">
              <li><a href="index.html">Trang Chủ</a></li><li>
              </li><li><a href="html/sanpham.html">Sản phẩm</a></li>
              <li><a href="html/cart.html">Giỏ Hàng</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4">
            <ul className="list-unstyled">
              <li><a href="html/about.html">Giới thiệu</a></li>
              <li><a href="html/contact.html">Liên hệ</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-lg-3" id="contact">
        <div className="block-5 mb-5">
          <h3 className="footer-heading mb-4">Thông tin liên hệ</h3>
          <ul className="list-unstyled">
            <li className="address">số 14 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, Thành Phố Hồ Chí Minh, Việt Nam</li>
            <li className="phone"><a href="tel://23923929210">+84 0987654321</a></li>
            <li className="email">emailaddress@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

        </div>
    );
};

export default Footer;