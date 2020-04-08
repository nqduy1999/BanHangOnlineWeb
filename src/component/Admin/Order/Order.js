import React, { useState, useEffect } from "react";
import { getListCus, getListOrderByUsername } from "../../../services/AdminService";
import OrderItem from "./OrderItem";
import OrderDetail from "./OrderDetail";
import { useSelector } from "react-redux";

const MainOrder = () => {
  const [customer, setListCus] = useState([])
  useEffect(() => {
    getListCus().then(res => {
      if (res.error !== true) {
        setListCus(res.data.result);
      }
    });
  },[]);
  return (
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
        {customer.map((item,i)=>{
            return <OrderItem user={item} key={i}/>
        })}
      </table>
      <OrderDetail/>
    </div>
  );
};

export default MainOrder;
