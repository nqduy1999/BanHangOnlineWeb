import React from 'react';
import ReactOwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import bao_thu_trang from '../../resource/images/bao_thu_trang.jpg';
import bia from '../../resource/images/bia.jpg';
import in_mau from '../../resource/images/giay_in_mau.jpg';
import nuoc_suc_mieng from '../../resource/images/nuoc_suc_mieng.jpg';
import truong from '../../resource/images/truong.jpg';
const FeatureProduct = () => {
    return (
        <div>
             <div className="site-section block-3 site-blocks-2 bg-light" id="feature">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 site-section-heading text-center pt-4">
            <h2>Sản Phẩm Bán Chạy</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ReactOwlCarousel className="owl-theme">
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
                    <h3><Link to="/">Nước súc miệng </Link></h3>
                    <p className="mb-0">Dành cho ~ đỗ nghèo khỉ miệng thúi</p>
                    <p className="text-primary font-weight-bold">40000d</p>
                  </div>
                </div>
              </div>
            </ReactOwlCarousel>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
};

export default FeatureProduct;