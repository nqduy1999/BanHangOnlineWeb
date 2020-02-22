import React, { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import Axios from 'axios';

import { withCookies } from 'react-cookie';

import Cookies from 'js-cookie';

import AuthService from '../../services/AuthService';
import  { useAlertService } from '../../services/useAlertService';
import bao_thu_a3 from '../../resource/images/bao_thu_a3.jpg';
const ProductDetails = (props) => {
  const [data, setData] = useState({
    maSanPham: '',
    tenSanPham: '',
    moTa: '',
    giaSanPham: 0,
    soLuongTon: 0,
    nhaCungCap: '',
    hinhAnh: '',
    loaiSanPham: ''
  });
  const [chiTietHoaDon, setChiTietHoaDon] = useState({
    sanPham: data,
    donGia: 0,
    soLuong: 1
  })
  const [quantity, setQuantity] = useState(1);
  const [checkQuantityErr, setCheckQuantityErr] = useState(false);
  useAlertService("Thông báo", "Vui lòng nhập đúng số lượng phù hợp", "warning", checkQuantityErr);
  let useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  const auth = new AuthService();
  const id = useQuery();
  const url = `http://localhost:8080/api/quanly/sanpham/chitiet?id=${id.get("id")}`;
  const urlGioHang = "http://localhost:8080/api/giohang/them";

    let getProductDetail = async (source) => {
      await Axios.get(url)
      .then(async res => {
        const products = await res.data;
        await setData({...data,
          maSanPham: products.maSanPham,
          tenSanPham: products.tenSanPham,
          moTa: products.moTa,
          giaSanPham: products.giaSanPham,
          soLuongTon: products.soLuongTon,
          nhaCungCap: products.nhaCungCap,
          hinhAnh: products.hinhAnh,
          loaiSanPham: products.loaiSanPham
        });
      await setChiTietHoaDon({...chiTietHoaDon,
          sanPham: products,
          donGia: products.giaSanPham * 1,
          soLuong: 1
        })
      }).catch(err => {
        if(Axios.isCancel(err)) {
          console.log(`Canceled`, err);
        } else {
          console.log('err', err)
        }
      })
    }
    let handleUpdateQuantity = (qt, action) => {
      if(action === "tang") {
        if(quantity >= 1 && quantity < data.soLuongTon) {
          setChiTietHoaDon({...chiTietHoaDon,
            sanPham: data,
            donGia: data.giaSanPham * qt,
            soLuong: qt
          })
          setQuantity(qt);
        }
      } else if(action === "giam") {
        if(quantity > 1 && quantity <= data.soLuongTon) {
          setChiTietHoaDon({...chiTietHoaDon,
            sanPham: data,
            donGia: data.giaSanPham * qt,
            soLuong: qt
          })
          setQuantity(qt);
        }
      } 
      if(quantity > data.soLuongTon) {
        setChiTietHoaDon({...chiTietHoaDon,
          sanPham: data,
          donGia: data.giaSanPham * data.soLuongTon,
          soLuong: data.soLuongTon
        })
        setQuantity(data.soLuongTon);
      } else if(quantity <= 0) {
        setChiTietHoaDon({...chiTietHoaDon,
          sanPham: data,
          donGia: data.giaSanPham * 1,
          soLuong: 1
        })
        setQuantity(1);
      }
    }
    let onAddOrderDetailsToShoppingCard = () => {
      if(quantity > 0 && quantity <= data.soLuongTon) {
        setChiTietHoaDon({...chiTietHoaDon,
          sanPham: data,
          donGia: data.giaSanPham * quantity,
          soLuong: quantity
        })
        Axios.defaults.withCredentials = true;
        Axios.post(urlGioHang, chiTietHoaDon,  {header: {'Access-Control-Allow-Origin': "*"}}).then( async (response) => {
          console.log(response.data.message);
        }).catch((err) => {
          console.log(err);
        });
      } else {
        setCheckQuantityErr(true);
      }
    }
    useEffect(() => {
      const source = Axios.CancelToken.source(); // huỷ request (Rất quan trọng)
      getProductDetail(source);
      return () => {
        source.cancel();
      };
    }, [url])
    return data.giaSanPham !== 0 ? (
        <div>
          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src={bao_thu_a3} alt="Image" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h2 className="text-black">{data.tenSanPham}</h2>
                  <p>{data.moTa}</p>
                  <p className="mb-4">Ex numquam veritatis debitis minima quo error quam eos dolorum quidem perferendis. Quos repellat dignissimos minus, eveniet nam voluptatibus molestias omnis reiciendis perspiciatis illum hic magni iste, velit aperiam quis.</p>
                  <p><strong className="text-primary h4">{data.giaSanPham}</strong></p>
                  <div className="mb-5 ml-5">
                    <div className="input-group mb-3" style={{maxWidth: 120}}>
                      <div className="input-group-prepend">
                        <button className=" btn-outline-primary js-btn-minus" type="button" onClick={() => {handleUpdateQuantity(quantity-1, "giam");}}>−</button>
                      </div>
                      <input type="text" className="form-control text-center" onChange={e => {handleUpdateQuantity(Number(e.target.value), "tang");}} value={quantity} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                      <div className="input-group-append">
                        <button className=" btn-outline-primary js-btn-plus" type="button" onClick={() => {handleUpdateQuantity(quantity+1, "tang");}}>+</button>
                      </div>
                    </div>
                  </div>
                  <p><Link to="/giohang"  className="buy-now  btn btn-sm btn-primary" onClick={onAddOrderDetailsToShoppingCard}>Thêm vào giỏ</Link></p>
                </div>
              </div>
            </div>
          </div>

        </div>
    ) : "Loading";
};

export default ProductDetails;