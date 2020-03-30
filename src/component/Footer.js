import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="site-footer border-top text-left ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="footer-heading mb-4">Chuyển Trang</h3>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <ul className="list-unstyled">
                      <li><Link to="/">Trang Chủ</Link></li><li>
                      </li><li><Link to="/sanpham">Sản phẩm</Link></li>
                      <li><Link to="/giohang">Giỏ Hàng</Link></li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <ul className="list-unstyled">
                      <li><Link to="/gioithieu">Giới thiệu</Link></li>
                      <li><Link to="/lienhe">Liên hệ</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-lg-3" id="contact">
                <div className="block-5 mb-5">
                  <h3 className="footer-heading mb-4">Thông tin liên hệ</h3>
                  <ul className="list-unstyled">
                  <li> <i className="fa fa-location-arrow"></i> Số 14 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, Thành Phố Hồ Chí Minh, Việt Nam</li>
                    <li> <i className="fa fa-phone"></i><a href="tel://23923929210"> +84 0987654321</a></li>
                    <li> <i className="fa fa-envelope"></i> emailaddress@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
    );
};

export default Footer;