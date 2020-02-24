import React, { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import Axios from 'axios';
import  { useAlertService } from '../../services/useAlertService';
import but_bi from '../../resource/images/but_bi.jpg';
const Cart = (props) => {
  // dùng để lấy query string
    let useQuery = () => {
      return new URLSearchParams(useLocation().search);
    }
    const id = useQuery();
    const action = useQuery();
    const quantity = useQuery();
// các url api
    const url = "http://localhost:8080/api/giohang/dulieu";
    const urlUpdateCart = `http://localhost:8080/api/giohang/capnhat?action=${action.get("action")}&id=${id.get("id")}&quantity=${quantity.get("quantity")}`;
    const urlRemoveProductFromCart = `http://localhost:8080/api/giohang/xoa?id=${id.get("id")}`;
    // THông báo 
    const [checkSuccess, setCheckSuccess] = useState(false);
    const [error, setError] = useState("");
    const [icon, setIcon] = useState("Thành công");
    useAlertService("Thông báo", error, icon, checkSuccess);
    // data
    const [data, setData] = useState({
      maHoaDon: '',
      ngayLapHoaDon: '',
      tongTien: 0,
      danhsachCTHD: [],
      khachHang: null
    });
    const source = Axios.CancelToken.source(); // huỷ request (Rất quan trọng)
    // lấy danh sách sản phẩm đã đặt mua từ session lên cart
    let getOrderFromSession = async () => {
      Axios.defaults.withCredentials = true;
      Axios.get(url, {header: {'Access-Control-Allow-Origin': "*"}}).then(async(res) => {
        const result = await res.data.resutl;
        if(result.danhsachCTHD!=null) {
          await setData({
            maHoaDon: result.maHoaDon,
            ngayLapHoaDon: result.ngayLapHoaDon,
            tongTien: result.tongTien,
            danhsachCTHD: result.danhsachCTHD,
            khachHang: result.khachHang
          });
        }
      }).catch((err) => {
        console.log(err);
      })
    }
    // xử lý tăng giảm và nhập dữ liêu trong input
    let handleUpdateCart = async (action, number, id) => {
      // mở này coi để hiểu tại s code như v
      // console.log(data.danhsachCTHD.map(item => item.sanPham.maSanPham === id ? {...item, soLuong: 10} : item))
      if(action === "handle") {
        setData({
          danhsachCTHD: data.danhsachCTHD.map(item => item.sanPham.maSanPham === id ? {...item, soLuong: item.soLuong + number} : item)
        });
      } else if(action === ""){
        setData({
          danhsachCTHD: data.danhsachCTHD.map(item => item.sanPham.maSanPham === id ? {...item, soLuong: Number(number)} : item)
        });
      }
    }
    // sau khi phương thức này chạy thì mới cập nhật xuống server
    let onUpdateCart = () => {
      Axios.post(urlUpdateCart, data)
      .then( async (res) => {
        const result = await res.data.message;
        setError(result);
        setIcon("error");
        setCheckSuccess(true);
        setCheckSuccess(false);
      })
      .catch(err => {
        console.log(err);
      })
    }
    // xoá sản phẩm (Chưa xog)
    let removeProductFromCart = () => {
      Axios.post(urlRemoveProductFromCart)
      .then((res) => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      })
    }
    useEffect(() => {
      setTimeout(() => {
        getOrderFromSession(source);
      }, 200); // settimeout là vì Set-Cookie của gg cập nhật vào web chậm ko bắt dc khi chuyển sang giỏ hàng sẽ ko xuất hiện sản phẩm vừa mua
      return () => {
        source.cancel();
      };
    }, []); // [] chạy 1 lần


    return (
        <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Hình ảnh</th>
                      <th className="product-name">Sản phẩm</th>
                      <th className="product-price">Đơn giá</th>
                      <th className="product-quantity">Số lượng</th>
                      <th className="product-total">Tổng tiền</th>
                      <th className="product-remove">Xoá sản phẩm</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.danhsachCTHD.map((item, i) => (
                        <tr key={i}>
                        <td className="product-thumbnail">
                          <img src={but_bi} alt="Image" className="img-fluid"/>
                        </td>
                        <td className="product-name">
                          <h2 className="h5 text-black">{item.sanPham.tenSanPham}</h2>
                        </td>
                        <td>{item.sanPham.giaSanPham}</td>
                        <td>
                          <div className="input-group mb-3" style={{maxWidth: '120px'}}>
                            <div className="input-group-prepend">
                              <button onClick={() => {handleUpdateCart("handle", -1, item.sanPham.maSanPham)}} className="pt-1 pr-1 pl-1 btn-outline-primary js-btn-minus" type="button">−</button>
                            </div>
                            <input type="text" className="form-control text-center" onChange={(e) => {handleUpdateCart("", e.target.value, item.sanPham.maSanPham)}} value={item.soLuong} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                            <div className="input-group-append">
                              <button className="btn-outline-primary js-btn-plus" onClick={() => {handleUpdateCart("handle", 1, item.sanPham.maSanPham)}} type="button">+</button>
                            </div>
                          </div>
                        </td>
                        <td>{item.donGia}</td>
                        <td><Link to={`/giohang?id=${item.sanPham.maSanPham}`} onClick={() => {removeProductFromCart()}} className="btn btn-primary btn-sm">X</Link></td>
                      </tr>
                    ))
                  }
                  </tbody>
                </table>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6 mb-3 mb-md-0">
                  <button className="btn btn-primary btn-sm btn-block" onClick={() => {onUpdateCart()}}>Cập nhật giỏ hàng</button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-outline-primary btn-sm btn-block">Tiếp tục mua sắm</button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="text-black h4" htmlFor="coupon">Mã Khuyến Mãi</label>
                  <p>Nhập vào đây mã khuyến mãi nếu bạn có.</p>
                </div>
                <div className="col-md-8 mb-3 mb-md-0">
                  <input type="text" className="form-control py-3" id="coupon" />
                </div>
                <div className="col-md-4">
                  <button className="btn btn-primary btn-sm">Áp Dụng Mã</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">Tổng Giỏ Hàng</h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Tổng Tiền</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">24000 vnd</strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Tiền phải trả</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">24000 vnd</strong>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                   <Link to="/thanhtoan" className="btn btn-primary btn-lg py-3 btn-block">Tiến Hành Kiểm TRA</Link>
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

export default Cart;