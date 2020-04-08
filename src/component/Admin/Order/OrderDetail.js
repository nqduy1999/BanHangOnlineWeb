import React, { useState, useEffect } from "react";
import { getOrderByUsername } from "../../../services/OrderServices";
import { useSelector } from "react-redux";

const OrderDetail = (props) => {
  const state = useSelector((state) => state.admin);
  const [order, setOrder] = useState({
    id: "",
    billDate: "",
    totalMoney: 0,
    listOrderDetail: [],
    customer: {
      id: null,
      name: "",
      address: "",
      phone: "",
      identityCard: "",
      birthday: "",
    },
    address: {},
    note: "",
    payMethod: "",
  });
  useEffect(() => {
    console.log(state.order);
    if (state.order) {
      console.log(state.order.customer.account.username);
      getOrderByUsername(state.order.id, state.order.customer.account.username).then(async (res) => {
        console.log(res);
        if (
          res.error !== true &&
          res.data.code === 0 &&
          res.data.result !== null
        ) {
          const result = await res.data.result;
          setOrder({
            ...order,
            id: result.id,
            billDate: result.billDate,
            totalMoney: result.totalMoney,
            listOrderDetail: result.listOrderDetail,
            customer: result.customer,
            address: result.address,
            note: result.note,
            payMethod: result.payMethod,
          });
        }
      });
    }
  }, [state]);
  return (
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Chi tiết đơn hàng
            </h5>
            <div className="row text-black">
              <div className="col-md-12">
                <h3>Địa chỉ nhận hàng</h3>
                <p>Tên người Nhận : {state.customer && state.customer.name}</p>
                <p>Số điện thoại : {state.customer && state.customer.phone}</p>
                <p>
                  Địa chỉ
                  {order.address
                    ? order.address.street +
                      ", " +
                      order.address.town +
                      ", " +
                      order.address.ward +
                      ", " +
                      order.address.district +
                      ", " +
                      order.address.city
                    : order.customer.address.street +
                      ", " +
                      order.customer.address.town +
                      ", " +
                      order.customer.address.ward +
                      ", " +
                      order.customer.address.district +
                      ", " +
                      order.customer.address.city}
                </p>
                <span>Ngày thanh toán: {order.billDate}</span>
                <hr className="text-info" />
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div className="table100 ver1 m-b-110">
              <table data-vertable="ver1">
                <tbody>
                  {order.listOrderDetail.map((item, key) => (
                    <tr key={key}>
                      <td className="column100 column1" data-column="column1">
                        {item.product.name}
                      </td>
                      <td className="column100 column1" data-column="column1">
                       <img  src={item.product.urlImage} alt="ko co"/>
                      </td>
                      <td className="column100 column2" data-column="column2">
                        {item.quantity}
                      </td>
                      <td className="column100 column3" data-column="column3">
                        {item.product.price}
                      </td>
                      <td className="column100 column4" data-column="column4">
                        {item.product.unitPrice}
                      </td>
                      <td
                        className="column100 column5"
                        data-column="column5"
                      ></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <div className="col-md-12">
                <span className="text-uppercase font-weight-bold">
                  Ghi chú:{" "}
                </span>
                {order.note}
              </div>
              <div className="col-md-9">
                <span className="text-uppercase font-weight-bold">
                  Phương thức thanh toán:{" "}
                </span>
                {order.payMethod}
              </div>
              <div className="col-md-3 text-info font-weight-bold">
                Tổng tiền: {order.totalMoney}
              </div>
            </div>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
