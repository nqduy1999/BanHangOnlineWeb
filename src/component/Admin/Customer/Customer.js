import React, { useState, useEffect } from "react";

import CustomerItem from "./CustomerItem";
import { getListCus, updateCus } from "../../../services/AdminService";
import Cookies from "js-cookie";
import CustomerProfile from "./CustomerProfile";
import { alertNotify } from "../../../untils/alert";
const ListCustomer = () => {
  console.log(Cookies.get("authtoken"));
  const [customerUpdate, setCustomerUpdate] = useState({})
  const [hideButton, showButton]=useState(false);
  const [listCus, setListCus] = useState([]);
  const [edit, setEdit] = useState(false);
  const handleUpdateCustomer=(username, value)=>{
    console.log(value);
    console.log(username);
    updateCus(username, value)
    .then((res) => {
      console.log(res);
      if(res.error !== true){
      alertNotify("Thông Báo", res.data.message, "success");
      getListCus().then(res => {
        setListCus(res.data.result);
      });
      }
      else{
        alertNotify("Thông Báo","Sai nhập liệu", "warning");
      }
    })	        
  }
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
      <div className="table100 ver1 m-b-110">
        <table data-vertable="ver1">
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
            <CustomerItem  key={key} customer={item} setCustomerUpdate={setCustomerUpdate} customerUpdate={customerUpdate} setEdit={setEdit} showButton={showButton}/>
          ))}
        </table>
      </div>
      <CustomerProfile hideButton={hideButton} edit={edit} setEdit={setEdit} handleUpdateCustomer={handleUpdateCustomer}/>
    </div>
  );
};

export default ListCustomer;
