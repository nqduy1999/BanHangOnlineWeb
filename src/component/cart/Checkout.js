import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";

import { useForm } from 'react-hook-form';

import { getAllCart } from '../../services/cartServices';

import { getListCity, getListDistrict, getListWard, payment } from '../../services/checkoutServices';

import { alertNotify } from '../../untils/alert';

import { useDispatch, useSelector } from 'react-redux';
const Checkout = (props) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.auth);
    // React form
    const { register, handleSubmit, errors } = useForm();
    const [address, setAddress] = useState({
      tinhThanhPho: "",
      quanHuyen: "",
      phuongXa: "",
      khuPho: "",
      duongSoNha: ""
    });
    const [note, setNote] = useState(""); // ghi chú
    const [paymentMethod, setPaymentMethod] = useState("Thanh toán khi nhận hàng")
    const onSubmit = values => {
      let orderCheckout = {
        tongTien: data.tongTien,
        danhsachCTHD: data.danhsachCTHD,
        khachHang: state.user,
        diaChi: {...address,
          khuPho: values.town,
          duongSoNha: values.street
        },
        ghiChu: note,
        cachThucThanhToan: paymentMethod
      }
      payment(orderCheckout).then((res) => {
        if(res.error !== true && res.data.code === 0) {
          props.history.push("/thongbao");
          dispatch({type: "CHANGE_INVENTORY", inventory: 0});
        } else {
          alertNotify("Thông báo", "Lỗi thanh toán vui lòng quay lại sau", "error");
        }
      })
    };
    // lấy danh sách thành phố
    const [dataCity, setDataCity] = useState([]);
    // lấy danh sách thị trấn thuộc quận huyện
    const [dataDistrict, setDataDistrict] = useState([]);
    // lưu danh sách thị trấn
    const [dataWard, setDataWard] = useState([]);
    //loading
    const [loading, setLoading] = useState(true);
    // order
    const [data, setData] = useState({
      maHoaDon: '',
      ngayLapHoaDon: '',
      tongTien: 0,
      danhsachCTHD: [],
      khachHang: null
    });
    // lấy danh sách quận huyện thuộc thành phố
    const getListDistrictByCity = (values) => {
      if(values !== null) { // khi nhấn dấu x để xoá sẽ lỗi
        setAddress({...address,
          tinhThanhPho: values.name
        })
        getListDistrict(values.code).then((res) => {
          if(res.error !== true && res.data.code === 0) {
            let objDistrict = JSON.parse(res.data.result);
            let arrayDistrict = Object.keys(objDistrict).map(key => objDistrict[key]); // cần phải chuyển về mảng vì dữ liệu là 1 object
            setDataDistrict(arrayDistrict);
          }
        });
      }
    }
    // lấy danh sách quận huyện thuộc thành phố
    const getListWardByDistrict = (values) => {
      if(values !== null) { // khi nhấn dấu x để xoá sẽ lỗi
        setAddress({...address,
          quanHuyen: values.name
        })
        getListWard(values.code).then((res) => {
          if(res.error !== true && res.data.code === 0) {
            let objWard = JSON.parse(res.data.result);
            let arrayWard = Object.keys(objWard).map(key => objWard[key]); // cần phải chuyển về mảng vì dữ liệu là 1 object
            setDataWard(arrayWard);
          }
        });
      }
    }
    useEffect(() => {
      getAllCart().then((res) => {
        if(res.error !== true && res.data.code === 0) {
          setData({...data,
            maHoaDon: res.data.result.maHoaDon,
            ngayLapHoaDon: res.data.result.ngayLapHoaDon,
            tongTien: res.data.result.tongTien,
            danhsachCTHD: res.data.result.danhsachCTHD,
            khachHang: res.data.result.khachHang
          });
        }
      });
      getListCity().then((res) => {
        if(res.error !== true && res.data.code === 0) {
          let objCity = JSON.parse(res.data.result);
          let arrayCity = Object.keys(objCity).map(key => objCity[key]); // cần phải chuyển về mảng vì dữ liệu là 1 object
          setDataCity(arrayCity);
        }
      });
      setLoading(false);
    }, []);
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
                  <label htmlFor="note" className="text-black">Ghi chú</label>
                  <textarea name="note" id="note" cols={30} rows={5} onChange={(e) => {setNote(e.target.value)}} className="form-control" placeholder="Viết ghi chú giao hàng của bạn ở đây .... " defaultValue={""} />
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
                        {data.danhsachCTHD.map((item, key) => (
                          <tr key={key}>
                          <td>{item.sanPham.tenSanPham}<strong className="mx-2">x</strong> {item.soLuong}</td>
                          <td>{item.donGia}</td>
                        </tr>
                        ))
                        }
                        <tr>
                          <td className="text-black font-weight-bold"><strong>Tổng tiền giỏ hàng</strong></td>
                          <td className="text-black">{data.tongTien}</td>
                        </tr>
                        <tr>
                          <td className="text-black font-weight-bold"><strong>Tổng tiền phải trả</strong></td>
                          <td className="text-black font-weight-bold"><strong>{data.tongTien}</strong></td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="border p-3 mb-3">
                      <div className="row">
                        <div className="col-10">
                          <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsebank" role="button" aria-expanded="false" aria-controls="collapsebank">Internet banking</a></h3>
                        </div>
                        <div className="col-2">
                          <input type="radio" onClick={() => setPaymentMethod("Internet banking")} name="checkout" defaultValue={1} id="c_ship_different_address" />
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
                          <input type="radio" name="checkout" onClick={() => setPaymentMethod("Chuyển trực tiếp qua ngân hàng")} defaultValue={1} id="c_ship_different_address" />
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
                          <input type="radio" name="checkout" onChange={() => setPaymentMethod("Paypal")} defaultValue={1} id="c_ship_different_address" />
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
                          <input type="radio" name="checkout" onChange={() => setPaymentMethod("Thanh toán khi nhận hàng")} checked defaultValue={1} id="c_ship_different_address" />
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

export default withRouter(Checkout);