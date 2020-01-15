import React from 'react';

import bao_thu_a3 from '../../resource/images/bao_thu_a3.jpg';
import bao_thu_trang from '../../resource/images/bao_thu_trang.jpg';
import but_3_cay from '../../resource/images/but_3_cay.jpg';
import but_bi from '../../resource/images/but_bi.jpg';
import but_bi_xanh from '../../resource/images/but_bi_xanh.jpg';
import but_do from '../../resource/images/but_do.jpg';
import giay_in_mau from '../../resource/images/giay_in_mau.jpg';
import giay_ke_ngang from '../../resource/images/giay_ke_ngang.jpg';
import kiem_cat_da from '../../resource/images/kiem_cat_da.jpg';
import luoc_chai_dau from '../../resource/images/luoc_chai_dau.png';
import nuoc_suc_mieng from '../../resource/images/nuoc_suc_mieng.jpg';
import tam_xia_rang from '../../resource/images/tam_xia_rang.jpg';
const ProductSection = () => {
    return (
        <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-9 order-2">
              <div className="row">
                <div className="col-md-12 mb-5">
                  <div className="float-md-left mb-4"><h2 className="text-black h5">Tất cả sản phẩm</h2></div>
                  <div className="d-flex">
                    <div className="dropdown mr-1 ml-md-auto">
                      <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Thời gian
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                        <a className="dropdown-item" href="#">Mới nhất</a>
                        <a className="dropdown-item" href="#">Cũ nhất</a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Bộ lọc</button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                        <a className="dropdown-item" href="#">Tên, từ A đến Z</a>
                        <a className="dropdown-item" href="#">Tên, từ Z đến A</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Giá, thấp đến cao</a>
                        <a className="dropdown-item" href="#">Giá, cao đến thấp</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-sm-6 col-lg-4 mb-4">
                  <div className="block-4 text-center border">
                    <figure className="block-4-image">
                      <a href="shop-single.html"><img src={bao_thu_a3} alt="Image placeholder" className="img-fluid" /></a>
                    </figure>
                    <div className="block-4-text p-4">
                      <h3><a href="shop-single.html">Bao thư A3</a></h3>
                      <p className="mb-0">Bao thư A3 chất lượng tốt</p>
                      <p className="text-primary font-weight-bold">4.000đ</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                  <div className="block-4 text-center border">
                    <figure className="block-4-image">
                      <a href="shop-single.html"><img src={bao_thu_trang} alt="Image placeholder" className="img-fluid" /></a>
                    </figure>
                    <div className="block-4-text p-4">
                      <h3><a href="shop-single.html">Bao thư trắng</a></h3>
                      <p className="mb-0">Bao thư trắng tinh</p>
                      <p className="text-primary font-weight-bold">2.000đ</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4" >
                  <div className="block-4 text-center border">
                    <figure className="block-4-image">
                      <a href="shop-single.html"><img src={but_3_cay} alt="Image placeholder" className="img-fluid" /></a>
                    </figure>
                    <div className="block-4-text p-4">
                      <h3><a href="shop-single.html">Bút bi thiên long TL034 - Xanh</a></h3>
                      <p className="mb-0">Loại bút thiên long viết cực tốt</p>
                      <p className="text-primary font-weight-bold">10.000đ</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                  <div className="block-4 text-center border">
                    <figure className="block-4-image">
                      <a href="shop-single.html"><img src={but_bi_xanh} alt="Image placeholder" className="img-fluid" /></a>
                    </figure>
                    <div className="block-4-text p-4">
                      <h3><a href="shop-single.html">Bút bi Thiên Long - Xanh</a></h3>
                      <p className="mb-0">Bút fake giá rẻ</p>
                      <p className="text-primary font-weight-bold">1.000đ</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4" >
                  <div className="block-4 text-center border">
                    <figure className="block-4-image">
                      <a href="shop-single.html"><img src={but_bi} alt="Image placeholder" className="img-fluid" /></a>
                    </figure>
                    <div className="block-4-text p-4">
                      <h3><a href="shop-single.html">Bút bi tầm thường</a></h3>
                      <p className="mb-0">Loại siêu dỏm bán theo lô, 1 lô 10 cây</p>
                      <p className="text-primary font-weight-bold">5.000đ</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4" >
                  <div className="block-4 text-center border">
                    <figure className="block-4-image">
                      <a href="shop-single.html"><img src={but_do} alt="Image placeholder" className="img-fluid" /></a>
                    </figure>
                    <div className="block-4-text p-4">
                      <h3><a href="shop-single.html">Bút bi đỏ</a></h3>
                      <p className="mb-0">Bút đỏ sắc nét</p>
                      <p className="text-primary font-weight-bold">3.000đ</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4" >
                  <div className="block-4 text-center border">
                    <figure className="block-4-image">
                      <a href="shop-single.html"><img src={giay_in_mau} alt="Image placeholder" className="img-fluid" /></a>
                    </figure>
                    <div className="block-4-text p-4">
                      <h3><a href="shop-single.html">Giáy in màu</a></h3>
                      <p className="mb-0">Giấy in các loại màu</p>
                      <p className="text-primary font-weight-bold">2.000đ</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                  <div className="block-4 text-center border">
                    <figure className="block-4-image">
                      <a href="shop-single.html"><img src={giay_ke_ngang} alt="Image placeholder" className="img-fluid" /></a>
                    </figure>
                    <div className="block-4-text p-4">
                      <h3><a href="shop-single.html">Giấy kẻ ngang</a></h3>
                      <p className="mb-0">Giấy kẻ ngang siêu rõ</p>
                      <p className="text-primary font-weight-bold">3.000đ</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4" >
                  <div className="block-4 text-center border">
                    <figure className="block-4-image">
                      <a href="shop-single.html"><img src={kiem_cat_da} alt="Image placeholder" className="img-fluid" /></a>
                    </figure>
                    <div className="block-4-text p-4">
                      <h3><a href="shop-single.html">Kiềm cắt da - cắt móng</a></h3>
                      <p className="mb-0">Cắt da, cắt móc làm đẹp</p>
                      <p className="text-primary font-weight-bold">15.000đ</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                  <div className="block-4 text-center border">
                    <figure className="block-4-image">
                      <a href="shop-single.html"><img src={luoc_chai_dau} alt="Image placeholder" className="img-fluid" /></a>
                    </figure>
                    <div className="block-4-text p-4">
                      <h3><a href="shop-single.html">Lược chải đầu</a></h3>
                      <p className="mb-0">Chải xong đẹp trai, đẹp gái</p>
                      <p className="text-primary font-weight-bold">12.000đ</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                  <div className="block-4 text-center border">
                    <figure className="block-4-image">
                      <a href="shop-single.html"><img src={nuoc_suc_mieng} alt="Image placeholder" className="img-fluid" /></a>
                    </figure>
                    <div className="block-4-text p-4">
                      <h3><a href="shop-single.html">Nước súc miệng</a></h3>
                      <p className="mb-0">Nước súc miệng giệt sạch sâu trong răng</p>
                      <p className="text-primary font-weight-bold">40.000đ</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4" >
                  <div className="block-4 text-center border">
                    <figure className="block-4-image">
                      <a href="shop-single.html"><img src={tam_xia_rang} alt="Image placeholder" className="img-fluid" /></a>
                    </figure>
                    <div className="block-4-text p-4">
                      <h3><a href="shop-single.html">Tâm xỉa răng</a></h3>
                      <p className="mb-0">Xỉa tới từng khe</p>
                      <p className="text-primary font-weight-bold">17.000đ</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" >
                <div className="col-md-12 text-center">
                  <div className="site-block-27">
                    <ul>
                      <li><a href="#">&lt;</a></li>
                      <li className="active"><span>1</span></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#">&gt;</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 order-1 mb-5 mb-md-0">
              <div className="border p-4 rounded mb-4">
                <h3 className="mb-3 h6 text-uppercase text-black d-block">Dịch vụ</h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-1"><a href="#" className="d-flex"><span>Đang giảm giá</span> <span className="text-black ml-auto">(2,220)</span></a></li>
                  <li className="mb-1"><a href="#" className="d-flex"><span>Mua nhiều</span> <span className="text-black ml-auto">(2,550)</span></a></li>
                  <li className="mb-1"><a href="#" className="d-flex"><span>Yêu thích</span> <span className="text-black ml-auto">(2,124)</span></a></li>
                </ul>
              </div>
              <div className="border p-4 rounded mb-4">
                <div className="mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">Lọc bằng giá</h3>
                  <div id="slider-range" className="border-primary" />
                  <input type="text" name="text" id="amount" className="form-control border-0 pl-0 bg-white" disabled />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="site-section site-blocks-2">
                <div className="row justify-content-center text-center mb-5">
                  <div className="col-md-7 site-section-heading pt-4">
                    <h2>Hàng vừa xem</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" >
                    <a className="block-2-item" href="#">
                      <figure className="image">
                        <img src={bao_thu_trang} alt="" className="img-fluid" />
                      </figure>
                      <div className="text">
                        <h3>Bao thư trắng</h3>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
                    <a className="block-2-item" href="#">
                      <figure className="image">
                        <img src={but_3_cay} alt="" className="img-fluid" />
                      </figure>
                      <div className="text">
                        <h3>Bút bi thiên long</h3>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
                    <a className="block-2-item" href="#">
                      <figure className="image">
                        <img src={but_bi_xanh} alt="" className="img-fluid" />
                      </figure>
                      <div className="text">
                        <h3>Bút bi xanh</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductSection;