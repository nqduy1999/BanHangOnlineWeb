
import React, { useState, useEffect } from 'react';

import { withRouter } from 'react-router-dom';

import HashLoader from "react-spinners/HashLoader";

import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';

import Address from '../profile/Address';
import { getAllCart } from '../../services/cartServices';
import { payment } from '../../services/checkoutServices';
import { alertNotify } from '../../untils/alert';
const Checkout = (props) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.auth);
    // React form
    const { register, handleSubmit, errors } = useForm();
    const stateAddress = useSelector(state => state.address)
    const [note, setNote] = useState(""); // ghi chú
    const [paymentMethod, setPaymentMethod] = useState("Thanh toán khi nhận hàng")
    const onSubmit = values => {
      let orderCheckout = {
        totalMoney: order.totalMoney,
        listOrderDetail: order.listOrderDetail,
        customer: state.user,
        address: order.customer.address ? order.customer.address : stateAddress.address,
        note: note,
        payMethod: paymentMethod
      }
      if(orderCheckout.address) {
        payment(orderCheckout).then((res) => {
          if(res.error !== true && res.data.code === 0) {
            props.history.push("/thongbao");
            dispatch({type: "CHANGE_INVENTORY", inventory: 0});
            dispatch({type: "SET_ADDRESS", address: ""});
          } else {
            alertNotify("Thông báo", "Lỗi thanh toán vui lòng quay lại sau hoặc F5 để thử lại", "error");
          }
        })
      } else {
        alertNotify("Thông báo", "Vui lòng nhập địa chỉ giao hàng", "warning");
      }
    };
    //loading
    const [loading, setLoading] = useState(true);
    // order
    const [order, setOrder] = useState({
      id: '',
      billDate: '',
      totalMoney: 0,
      listOrderDetail: [],
      customer: null
    });
    useEffect(() => {
      getAllCart().then((res) => {
        if(res.error !== true && res.data.code === 0) {
          setOrder({...order,
            id: res.data.result.id,
            billDate: res.data.result.billDate,
            totalMoney: res.data.result.totalMoney,
            listOrderDetail: res.data.result.listOrderDetail,
            customer: res.data.result.customer
          });
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
                <p>Mặc định chúng tôi sẽ giao hàng tới địa chỉ mà bạn cung cấp trong thông tin trong tài khoản</p>
                <label htmlFor="c_ship_different_address" className="text-black" data-toggle="collapse" href="#ship_different_address" role="button" aria-expanded="false" aria-controls="ship_different_address"><input type="checkbox" defaultValue={1} id="c_ship_different_address" />Giao tới địa chỉ khác?</label>
                <div className="collapse" id="ship_different_address">
                  <Address/>
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
                        {order.listOrderDetail.map((item, key) => (
                          <tr key={key}>
                          <td>{item.product.name}<strong className="mx-2">x</strong> {item.quantity}</td>
                          <td>{item.unitPrice}</td>
                        </tr>
                        ))
                        }
                        <tr>
                          <td className="text-black font-weight-bold"><strong>Tổng tiền giỏ hàng</strong></td>
                          <td className="text-black">{order.totalMoney}</td>
                        </tr>
                        <tr>
                          <td className="text-black font-weight-bold"><strong>Tổng tiền phải trả</strong></td>
                          <td className="text-black font-weight-bold"><strong>{order.totalMoney}</strong></td>
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