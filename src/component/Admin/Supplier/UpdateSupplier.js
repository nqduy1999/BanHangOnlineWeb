import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const UpdateSupplier = props => {
  const [supplier, setSupplier] = useState({
    name: "",
    description: ""
  });
  const handleInput = e => {
    setSupplier({ ...supplier, [e.target.name]: e.target.value });
    console.log(supplier);
  };
  const cancelButton = () => {
    setSupplier({
      ...supplier,
      id: null,
      name: "",
      description: ""
    });
    console.log(props.updateSupplier);
  };
  useEffect(() => {
    if (props.updateSupplier) {
      setSupplier(props.updateSupplier);
    }
  }, [props.updateSupplier]);

  const onSubmit = data => {
    setSupplier({
      ...supplier,
      name: data.name,
      description: data.description
    });
    if (props.updateSupplier) {
      props.handleUpdateSupplier(props.updateSupplier.id, supplier);
    } else {
      props.handleAddSupplier(supplier);
    }
  };
  const { register, handleSubmit } = useForm();
  return (
    <div
      className="modal fade right"
      id="capnhat"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
      data-backdrop="false"
    >
      <div
        className="modal-dialog modal-full-height modal-right modal-notify modal-info modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header"></div>
          {/*Body*/}
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span
                aria-hidden="true"
                className="white-text"
                onClick={cancelButton}
              >
                ×
              </span>
            </button>
            <h1 className="heading lead text-center">
              {props.updateSupplier ? " Sửa sản phẩm" : "Thêm sản phẩm mới"}
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>
                <strong>Tên nhà cung cấp</strong>
              </p>
              <input
                type="text"
                className="md-text form-control"
                name="name"
                ref={register}
                onChange={handleInput}
                placeholder="Nhập tên sản phẩm"
                value={supplier.name}
              />
              <p>
                <strong>Mô tả nhà cung cấp</strong>
              </p>
              <div className="md-form form">
                <input
                  type="text"
                  name="description"
                  ref={register}
                  className="md-text form-control"
                  onChange={handleInput}
                  placeholder="Nhập mô tả sản phẩm"
                  value={supplier.description}
                />
              </div>
              <hr />
              {props.hideButton === true ? (
                <button
                  type="button"
                  className="btn btn-outline-primary waves-effect"
                  data-dismiss="modal"
                  onClick={cancelButton}
                >
                  Đóng
                </button>
              ) : (
                <div className="justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    {props.updateSupplier ? "Sửa" : "Thêm"}
                    <i className="fa fa-plus"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary waves-effect"
                    data-dismiss="modal"
                    onClick={cancelButton}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSupplier;
