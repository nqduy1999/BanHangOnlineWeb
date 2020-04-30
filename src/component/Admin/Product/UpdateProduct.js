import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

import { withRouter } from "react-router-dom";

import {
  ListCategory,
  detailCategory,
} from "../../../services/CategoryServices";
import { uploadFile } from "../../../services/FileService";
import {
  ListSupplier,
  detailSupplier,
} from "../../../services/SupplierService";
import { alertNotify } from "../../../untils/alert";
import { useSelector, useDispatch } from "react-redux";

const Update = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.admin);
  const { register, handleSubmit } = useForm();
  const [categoryRender, setCategory] = useState([{}]);
  const [supplierRender, setSupplier] = useState([{}]);
  const [fileName, setFileName] = useState("");
  const [filePath, setFilePath] = useState();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    inventory: "",
    supplier: {},
    category: {},
    urlImage: "",
  });
  const handleChangeFile = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setFilePath(e.target.files[0]);
    } else {
      alertNotify("", "Bạn chưa chọn hình", "warning");
      setFileName("");
      setFilePath(null);
    }
  };
  function handleChangeSupplier(e) {
    const supplierValue = e.target.value;
    if (supplierValue !== null) {
      detailSupplier(supplierValue).then((res) => {
        setProduct({ ...product, supplier: res.data.result });
      });
    }
  }
  function handleChangeCategory(e) {
    const cateValue = e.target.value;
    if (cateValue !== null) {
      detailCategory(cateValue).then((res) => {
        setProduct({ ...product, category: res.data.result });
      });
    }
  }

  const handleInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const cancelButton = () => {
    setProduct({
      ...product,
      id: null,
      name: "",
      description: "",
      price: "",
      inventory: "",
      supplier: {},
      category: {},
      urlImage: null,
    });
    setFileName("");
  };
  useEffect(() => {
    if (props.updateProduct) {
      setProduct(props.updateProduct);
    }
  }, [props.updateProduct]);
  useEffect(() => {
    ListCategory().then((res) => {
      setCategory(res.data.result);
    });
  }, []);
  useEffect(() => {
    ListSupplier().then((res) => {
      setSupplier(res.data.result);
    });
  }, []);
  const onSubmit = (data) => {
    const formData = new FormData();
    console.log(filePath);
    formData.append("file", filePath);
    setProduct({
      ...product,
      name: data.name,
      description: data.description,
      price: data.price,
      inventory: data.inventory,
    });
    if (props.updateProduct) {
      if (filePath) {
        uploadFile(formData).then((res) => {
          props.handleUpdateProduct(props.updateProduct.id, {
            ...product,
            urlImage: res.data.result,
          });
        });
      } else {
        props.handleUpdateProduct(props.updateProduct.id, product);
      }
    } else {
      if (filePath) {
        uploadFile(formData).then((res) => {
          props.handleAddSubmit({ ...product, urlImage: res.data.result });
        });
      } else {
        props.handleAddSubmit(product);
      }
    }
  };

  return (
    <div
      className="modal hide right"
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
              {props.updateProduct ? " Sửa sản phẩm" : "Thêm sản phẩm mới"}
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Radio */}
              <p>
                <strong>Tên sản phẩm</strong>
              </p>
              <input
                type="text"
                className="md-text form-control"
                name="name"
                ref={register}
                onChange={handleInput}
                placeholder="Nhập tên sản phẩm"
                value={product.name}
              />
              <p>
                <strong>Mô tả sản phẩm</strong>
              </p>
              <div className="md-form form">
                <input
                  type="text"
                  name="description"
                  ref={register}
                  className="md-text form-control"
                  onChange={handleInput}
                  placeholder="Nhập mô tả sản phẩm"
                  value={product.description}
                />
              </div>
              <p>
                <strong>Số Lượng</strong>
              </p>
              <div className="md-form form">
                <input
                  type="text"
                  name="inventory"
                  required
                  ref={register}
                  className="md-text form-control"
                  onChange={handleInput}
                  placeholder="Nhập số lượng sản phẩm"
                  value={product.inventory}
                />
              </div>
              <p>
                <strong>Giá</strong>
              </p>
              <div className="md-form form">
                <input
                  type="text"
                  name="price"
                  required
                  ref={register}
                  className="md-text form-control"
                  onChange={handleInput}
                  placeholder="Nhập giá sản phẩm"
                  value={product.price}
                />
              </div>
              <p>
                <strong>Hình Ảnh</strong>
              </p>
              <div className="md-form form">
                <input
                  className="md-text form-control"
                  type="file"
                  onChange={handleChangeFile}
                  style={{ display: "none" }}
                  id="image"
                />
                <label className="form-control" htmlFor="image">
                  Chọn Hình Ảnh
                </label>
                <div>{fileName}</div>
              </div>
              <p>
                <strong>Nhà cung cấp</strong>
              </p>
              <div className="md-form form">
                <select
                  className="md-text form-control"
                  onChange={handleChangeSupplier}
                >
                  <option>Chọn</option>
                  {supplierRender.map((item, i) => {
                    return (
                      <option key={i} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <p>
                <strong>Loại sản phẩm</strong>
              </p>
              <div className="md-form form">
                <select
                  className="md-text form-control"
                  onChange={handleChangeCategory}
                >
                  <option>Chọn</option>
                  {categoryRender.map((item, key) => {
                    return (
                      <option key={key} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
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
                    {props.updateProduct ? "Sửa" : "Thêm"}
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

export default withRouter(Update);
