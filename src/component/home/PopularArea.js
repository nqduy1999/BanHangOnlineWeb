import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Link } from 'react-router-dom';

import cuonso from '../../resource/images/cuon_so.jpeg';
import maytinh from '../../resource/images/may_tinh.jpg';
import mucin from '../../resource/images/muc_in.jpg';

const PopularArea = () => {
  // const options = {
  //     items: 3,
  //     loop: true,
  //     margin: 0,
  //     autoplayHoverPause: true,
  //     dots: true,
  //     autoplay: 2000,
  // }
  return (
    <div>
    <div className="site-section site-blocks-2">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay>
            <Link to="/sanpham" className="block-2-item" >
              <figure className="image">
                <img src={maytinh} alt="" className="img-fluid" />
              </figure>
              <div className="text">
                <span className="text-uppercase">từa lưa loại</span>
                <h3>Máy tính cầm tay</h3>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay={100}>
            <Link to="/sanpham" className="block-2-item" href="#">
              <figure className="image">
                <img src={cuonso} alt="" className="img-fluid" />
              </figure>
              <div className="text">
                <span className="text-uppercase">đủ các loai sổ</span>
                <h3>Sổ - Tập</h3>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay={200}>
            <a className="block-2-item" href="#">
              <figure className="image">
                <img src={mucin} alt="" className="img-fluid" />
              </figure>
              <div className="text">
                <span className="text-uppercase">đủ các loại màu</span>
                <h3>Mực In</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
   </div>
    );
};

export default PopularArea;