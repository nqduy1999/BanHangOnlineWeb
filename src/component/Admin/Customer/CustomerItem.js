import React, {useState} from "react";
import { useDispatch } from "react-redux";
const CustomerItem = props => {
  const { username, email } = props.customer.account;
  const dispatch = useDispatch();
  const DetailCustomer = () =>{
      props.setEdit(false);
      console.log(props.customer);
      dispatch({
        type: "CLICK_CUSTOMER",
          customer: props.customer
      });
      props.showButton(true);
  }  
  const updateCustomer = () =>{
    dispatch({
      type: "CLICK_CUSTOMER",
        customer: props.customer
    })
      props.setEdit(true);
      props.showButton(false)
  }
  return (
    <tbody>
      <tr className="row100">
        <td className="column100 column1" data-column="column1">
          {username}
        </td>
        <td>{email}</td>
        <td className="column100 column2" data-column="column2">
            <button className="btn-warning btn" data-toggle="modal" data-target="#xemchitiet" edit={props.edit} onClick={DetailCustomer}>Click !</button>
        </td>
        <td className="column100 column3" data-column="column3">
            <button className="btn-primary btn " data-toggle="modal" data-target="#xemchitiet"onClick={updateCustomer}>Cập nhật</button>
        </td>
      </tr>
    </tbody>
  );
};

export default CustomerItem;
