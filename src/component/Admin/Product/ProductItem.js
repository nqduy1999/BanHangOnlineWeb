import React, { useState, useEffect } from "react";
import { alertYesNo } from "../../../untils/alert";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
const ProductItem = (props) => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    inventory: "",
    supplier: {},
    category: {},
    urlImage: "",
  });
  useEffect(() => {
    setProduct(props.product);
  });
  const deleteProduct = () => {
    alertYesNo("Thông báo", "Bạn có muốn xoá sản phẩm ", "warning", "Yes").then(
      (res) => {
        if (res.value) {
          Swal.fire("Thành Công", "Sản phẩm của bạn đã được xoá", "success");
          props.removePd(product.id);
        }
      }
    );
  };
  const dispatch = useDispatch();
  const dispatchItem = () => {
    props.setAddButton(false);
    props.getUpdateProduct(props.product);
    dispatch({
      type: "CLICK",
      product: props.product,
    });
    props.showButton(false);
  };
  return (
    <tbody>
      <tr className="row100">
        <td className="column100 column1" data-column="column1">
          {product.name}
        </td>
        <td className="column100 column2" data-column="column2">
          {product.price}
        </td>
        <td className="column100 column3" data-column="column3">
          <img src={product.urlImage} alt="ko" />
        </td>
        <td className="column100 column4" data-column="column4">
          <Button
            variant="contained"
            color="primary"
            data-toggle="modal"
            data-target="#xemchitietsanpham"
          >
            Xem Chi Tiết
          </Button>
        </td>{" "}
        <td className="column100 column5" data-column="column5">
          <Button variant="contained" color="secondary" onClick={deleteProduct}>
            Xoá
          </Button>
          <Button
            variant="contained"
            color="primary"
            data-toggle="modal"
            data-target="#capnhat"
            onClick={dispatchItem}
          >
            Sửa
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

export default ProductItem;
