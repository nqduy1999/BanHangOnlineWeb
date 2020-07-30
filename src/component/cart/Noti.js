import React from 'react';
import { Link } from 'react-router-dom';

const Noti = () => {
    return (
<div>
  <div className="site-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <span className="icon-check_circle display-3 text-success" />
          <h2 className="display-3 text-black">Cảm ơn bạn!</h2>
          <p className="lead mb-5">Đơn đặt hàng của bạn đã được đặt hoàn tất.</p>
          <p><Link to="/sanpham?type=&keyword=&currentPage=0" className="btn btn-sm btn-primary">Lựa chọn khác</Link></p>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default Noti;