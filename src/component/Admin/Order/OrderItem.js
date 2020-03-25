import React, { useState } from "react";

const OrderItem = (props) => {
  const [order, setOrder] = useState({});
  return (
      <tbody>
        <tr className="row100">
          <td className="column100 column1" data-column="column1">{props.user.name ? props.user.name : "Khách hàng chưa cập nhật tên ! "}</td>
          <td className="column100 column2" data-column="column2">{props.user.phone ? props.user.phone : "Khách hàng chưa cập nhật số điện thoại ! "}</td>
          <td className="column100 column3" data-column="column3">{props.user.identify ? props.user.identify : "Khách hàng chưa cập nhật CMND ! "}</td>
          <td className="column100 column4" data-column="column4">{props.user.birthday ? props.user.birthday : "Khách hàng chưa cập nhật ngày sinh ! "}</td>
          <td className="column100 column5" data-column="column8">
            <button className=" btn btn-danger" data-toggle="modal" data-target="#xemchitiethd">Xem</button>
          </td>
        </tr>
      </tbody>
  );
};

export default OrderItem;
