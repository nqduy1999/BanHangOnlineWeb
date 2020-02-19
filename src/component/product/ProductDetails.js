import React, { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import Axios from 'axios';

import bao_thu_a3 from '../../resource/images/bao_thu_a3.jpg';
const ProductDetails = () => {
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
  let useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  const id = useQuery();
  const url = `http://localhost:8080/api/quanly/sanpham/chitiet?id=${id.get("id")}`;
    let getProductDetail = async (source) => {
      console.log(url);
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
      }).catch(err => {
        if(Axios.isCancel(err)) {
          console.log(`Canceled`, err);
        } else {
          console.log('err', err)
        }
      })
    }
    useEffect(() => {
      const source = Axios.CancelToken.source(); // huỷ request (Rất quan trọng)
      getProductDetail(source);
      return () => {
        source.cancel();
      };
    }, [url])
    return (
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
                        <button className=" btn-outline-primary js-btn-minus" type="button">−</button>
                      </div>
                      <input type="text" className="form-control text-center" defaultValue={1} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                      <div className="input-group-append">
                        <button className=" btn-outline-primary js-btn-plus" type="button">+</button>
                      </div>
                    </div>
                  </div>
                  <p><Link to="/giohang" className="buy-now  btn btn-sm btn-primary">Thêm vào giỏ</Link></p>
                </div>
              </div>
            </div>
          </div>

        </div>
    );
};

export default ProductDetails;