import React, { useState, useEffect } from "react";
import { alertYesNo } from "../../../untils/alert";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
const ProductItem = props => {
  const [product, setProduct] = useState({
    id:"",
    name:"",
    description:"",
    price:"",
    inventory:"",
    supplier:{},
    category:{},
    urlImage:""
  })
  useEffect(() => {
    setProduct(props.product);
  }, )
  const deleteProduct = () => {
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
  const dispatch = useDispatch();
  const dispatchItem = () =>{
    props.setAddButton(false);
    props.getUpdateProduct(props.product)
    dispatch({
      type: "CLICK",
        product: props.product
    });
    props.showButton(false);
  }
  return (
    <tbody>
      <tr className="row100">
              <td className="column100 column8" data-column="column8">
                {product.name}
              </td>
              <td className="column100 column9" data-column="column9">
              {product.id}            
              </td>
              <td className="column100 column1" data-column="column1">
              {product.description}            
              </td>
              <td className="column100 column4" data-column="column4">
                {product.price}
              </td>
              <td className="column100 column5" data-column="column5">
                {product.inventory}
              </td>
              <td className="column100 column6" data-column="column6">
                <img src={product.urlImage} alt="ko" />
              </td>
              <td className="column100 column7" data-column="column7">
                {product.supplier.name}
               </td>
              <td className="column100 column7" data-column="column7">
                {product.category.name}
              </td>
              <td className="column100 column1" data-column="column1">
          <Button variant="contained" color="secondary" onClick={deleteProduct}>Xoá</Button>
          <Button variant="contained" color="primary" data-toggle="modal"
                  data-target="#capnhat"
                  onClick={dispatchItem}>
            Sửa
          </Button>               
          </td>
            </tr>
    </tbody>
  );
};

export default ProductItem;
