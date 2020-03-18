import React, { useState, useEffect } from "react";
import { alertYesNo } from "../../../untils/alert";
import Swal from "sweetalert2";
const ProductItem = props => {
  const [product, setProduct] = useState({
    id:"",
    name:"",
    description:"",
    price:"",
    inventory:"",
    supplier:{
      id:"",
      name:"",
      description:""
    },
    category:""
  })
  useEffect(() => {
    setProduct(props.product);
    if(props.product.supplier !== null){
      product.supplier.name = props.product.supplier.name; 
    }
  }, )
  const onClick = () => {
    alertYesNo("Thông báo", "Bạn có muốn xoá sản phẩm ", "warning", "Yes").then(
      res => {
        if (res.value) {
          Swal.fire(
            'Thành Công',
            'Sản phẩm của bạn đã được xoá',
            'success'
          )
          props.removePd(product.id);
        }
      }
    );
  };
  return (
    <tbody>
      <tr>
        <th scope="row">{product.id}</th>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>{product.inventory}</td>
        <td>{product.category}</td>
        <td>
          <button onClick={onClick} className=" btn-danger">
            Xoá
          </button>
        </td>
        <td>
          <button
            className="btn-primary"
            data-toggle="modal"
            data-target="#capnhat"
            onClick={() => props.getUpdateUser(props.product)}
          >
            Sửa
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ProductItem;
