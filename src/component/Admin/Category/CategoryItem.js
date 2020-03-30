import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { alertYesNo } from "../../../untils/alert";
import Swal from "sweetalert2";

const CategoryItem = props => {
  const [category, setCategory] = useState({
    id: "",
    name: ""
  });
  const ClickUpdateCategory = () => {
    props.setUpdateCategory(props.category);
    props.showButton(false);
  };
  useEffect(() => {
    setCategory(props.category);
  });
  const deleteCategory = () => {
    alertYesNo("Thông báo", "Bạn có muốn xoá sản phẩm ", "warning", "Yes").then(
      res => {
        if (res.value) {
          Swal.fire("Thành Công", "Sản phẩm của bạn đã được xoá", "success");
          props.deleteCategory(category.id);
        }
      }
    );
  };
  return (
    <tbody>
      <tr className="row100">
        <td className="column100 column1" data-column="column1">
          {category.id}
        </td>
        <td className="column100 column2" data-column="column2">
          {category.name}
        </td>
        <td className="column100 column3" data-column="column3">
          <Button variant="contained" color="primary" onClick={deleteCategory}>
            Xoá
          </Button>
          <Button
            variant="contained"
            color="secondary"
            data-toggle="modal"
            data-target="#capnhat"
            onClick={ClickUpdateCategory}
          >
            Cập Nhật
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

export default CategoryItem;
