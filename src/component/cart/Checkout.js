import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

import React, { useState, useEffect } from 'react';


import HashLoader from "react-spinners/HashLoader";

import { useForm } from 'react-hook-form';

import postToDoEndpoint from '../../services/postToDoEndpoint';
import useEndpoint from '../../services/useEndpoint';
const Checkout = () => {
    const urlCity = "http://localhost:8080/api/diachi/thanhpho";
    const urlDistrict = "http://localhost:8080/api/diachi/quanhuyen";
    const urlWard =  "http://localhost:8080/api/diachi/thitran";

    // React form
    const { register, handleSubmit, errors } = useForm();
    const [address, setAddress] = useState({
      tinhThanhPho: "",
      quanHuyen: "",
      phuongXa: "",
      khuPho: "",
      duongSoNha: ""
    });
    const onSubmit = data => {
      let orderCheckout = {
        ngayLapHoaDon: null,
        tongTien: order.data.result.tongTien,
        danhsachCTHD: order.data.result.danhsachCTHD,
        khachHang: null,
        diaChi: address,
        ghiChu: data.note,
        cachThucThanhToan: data.pay
      }
      console.log(orderCheckout);
    };
    // lấy danh sách thành phố
    const city = useEndpoint({
      method: "GET",
      url: urlCity
    })
    const [dataCity, setDataCity] = useState([]);
    // lấy danh sách quận huyện thuộc thành phố
    const [listDistrict, postIdCityGetDistrict] = postToDoEndpoint(urlDistrict,  {"Content-Type": "text/plain"});
    // lấy danh sách thị trấn thuộc quận huyện
    const [listWard, postIdDistrictGetWard] = postToDoEndpoint(urlWard,  {"Content-Type": "text/plain"});
    // lưu danh sách thị trấn
    const [dataWard, setDataWard] = useState([]);
    // lưu danh sách quận huyện vào biến
    const [dataDistrict, seDataDistrict] = useState([]);
    // các url api
    const urlData = "http://localhost:8080/api/giohang/dulieu";
    //loading
    const [loading, setLoading] = useState(true);
    // lấy danh sách sản phẩm đã đặt mua từ session lên checkout
    const order = useEndpoint({
      url: urlData,
      method: "GET"
    });
    // lấy danh sách quận huyện thuộc thành phố
    const getListDistrictByCity = (values) => {
      if(values !== null) { // khi nhấn dấu x để xoá sẽ lỗi
        setAddress({...address,
          tinhThanhPho: values.name
        })
        postIdCityGetDistrict(values.code);
      }
    }
    // lấy danh sách quận huyện thuộc thành phố
    const getListWardByDistrict = (values) => {
      if(values !== null) { // khi nhấn dấu x để xoá sẽ lỗi
        setAddress({...address,
          quanHuyen: values.name
        })
        postIdDistrictGetWard(values.code);
      }
    }

    useEffect(() => {
      if(listWard.complete && listWard.error !== true && listWard.data.code === 0) {
        let objWard = JSON.parse(listWard.data.message);
        let arrayWard = Object.keys(objWard).map(key => objWard[key]); // cần phải chuyển về mảng vì dữ liệu là 1 object
        setDataWard(arrayWard);
      }
    }, [listWard]);
    useEffect(() => {
      if(listDistrict.complete && listDistrict.error !== true && listDistrict.data.code === 0) {
        let objDistrict = JSON.parse(listDistrict.data.message);
        let arrayDistrict = Object.keys(objDistrict).map(key => objDistrict[key]); // cần phải chuyển về mảng vì dữ liệu là 1 object
        seDataDistrict(arrayDistrict);
      }
    }, [listDistrict]);
    useEffect(() => {
      if(city.complete && city.error !== true && city.data.code === 0) {
        let objCity = JSON.parse(city.data.message);
        let arrayCity = Object.keys(objCity).map(key => objCity[key]); // cần phải chuyển về mảng vì dữ liệu là 1 object
        setDataCity(arrayCity);
      }
      setLoading(false);
    }, [city]);
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
        <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <h1 className="border p-4 rounded" role="alert">
                Thanh toán
              </h1>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 className="h3 mb-3 text-black">Chi tiết hoá đơn</h2>
              <div className="p-3 p-lg-5 border">
                <div className="form-group">
                    <label htmlFor="c_country" className="text-black">Tỉnh/Thành Phố <span className="text-danger">*</span></label>
                    <Autocomplete onChange={(e, values) => {getListDistrictByCity(values)}} id="combo-box-city"
                    options={dataCity}
                    getOptionLabel={option => option.name}
                    renderInput={params => <TextField className="form-control" {...params} label="Tỉnh/Thành Phố" size="small" variant="outlined" />}/>
                </div>
                <div className="form-group">
                  <label htmlFor="c_country" className="text-black">Quận/Huyện <span className="text-danger">*</span></label>
                  <Autocomplete onChange={(e, values) => {getListWardByDistrict(values)}} id="combo-box-district"
                    options={dataDistrict}
                    getOptionLabel={option => option.name}
                    renderInput={params => <TextField className="form-control" {...params} label="Quận/Huyện" size="small" variant="outlined" />}/>
                  </div>
                <div className="form-group">
                <label htmlFor="c_country" className="text-black">Phường/Xã <span className="text-danger">*</span></label>
                <Autocomplete onChange={(e, values) => {values !== null ? setAddress({...address, phuongXa: values.name}) : setAddress({...address})}}  id="combo-box-ward"
                  options={dataWard}
                  getOptionLabel={option => option.name}
                  renderInput={params => <TextField className="form-control" {...params} label="Phường/Xã" size="small" variant="outlined" />}/>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="c_address" className="text-black">Khu phố <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="town" name="town" ref={register({ required: true })}  placeholder="Khu phố" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="c_address" className="text-black">Địa chỉ <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="street" name="street" ref={register({ required: true })} placeholder="Tên đường" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="c_order_notes" className="text-black">Ghi chú</label>
                  <textarea name="c_order_notes" id="c_order_notes" cols={30} rows={5} name="note" className="form-control" placeholder="Viết ghi chú giao hàng của bạn ở đây .... " defaultValue={""} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h2 className="h3 mb-3 text-black">Hoá đơn của bạn </h2>
                  <div className="p-3 p-lg-5 border">
                    <table className="table site-block-order-table mb-5">
                      <thead>
                        <tr><th>Sản Phẩm</th>
                          <th>Tổng tiền</th>
                        </tr></thead>
                      <tbody>
                        {order.complete && order.data.code === 0 && order.data.result.danhsachCTHD.map((item, key) => (
                          <tr key={key}>
                          <td>{item.sanPham.tenSanPham}<strong className="mx-2">x</strong> {item.soLuong}</td>
                          <td>{item.donGia}</td>
                        </tr>
                        ))
                        }
                        <tr>
                          <td className="text-black font-weight-bold"><strong>Tổng tiền giỏ hàng</strong></td>
                          <td className="text-black">{order.complete && order.data.result.tongTien}</td>
                        </tr>
                        <tr>
                          <td className="text-black font-weight-bold"><strong>Tổng tiền phải trả</strong></td>
                          <td className="text-black font-weight-bold"><strong>{order.complete && order.data.result.tongTien}</strong></td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="border p-3 mb-3">
                      <div className="row">
                        <div className="col-10">
                          <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsebank" role="button" aria-expanded="false" aria-controls="collapsebank">Internet banking</a></h3>
                        </div>
                        <div className="col-2">
                          <input type="radio" name="checkout" defaultValue={1} id="c_ship_different_address" />
                        </div>
                      </div>
                      <div className="collapse" id="collapsebank">
                        <div className="py-2">
                          <p className="mb-0">Đơn hàng được thanh toán ngay lập tức. </p>
                        </div>
                      </div>
                    </div>
                    <div className="border p-3 mb-3">
                      <div className="row">
                        <div className="col-10">
                          <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsecheque" role="button" aria-expanded="false" aria-controls="collapsecheque">Chuyển trực tiếp qua ngân hàng </a></h3>
                        </div>
                        <div className="col-2">
                          <input type="radio" name="checkout" defaultValue={1} id="c_ship_different_address" />
                        </div>
                      </div>
                      <div className="collapse" id="collapsecheque">
                        <div className="py-2">
                          <p className="mb-0">Chuyển tiền trực tiếp tại ngân hàng, đơn hàng sẽ được thanh toán trong vòng 2 - 3 ngày</p>
                        </div>
                      </div>
                    </div>
                    <div className="border p-3 mb-3">
                      <div className="row">
                        <div className="col-10">
                          <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsepaypal" role="button" aria-expanded="false" aria-controls="collapsepaypal">Paypal</a></h3>
                        </div>
                        <div className="col-2">
                          <input type="radio" name="checkout" defaultValue={1} id="c_ship_different_address" />
                        </div>
                      </div>
                      <div className="collapse" id="collapsepaypal">
                        <div className="py-2">
                          <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                        </div>
                      </div>
                    </div>
                    <div className="border p-3 mb-5">
                      <div className="row">
                        <div className="col-10">
                        <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapseorder" role="button" aria-expanded="false" aria-controls="collapseorder">Thanh toán khi nhận hàng </a></h3>
                        </div>
                        <div className="col-2">
                          <input type="radio" name="checkout" defaultValue={1} id="c_ship_different_address" />
                        </div>
                      </div>
                      <div className="collapse" id="collapseorder">
                        <div className="py-2">
                          <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input className="btn btn-primary btn-lg py-3 btn-block" type="submit" value="Đặt hàng"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    );
};

export default Checkout;