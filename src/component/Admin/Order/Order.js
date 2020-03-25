import React, { useState, useEffect } from "react";
import { getListCus, getListOrderByUsername } from "../../../services/AdminService";
import OrderItem from "./OrderItem";
import OrderProfile from "./OrderProfile";

const MainOrder = () => {
  const [customer, setListCus] = useState([])
  const [order, setOrder] = useState([])
  useEffect(() => {
    getListCus().then(res => {
      if (res.error !== true) {
        setListCus(res.data.result);
      }
    });
  },[]);
  return (
    <div className="table100 ver6 m-b-110">
      <table data-vertable="ver6">
        <thead>
          <tr className="row100 head">
            <th className="column100 column1" data-column="column1">
              Tên Khách hàng
            </th>
            <th className="column100 column2" data-column="column2">
              Số điện thoại
            </th>
            <th className="column100 column3" data-column="column3">
             Số CMND
            </th>
            <th className="column100 column4" data-column="column4">
            Ngày Sinh
            </th>
            <th className="column100 column5" data-column="column5">
          Hoá đơn đã đặt
            </th>
          </tr>
        </thead>
        {customer.map((item,i)=>{
            return <OrderItem user={item} key={i}/>
        })}
      </table>
      <OrderProfile/>
    </div>
  );
};

export default MainOrder;
