import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = (props) => {
  const { register, handleSubmit } = useForm();
    return (
          <div
            className="modal fade right"
            id="modalPoll-1"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-backdrop="false"
          >
            <div
              className="modal-dialog modal-full-height modal-right modal-notify modal-info"
              role="document"
            >
              <div className="modal-content">
                {/*Header*/}
                <div className="modal-header">
                  <p className="heading lead">Thêm sản phẩm mới</p>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" className="white-text">
                      ×
                    </span>
                  </button>
                </div>
                {/*Body*/}
                <div className="modal-body">
                  <div className="text-center">
                    <i className="fa fa-book-dead fa-4x mb-3 animated rotateIn" />
                  </div>
                  <hr />
                  {/* Radio */}
                  <p className="text-center">
                    <strong>Tên sản phẩm</strong>
                  </p>
                  <div className="md-form form">
                    <input
                      type="text"
                      className="md-text form-control"
                      name="name"
                      defaultValue={""}
                      placeholder="Nhập tên sản phẩm"
                    />
                  </div>
                  <p className="text-center">
                    <strong>Mô tả sản phẩm</strong>
                  </p>
                  <div className="md-form form">
                    <input
                      type="text"
                      name="description"
                      className="md-text form-control"
                      defaultValue={""}
                      placeholder="Nhập mô tả sản phẩm"
                    />
                  </div>
                  <p className="text-center">
                    <strong>Số Lượng</strong>
                  </p>
                  <div className="md-form form">
                    <input
                      type="text"
                      name="inventory"
                      required
                      className="md-text form-control"
                      defaultValue={""}
                      placeholder="Nhập số lượng sản phẩm"
                    />
                  </div>
                  <p className="text-center">
                    <strong>Giá</strong>
                  </p>
                  <div className="md-form form">
                    <input
                      type="text"
                      name="price"
                      required
                      className="md-text form-control"
                      defaultVaulue={""}
                      placeholder="Nhập giá sản phẩm"
                    />
                  </div>
                  <p className="text-center">
                    <strong>Nhà cung cấp</strong>
                  </p>
                  <div className="md-form form">
                    <input
                      type="text"
                      name="supllierName"
                      required
                      className="md-text form-control"
                      placeholder="Nhập tên nhà cung cấp"
                    />
                  </div>
                  <div className="md-form ">
                    <textarea
                      type="text"
                      name="supllierDes"
                      required
                      rows="3"
                      className="md-textarea form-control"
                      placeholder="Nhập mô tả nhà cung cấp"
                    />
                  </div>
                  <p className="text-center">
                    <strong>Loại sản phẩm</strong>
                  </p>
                  <div className="md-form form">
                    <input
                      type="text"
                      name="categoryName"
                      required
                      className="md-text form-control"
                      placeholder="Nhập tên loại sản phẩm "
                    />
                  </div>
                </div>
                <div className="modal-footer justify-content-center">
                  <a
                    type="button"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    Thêm 
                    <i className="fa fa-paper-plane ml-1" />
                  </a>
                  <a
                    type="button"
                    className="btn btn-outline-primary waves-effect"
                    data-dismiss="modal"
                  >
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
    );
};

export default AddProduct;