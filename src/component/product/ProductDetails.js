import React, { useState, useEffect } from 'react';

import { useLocation, withRouter } from 'react-router-dom';

import Axios from 'axios';

import postToDoEndpoint from '../../services/postToDoEndpoint';
import useEndpoint from '../../services/useEndpoint';
import HashLoader from "react-spinners/HashLoader";
import bao_thu_a3 from '../../resource/images/bao_thu_a3.jpg';
const ProductDetails = (props) => {
    // lấy query String
    let useQuery = () => {
      return new URLSearchParams(useLocation().search);
    }
    const id = useQuery();
    // const [quantity, setQuantity] = useState(1);
    // thông báo
    const [message, setMessage] = useState("");
    //loading
    const [loading, setLoading] = useState(true);
    // url api
    const url = `http://localhost:8080/api/quanly/sanpham/chitiet?id=${id.get("id")}`;
    const urlGioHang = "http://localhost:8080/api/giohang/them";
    // lấy thông tin chi tiết của sản phẩm
    const product = useEndpoint({
      method: 'GET',
      url: url
    })
    const [chiTietHoaDon, setChiTietHoaDon] = useState({
      sanPham: product.data,
      donGia: 0,
      soLuong: 1
    })
    const [newTodo, postNewTodo] = postToDoEndpoint(urlGioHang);
    // xử lý input nhập số lượng
    // action tăng là dấu + và giảm là dấu -
    let handleUpdateQuantity = (quantityInput, action) => {
      const quantity = chiTietHoaDon.soLuong;
      const inventory = product.data.soLuongTon;
      // các trường hợp tăng giảm phải dừng ở 1 hoặc số lượng tồn kho
      if(action === "tang") {
        if(quantity >= 1 && quantity < inventory) {
          setChiTietHoaDon({...chiTietHoaDon,
            sanPham: product.data,
            donGia: product.data.giaSanPham * (quantity + 1),
            soLuong: quantity + 1
          })
        }
      } else if(action === "giam") {
        if(quantity > 1 && quantity <= inventory) {
          setChiTietHoaDon({...chiTietHoaDon,
            sanPham: product.data,
            donGia:product.data.giaSanPham * (quantity - 1),
            soLuong: quantity - 1
          })

        }
      } else {
        setChiTietHoaDon({...chiTietHoaDon,
          sanPham: product.data,
          donGia: product.data.giaSanPham * Number(quantityInput),
          soLuong: Number(quantityInput)
        })
      }
      // khi nhập vượt quá só lượng tồn hoặc nhỏ hơn 1 sẽ set về mặc định
      if(Number(quantityInput) > inventory) {
        setChiTietHoaDon({...chiTietHoaDon,
          sanPham: product.data,
          donGia: product.data.giaSanPham * inventory,
          soLuong: inventory
        })
      } else if(Number(quantityInput) <= 0) {
        setChiTietHoaDon({...chiTietHoaDon,
          sanPham: product.data,
          donGia: product.data.giaSanPham * 1,
          soLuong: 1
        })
      }
    }
    useEffect(() => {
      setLoading(false);
      if(product.data != null) {
        setChiTietHoaDon({...chiTietHoaDon,
          sanPham:  product.data,
          donGia: product.data.giaSanPham,
          soLuong: 1
        })
      }
    }, [product]);
    // set NewTodo cơ chế react cập nhật state khá chậm nên cần phải check trong đây thay vì check trong hàm onAddOrderDetailsToShoppingCard
    useEffect(() => {
      if(newTodo.complete && newTodo.error !== true && newTodo.data.code !== 0) {
        setMessage(newTodo.data.code);
      } else if(newTodo.complete && newTodo.error !== true && newTodo.data.code === 0) {
        props.history.push("/giohang"); // direct
      }
    }, [newTodo]);
    // thêm chi tiết hoá đơn vào giỏ hàng
    let onAddOrderDetailsToShoppingCard = () => {
                // kiểm tra số lượng hợp lệ
        // Bật true để trình duyệt tự động add Set-Cookie JSESSION Id vào cookie web (gg xem thêm)
        Axios.defaults.withCredentials = true;
        postNewTodo(chiTietHoaDon);
    }
    return loading ?
          (
            <div className="container pl-5 pb-5">
              <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                  <HashLoader
                  size={300}
                  //size={"150px"} this also works
                  color={"#7971ea"}
                  loading={loading}
                  />
                </div>
              </div>
            </div>
          ) : (
        <div>
          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src={bao_thu_a3} alt="Image" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h2 className="text-black">{product.complete && product.data.tenSanPham}</h2>
                  <p>{product.complete && product.data.moTa}</p>
                  <p className="mb-4">Ex numquam veritatis debitis minima quo error quam eos dolorum quidem perferendis. Quos repellat dignissimos minus, eveniet nam voluptatibus molestias omnis reiciendis perspiciatis illum hic magni iste, velit aperiam quis.</p>
                  <p><strong className="text-primary h4">{product.complete && product.data.giaSanPham}</strong></p>
                  <div className="mb-5 ml-5">
                    <div className="input-group mb-3" style={{maxWidth: 120}}>
                      <div className="input-group-prepend">
                        <button className=" btn-outline-primary js-btn-minus" type="button" onClick={() => {handleUpdateQuantity(1, "giam");}}>−</button>
                      </div>
                      <input type="text" className="form-control text-center" onChange={e => {handleUpdateQuantity(Number(e.target.value), "");}} value={chiTietHoaDon.soLuong} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                      <div className="input-group-append">
                        <button className=" btn-outline-primary js-btn-plus" type="button" onClick={() => {handleUpdateQuantity(1, "tang");}}>+</button>
                      </div>
                    </div>
                  </div>
                  {
                    message ? (
                      <div className="alert alert-danger" role="alert">
                        {message}
                      </div>) : ""
                  }
                  <p><button className="buy-now  btn btn-sm btn-primary" onClick={onAddOrderDetailsToShoppingCard}>Mua ngay</button></p>
                </div>
              </div>
            </div>
          </div>

        </div>
    );
};

export default withRouter(ProductDetails);