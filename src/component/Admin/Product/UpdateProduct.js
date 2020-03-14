import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { useForm } from "react-hook-form";
const UpdateProduct = props => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    if (props.updateUser === null) {
      console.log(data.id);
      {
        props.handleAddSubmit(data);
      }
    } else {
      console.log(props.product.id);
      {
        props.handleUpdateProduct(props.product.id, data);
      }
    }
  };
  return (
    <div
      className="modal fade"
      id="capnhat"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {props.updateUser ? "UPDATE USER" : "ADD USER"}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Tên</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  required
                  ref={register}
                />
              </div>
              <div className="form-group">
                <label>Mô Tả</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  maxLength="60"
                  required
                  ref={register}
                />
              </div>
              <div className="form-group">
                <label>Giá</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  required
                  ref={register}
                />
              </div>
              <div className="form-group">
                <label>Số Lượng</label>
                <input
                  type="text"
                  required
                  pattern="^[0-9]+$"
                  className="form-control"
                  name="inventory"
                  ref={register}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
