import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { alertYesNo } from "../../../untils/alert";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductProfile from "./ProductProfile";
const ProductItemAdmin = (props) => {
  const [sanpham, setSanpham] = useState({
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
    if (props.sanpham) {
      setSanpham(props.sanpham);
    }
  });
  const deleteProduct = () => {
    alertYesNo("Thông báo", "Bạn có muốn xoá sản phẩm ", "warning", "Yes").then(
      (res) => {
        if (res.value) {
          Swal.fire("Thành Công", "Sản phẩm của bạn đã được xoá", "success");
          props.xoaSanpham(props.sanpham.id)
        }
      }
    );
  };
  const dispatch = useDispatch();
  
  const dispatchItem = () => {
    props.setOpenView(true);
    props.setOpenUpdate(props.sanpham);
    dispatch({
      type:"UPDATE",
      product:null
    })
  };
  const xemchitiet = ()=>{
    props.setOpenView(true);

    console.log("Xem chi tiết sản phẩm");
    dispatch({
      type: "CLICK",
      product: props.sanpham,
    });
  }
  return (
    <tr>
      <td>{props.stt}</td>
      <td>{sanpham.name}</td>
      <td>{sanpham.price}</td>
      <td>
        <Link 
          onClick={xemchitiet}
          data-toggle="modal"
          data-target="#xemchitietsanpham"
        >
          Xem Chi Tiết
        </Link>
      </td>
      <td>
        <Link to="sanpham" className="text-danger mr-2" onClick={deleteProduct}>
          Xoá
        </Link>
        <Link
          data-toggle="modal"
          data-target="#capnhat"
          onClick={dispatchItem}
        >
          Update
        </Link>
      </td>
    </tr>

  );
};

export default ProductItemAdmin;
