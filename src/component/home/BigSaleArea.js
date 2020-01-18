import React from 'react';
import bia from '../../resource/images/bia.jpg'
import { Link } from 'react-router-dom';
const BigSaleArea = () => {
  return (
    <div className="site-section block-8" id="sale">
    <div className="container">
      <div className="row justify-content-center  mb-5">
        <div className="col-md-7 site-section-heading text-center pt-4">
          <h2>Big Sale!</h2>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-12 col-lg-7 mb-5">
          <Link to="/sanpham"><img src={bia} alt="Image placeholder" className="img-fluid rounded" /></Link>
        </div>
        <div className="col-md-12 col-lg-5 text-center pl-md-5">
          <h2><a href="#">Khuyến mãi 50% cho tất cả các sản phẩm</a></h2>
          <p className="post-meta mb-4">Bởi <a href="#">Duy</a> <span className="block-8-sep">•</span> 12 tháng 1 năm 2020</p>
          <p>Nhân dịp vào ngày bình thường trong năm chúng tôi giảm giá 50% cho tất cả các sản phẩm vì không có ai mua </p>
          <p><Link to="/sanpham" className="btn btn-primary btn-sm">Mua nhanh</Link></p>
        </div>
      </div>
    </div>
  </div>
    );
};

export default BigSaleArea;