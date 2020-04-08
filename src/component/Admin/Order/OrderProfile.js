import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getOrderByUsername,
  getListOrderByUsername
} from "../../../services/OrderServices";
import { alertNotify } from "../../../untils/alert";
import { Button } from "@material-ui/core";
import OrderDetail from "./OrderDetail";
const OrderProfile = props => {
  const state = useSelector(state => state.admin);
  const [order, setOrderDetail] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(state.customer);
    if (state.customer) {
      getListOrderByUsername(state.customer.account.username).then(
        async res => {
          const result = await res.data.result;
          if (result === null) {
            alertNotify("Thông Báo", "Khách Hàng Chưa Mua Hàng", "warning");
            setOrderDetail(null)
          } else {
            console.log(result);
            setOrderDetail(result);
          }
        }
      );
    }
  }, [state]);
  const getid =(item)=>{
    console.log(item);
    dispatch({
      type:"GET_ID_ORDER",
      order:item
    })
  }
  return (
    <div
      className="modal fade"
      id="xemchitiethd"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content ">
          <div className="modal-header"></div>
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <h5 className="text-center" id="xemchitiet">
              Thông tin hoá đơn
            </h5>
            <div className="table100 ver1 m-b-110">
              <table data-vertable="ver1">
                <thead>
                  <tr className="row100 head">
                    <th className="column100 column1" data-column="column1">
                      Tên Sản Phẩm
                    </th>
                    <th className="column100 column2" data-column="column2">
                      Số Lượng
                    </th>
                    <th className="column100 column3" data-column="column3">
                      Hình Ảnh
                    </th>
                    <th className="column100 column4" data-column="column4">
                      Giá
                    </th>
                    <th className="column100 column5" data-column="column5">
                      Tổng Tiền
                    </th>
                    <th className="column100 column6" data-column="column5">
                      Xem Chi Tiết                       
                    </th>
                  </tr>
                </thead>
                <tbody>
                {
                 order && order.map((item, i) => 
                  (
                    item.listOrderDetail.map((orderdetail,i)=>(
                    <tr className="row100" key={i}>
                      <td className="column100 column1" data-column="column1">
                        {orderdetail.product.name }
                      </td>
                      <td className="column100 column2" data-column="column2">
                        {orderdetail.quantity}
                      </td>
                      <td
                        className="column100 column4"
                        data-column="column2"
                      ></td>
                      <td className="column100 column4" data-column="column4">
                        {orderdetail.unitPrice}
                      </td>
                      <td className="column100 column5" data-column="column4">
                        {item.totalMoney}
                      </td>
                      <td className="column100 column6" data-column="column4">
                        <Button 
                        variant="contained"
                        color="secondary"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={()=> getid(item) }
                        >Click</Button>
                      </td>
                    </tr>
                    ))
                  )
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
      {state.customer ?  <OrderDetail username={state.customer.account.username}/> :  ""}
    </div>
  );
};

export default OrderProfile;
