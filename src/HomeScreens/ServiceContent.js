import React from 'react';

const ServiceContent = () => {
    return (
      <div className="site-blocks-cover" style={{ backgroundimage:`url(require("images bia.jpg"))` }}data-aos="fade">
      <div className="container">
        <div className="row align-items-start align-items-md-center justify-content-end">
          <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
            <h1 className="mb-2">Chúng tôi cung cấp những sản phẩm văn phòng tốt nhất. </h1>
            <div className="intro-text text-center text-md-left">
              <p className="mb-4" />
              <p>
                <a href="#" className="btn btn-sm btn-primary">Mua Ngay</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ServiceContent;