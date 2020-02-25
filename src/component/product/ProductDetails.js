import React, { useState, useEffect } from 'react';

import { Link, useLocation, withRouter } from 'react-router-dom';

import Axios from 'axios';

import  { useAlertService } from '../../services/useAlertService';
import bao_thu_a3 from '../../resource/images/bao_thu_a3.jpg';
const ProductDetails = (props) => {
  // lấy query String
  let useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  const id = useQuery();

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
  // const [quantity, setQuantity] = useState(1);
  // thông báo
  const [checkQuantityErr, setCheckQuantityErr] = useState(false);
  const [message, setMessage] = useState("");
  const [icon, setIcon] = useState("");
  useAlertService("Thông báo", message, icon, checkQuantityErr);
  // url api
  const url = `http://localhost:8080/api/quanly/sanpham/chitiet?id=${id.get("id")}`;
  const urlGioHang = "http://localhost:8080/api/giohang/them";
  // lấy thông tin chi tiết của sản phẩm

    let getProductDetail = async () => {
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
        // lấy chi tiết hoá đon để đẩy lên server cập nhật cho phía giỏ hàng
      await setChiTietHoaDon({...chiTietHoaDon,
          sanPham: products,
          donGia: products.giaSanPham * 1,
          soLuong: 1
        })
      }).catch(err => {
          console.log('err', err)
      })
    }
    // xử lý input nhập số lượng
    // action tăng là dấu + và giảm là dấu -
    let handleUpdateQuantity = (quantityInput, action) => {
      const quantity = chiTietHoaDon.soLuong;
      const inventory = data.soLuongTon;
      // các trường hợp tăng giảm phải dừng ở 1 hoặc số lượng tồn kho
      if(action === "tang") {
        if(quantity >= 1 && quantity < inventory) {
          setChiTietHoaDon({...chiTietHoaDon,
            sanPham: data,
            donGia: data.giaSanPham * (quantity + 1),
            soLuong: quantity + 1
          })
        }
      } else if(action === "giam") {
        if(quantity > 1 && quantity <= inventory) {
          setChiTietHoaDon({...chiTietHoaDon,
            sanPham: data,
            donGia: data.giaSanPham * (quantity - 1),
            soLuong: quantity - 1
          })

        }
      } else {
        setChiTietHoaDon({...chiTietHoaDon,
          sanPham: data,
          donGia: data.giaSanPham * quantityInput,
          soLuong: quantityInput
        })
      }
      // khi nhập vượt quá só lượng tồn hoặc nhỏ hơn 1 sẽ set về mặc định
      if(quantityInput > inventory) {
        setChiTietHoaDon({...chiTietHoaDon,
          sanPham: data,
          donGia: data.giaSanPham * inventory,
          soLuong: inventory
        })
      } else if(quantityInput <= 0) {
        setChiTietHoaDon({...chiTietHoaDon,
          sanPham: data,
          donGia: data.giaSanPham * 1,
          soLuong: 1
        })
      }
    }
    // thêm chi tiết hoá đơn vào giỏ hàng
    let onAddOrderDetailsToShoppingCard = () => {
      // kiểm tra số lượng hợp lệ
        // Bật true để trình duyệt tự động add Set-Cookie JSESSION Id vào cookie web (gg xem thêm)
        Axios.defaults.withCredentials = true;
        // Vì bật true ở trên nên cần header như bên dưới nếu ko sẽ bị lỗi CORS
        Axios.post(urlGioHang, chiTietHoaDon,  {header: {'Access-Control-Allow-Origin': "*"}}).then( async (response) => {
          const resutl = await response.data;
          setIcon("success");
          setMessage(resutl.message);
          setCheckQuantityErr(true);
          if(resutl.code !== 0) {
            setIcon("error");
            setCheckQuantityErr(false);
          } else {
            props.history.push("/giohang"); // direct
          }
        }).catch((err) => {
          console.log(err);
        });
      }
    useEffect(() => {
      getProductDetail();
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
                        <button className=" btn-outline-primary js-btn-minus" type="button" onClick={() => {handleUpdateQuantity(1, "giam");}}>−</button>
                      </div>
                      <input type="text" className="form-control text-center" onChange={e => {handleUpdateQuantity(Number(e.target.value), "");}} value={chiTietHoaDon.soLuong} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                      <div className="input-group-append">
                        <button className=" btn-outline-primary js-btn-plus" type="button" onClick={() => {handleUpdateQuantity(1, "tang");}}>+</button>
                      </div>
                    </div>
                  </div>
                  <p><button className="buy-now  btn btn-sm btn-primary" onClick={onAddOrderDetailsToShoppingCard}>Mua ngay</button></p>
                </div>
              </div>
            </div>
          </div>

        </div>
    ) : "Loading";
};

export default withRouter(ProductDetails);