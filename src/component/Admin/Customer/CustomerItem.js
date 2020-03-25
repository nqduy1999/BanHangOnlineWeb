import React, {useState} from "react";
import CustomerProfile from "./CustomerProfile";
import { alertNotify } from "../../../untils/alert";
import { useDispatch } from "react-redux";
import { getDetailCus } from "../../../services/AdminService";

const CustomerItem = props => {
  const { username, email } = props.customer.account;
  const [customerUpdate, getCustomerUpdate] = useState({})
  const dispatch = useDispatch();
  const [edit, getEdit] = useState(false)
  const DetailCustomer = () =>{
      getEdit(false);
      dispatch({
        type: "CLICK_CUSTOMER",
          customer: props.customer
      })
      ;
  }  
  const updateCustomer = () =>{
      getEdit(true);
  }
  return (
    <tbody>
      <tr className="row100">
        <td className="column100 column1" data-column="column1">
          {username}
        </td>
        <td>{email}</td>
        <td className="column100 column2" data-column="column2">
          {/* <Link to={`danhsachkhachhang/profile/${username}`}> */}
            <button className="btn-warning btn" data-toggle="modal" data-target="#xemchitiet" edit={edit} onClick={DetailCustomer}>Click !</button>
        </td>
        <td className="column100 column3" data-column="column3">
          {/* <Link to={`danhsachkhachhang/update/${username}`}> */}
            <button className="btn-primary btn " data-toggle="modal" data-target="#xemchitiet" >Cập nhật</button>
          {/* </Link> */}
        </td>
      </tr>
      <CustomerProfile  customerUpdate={customerUpdate}/>
    </tbody>
  );
};

export default CustomerItem;
