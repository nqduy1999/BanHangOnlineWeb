import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UpdateCategory = (props) => {
    const [category, setCategory] = useState({
        name: "",
      });
      const handleInput = e => {
        setCategory({ ...category, [e.target.name]: e.target.value });
      };
      const cancelButton = () => {
        setCategory({
          ...category,
          id: null,
          name: ""
        });
      };
      useEffect(() => {
        if (props.updateCategory) {
          setCategory(props.updateCategory);
        }
      }, [props.updateCategory]);
    
      const onSubmit = data => {
        setCategory({
          ...category,
          name: data.name,
        });
        if (props.updateCategory) {
          props.handleUpdateCategory(props.updateCategory.id, category);
        } else {
          props.handleAddCategory(category);
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
                  {props.updateCategory ? " Sửa sản phẩm" : "Thêm sản phẩm mới"}
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <p>
                    <strong>Tên loại sản phẩm</strong>
                  </p>
                  <input
                    type="text"
                    className="md-text form-control"
                    name="name"
                    ref={register}
                    onChange={handleInput}
                    placeholder="Nhập tên sản phẩm"
                    value={category.name}
                  />
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
                        {props.updateCategory ? "Cập Nhật" : "Thêm"}
                        <i className="fa fa-plus"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary waves-effect"
                        data-dismiss="modal"
                        onClick={cancelButton}
                      >
                        Huỷ
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

export default UpdateCategory;