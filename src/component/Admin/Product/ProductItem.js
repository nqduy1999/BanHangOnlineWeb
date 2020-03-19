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
    supplier:{},
    category:{}
  })
  useEffect(() => {
    setProduct(props.product);
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
      <tr className="row100">
              <td className="column100 column1" data-column="column1">
                {product.name}
              </td>
              <td className="column100 column2" data-column="column2">
                {product.id}              </td>
              <td className="column100 column3" data-column="column3">
                {product.description}
              </td>
              <td className="column100 column4" data-column="column4">
                {product.price}
              </td>
              <td className="column100 column5" data-column="column5">
                {product.inventory}
              </td>
              <td className="column100 column6" data-column="column6">
                {}
              </td>
              <td className="column100 column7" data-column="column7">
                {product.supplier.name}
              </td>
              <td className="column100 column7" data-column="column7">
                {product.category.name}
              </td>
              <td className="column100 column8" data-column="column8">
              <button onClick={onClick} className=" btn-danger btn">
            Xoá
          </button>  
          <button
            className="btn-primary btn"
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
