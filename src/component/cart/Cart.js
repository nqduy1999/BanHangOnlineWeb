import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Axios from 'axios';

import postToDoEndpoint from '../../services/postToDoEndpoint';
import useEndpoint from '../../services/useEndpoint';
import but_bi from '../../resource/images/but_bi.jpg';
const Cart = (props) => {
// các url api
    const urlData = "http://localhost:8080/api/giohang/dulieu";
    const urlUpdateCart = `http://localhost:8080/api/giohang/capnhat`;
    // kiểm tra số lượng của sản phẩm mua
    const [inventory, setInventory] = useState(1000);
    // lấy danh sách sản phẩm đã đặt mua từ session lên cart
    const order = useEndpoint({
      url: urlData,
      method: "GET"
    });
    // data
    const [data, setData] = useState({
      maHoaDon: '',
      ngayLapHoaDon: '',
      tongTien: 0,
      danhsachCTHD: [],
      khachHang: null
    });
    // cập nhật giỏ hàng
    const [newCart, postNewCart] = postToDoEndpoint(urlUpdateCart);
    // xử lý tăng giảm và nhập dữ liêu trong input
    let handleUpdateCart = async (action, id, quantity, price) => {
        // mở này coi để hiểu tại s code như v
        // console.log(data.danhsachCTHD.map(item => item.sanPham.maSanPham === id ? {...item, soLuong: 10} : item))
        // xử lý tổng tiền của toàn bộ
        let total = 0;
        order.data.result.danhsachCTHD.map(item => item.sanPham.maSanPham === id ? total+= (price*quantity) : total += item.donGia)
        // đẩy dữ liệu data lên server để cập nhật khi chỉnh sửa số lượng
        if(action === "tang") { /// dấu +
          if(quantity < inventory) {
            postNewCart({...data,
              tongTien: total + price,
              danhsachCTHD: data.danhsachCTHD.map(item => item.sanPham.maSanPham === id ? {...item,
                donGia: item.sanPham.giaSanPham * (item.soLuong + 1),
                soLuong: item.soLuong + 1
              } : item)
            });
          }
        } else if(action === "giam") { /// dấu -
          if(quantity > 1) {
            postNewCart({...data,
              tongTien: total - price,
              danhsachCTHD: data.danhsachCTHD.map(item => item.sanPham.maSanPham === id ? {...item,
                donGia: price * (item.soLuong - 1),
                soLuong: item.soLuong - 1} : item)
            });
          }
        } else if(action === ""){ /// nhập vào input
            if(quantity >= 1 && quantity <= inventory) { //trong khoản từ 1 - tồn kho
              postNewCart({...data,
                tongTien: total,
                danhsachCTHD: data.danhsachCTHD.map(item => item.sanPham.maSanPham === id ? {...item,
                  donGia: price * Number(quantity),
                  soLuong: quantity} : item)
              });
            } else { // nhập ít hơn 1 hoặc nhiêu hơn số lượng có sẵn
              postNewCart({...data,
                tongTien: total,
                danhsachCTHD: data.danhsachCTHD.map(item => item.sanPham.maSanPham === id ? {...item,
                  donGia: price * inventory,
                  soLuong: inventory} : item)
              });
            }
        }
    }
    // xoá sản phẩm
    let removeProductFromCart = (id) => {
      const urlRemoveProductFromCart = `http://localhost:8080/api/giohang/xoa?id=${id}`
      Axios.post(urlRemoveProductFromCart)
      .then(async (res) => {
        const resutl = await res.data.result;
        setData({...data,
          tongTien: resutl.tongTien,
          danhsachCTHD: resutl.danhsachCTHD
        })
      })
      .catch(err => {
        console.log(err);
      })
    }
    useEffect(() => {
      if(order.complete && order.data.result.danhsachCTHD !== undefined) {
        setData({...order.data,
          maHoaDon: order.data.result.maHoaDon,
          ngayLapHoaDon: order.data.result.ngayLapHoaDon,
          tongTien: order.data.result.tongTien,
          danhsachCTHD: order.data.result.danhsachCTHD,
          khachHang: order.data.result.khachHang
        });
      }
    }, [order]); // [] chạy khi order thay đổi
    useEffect(() => {
      if(newCart.complete) {
        setData({...newCart.data,
          maHoaDon: newCart.data.result.maHoaDon,
          ngayLapHoaDon: newCart.data.result.ngayLapHoaDon,
          tongTien: newCart.data.result.tongTien,
          danhsachCTHD: newCart.data.result.danhsachCTHD,
          khachHang: newCart.data.result.khachHang
        });
      }
    }, [newCart]); // [] chạy khi newCart thay đổi

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
                      order.complete && data.danhsachCTHD.map((item, i) => (
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
                              <button onClick={() => {handleUpdateCart("giam", item.sanPham.maSanPham, item.soLuong, item.sanPham.giaSanPham); setInventory(item.sanPham.soLuongTon);}} className="pt-1 pr-1 pl-1 btn-outline-primary js-btn-minus" type="button">−</button>
                            </div>
                            <input type="text" className="form-control text-center" onChange={(e) => {handleUpdateCart("", item.sanPham.maSanPham, Number(e.target.value), item.sanPham.giaSanPham);setInventory(item.sanPham.soLuongTon);}} value={item.soLuong} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                            <div className="input-group-append">
                              <button type="button" className="btn-outline-primary js-btn-plus" onClick={() => {handleUpdateCart("tang", item.sanPham.maSanPham, item.soLuong, item.sanPham.giaSanPham);setInventory(item.sanPham.soLuongTon);}}>+</button>
                            </div>
                          </div>
                        </td>
                        <td>{item.donGia}</td>
                        <td><span onClick={() => {removeProductFromCart(item.sanPham.maSanPham);}} className="btn btn-primary btn-sm">X</span></td>
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
                <div className="col-md-6">
                  <Link to="/sanpham?index=0" className="btn btn-outline-primary btn-sm btn-block">Tiếp tục mua sắm</Link>
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
                      <strong className="text-black">{order.complete && data.tongTien} vnd</strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Tiền phải trả</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">{order.complete && data.tongTien} vnd</strong>
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