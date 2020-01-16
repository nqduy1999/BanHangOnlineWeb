import React from 'react';

import bao_thu_trang from '../../resource/images/bao_thu_trang.jpg';
import bia from '../../resource/images/bia.jpg';
import cuonso from '../../resource/images/cuon_so.jpeg';
import in_mau from '../../resource/images/giay_in_mau.jpg';
import maytinh from '../../resource/images/may_tinh.jpg';
import mucin from '../../resource/images/muc_in.jpg';
import nuoc_suc_mieng from '../../resource/images/nuoc_suc_mieng.jpg';
import truong from '../../resource/images/truong.jpg';
const PopularArea = () => {
  return (
    <div>
    <div className="site-section site-blocks-2">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay>
            <a className="block-2-item" href="#">
              <figure className="image">
                <img src={maytinh} alt="" className="img-fluid" />
              </figure>
              <div className="text">
                <span className="text-uppercase">từa lưa loại</span>
                <h3>Máy tính cầm tay</h3>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay={100}>
            <a className="block-2-item" href="#">
              <figure className="image">
                <img src={cuonso} alt="" className="img-fluid" />
              </figure>
              <div className="text">
                <span className="text-uppercase">đủ các loai sổ</span>
                <h3>Sổ - Tập</h3>
              </div>
            </a>
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
    <div className="site-section block-3 site-blocks-2 bg-light" id="feature">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 site-section-heading text-center pt-4">
            <h2>Sản Phẩm Bán Chạy</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="nonloop-block-3 owl-carousel">
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img src={bia} alt="Image placeholder" className="img-fluid" />
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><a href="#">Bìa Giấy A3 </a></h3>
                    <p className="mb-0">Bìa giấy tốt nhất</p>
                    <p className="text-primary font-weight-bold">1000d</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img src={bao_thu_trang} alt="Image placeholder" className="img-fluid" />
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><a href="#">Bao thư trắng</a></h3>
                    <p className="mb-0"> bao thư trắng như tâm hồn của bạn </p>
                    <p className="text-primary font-weight-bold">4000d</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img src={in_mau} alt="Image placeholder" className="img-fluid" />
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><a href="#">Giấy in màu</a></h3>
                    <p className="mb-0">In bảy màu luôn á </p>
                    <p className="text-primary font-weight-bold">2000d</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img src={truong} alt="Image placeholder" className="img-fluid" />
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><a href="#">Liêm sỉ của Trường</a></h3>
                    <p className="mb-0">Hàng Tặng không bán vì bán ai mua :( </p>
                    <p className="text-primary font-weight-bold">-$0</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img src={nuoc_suc_mieng} alt="Image placeholder" className="img-fluid" />
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><a href="#">Nước súc miệng </a></h3>
                    <p className="mb-0">Dành cho ~ đỗ nghèo khỉ miệng thúi</p>
                    <p className="text-primary font-weight-bold">40000d</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
};

export default PopularArea;