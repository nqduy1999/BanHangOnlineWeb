import React, { useState, useEffect } from "react";

import CustomerItem from "./CustomerItem";
import { getListCus } from "../../../services/AdminService";
import Cookies from "js-cookie";
const ListCustomer = () => {
  console.log(Cookies.get("authtoken"));
  const [listCus, setListCus] = useState([]);
  useEffect(() => {
    getListCus().then(res => {
      if (res.error !== true) {
        setListCus(res.data.result);
        console.log(res.data);
      }
    });
  },[]);
  return (
    <div>
      <div className="table100 ver5 m-b-110">
        <table data-vertable="ver5">
          <thead>
          <tr className="row100 head">
             <th className="column100 column1" data-column="column1">
                  Tài khoản</th>
            <th className="column100 column2" data-column="column2">
                  Email</th>
                  <th className="column100 column3" data-column="column3">
                  Xem chi tiết</th>
                  <th className="column100 column4" data-column="column4">
                   Cập nhật chi tiết</th>
            </tr>
          </thead>
          {listCus.map((item, key) => (
            <CustomerItem key={key} customer={item}/>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ListCustomer;
