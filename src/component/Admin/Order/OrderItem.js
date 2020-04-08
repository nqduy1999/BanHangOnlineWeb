import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListOrderByUsername } from "../../../services/OrderServices";
import { Button } from "@material-ui/core";

const OrderItem = (props) => {
  const dispatch = useDispatch()
  const [order, setOrderDetail] = useState([]);
  const OrderView = () =>{
    console.log(props.user);
    dispatch({
      type: "CLICK_CUSTOMER",
        customer: props.user
    });
}  
useEffect(() => {
  if (props.user) {
    getListOrderByUsername(props.user.account.username).then(
      async res => {
        const result = await res.data.result;
        if (result === null) {
          setOrderDetail(null)
        } else {
          setOrderDetail(res.data.result);
        }
      }
    );
  }
}, [props.user]);
const getid =(item)=>{
  dispatch({
    type:"GET_ID_ORDER",
    order:item
  })
}
  return (
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
  );
};

export default OrderItem;
