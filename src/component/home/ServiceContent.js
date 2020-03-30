import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import bia from '../../resource/images/bia.jpg';
const ServiceContent = () => {
  return (
      <div className="site-blocks-cover card rounded-lg shadow" style={{ backgroundImage: `url(${bia})`}} data-aos="fade">
      <div className="container">
        <div className="row align-items-start align-items-md-center justify-content-end">
          <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
            <h1 className="mb-2">Chúng tôi cung cấp những sản phẩm văn phòng tốt nhất. </h1>
            <div className="intro-text text-center text-md-left">
              <p className="mb-4" />
              <p>
                <Link to="/sanpham" className="btn btn-sm btn-primary"><i className="fas fa-shopping-cart"></i> Mua Ngay</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ServiceContent;