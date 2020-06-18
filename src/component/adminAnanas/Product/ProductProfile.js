import React, { useRef, useState, useEffect } from "react";
import { Modal, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  ListCategory,
  detailCategory,
} from "../../../services/CategoryServices";
import {
  ListSupplier,
  detailSupplier,
} from "../../../services/SupplierService";
import { uploadFile } from "../../../services/FileService";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    transform: "translateZ(0)",
    "@media all and (-ms-high-contrast: none)": {
      display: "none",
      position: "absolute",
    },
  },
  modal: {
    display: "flex",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 650,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: "0px auto",
    marginTop: "5px",
  },
}));
const styleImge = {
  width: "100%",
  height: "250px",
  float: "right",
};
const ProductProfile = (props) => {
  const { register, handleSubmit } = useForm();
  const state = useSelector((state) => state.admin);
  const classes = useStyles();
  const rootRef = useRef(null);
  const [product, setProduct] = useState({});
  const [categoryRender, setCategory] = useState([{}]);
  const [supplierRender, setSupplier] = useState([{}]);
  const [filePath, setFilePath] = useState();
  const cancel = () => {
    setFilePath(null);
    setImageReview(null);
    props.setOpenUpdate(null);
    props.setOpen(false);
  };
  const handleInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log(product);
  };
  const [imageReview, setImageReview] = useState();
  const wrapperRef = useRef(null);
  // lay gia tri nha cung cap
  const handleChangeSupplier = (e) => {
    const supplierValue = e.target.value;
    if (supplierValue !== null) {
      detailSupplier(supplierValue).then((res) => {
        setProduct({ ...product, supplier: res.data.result });
      });
    }
  };
  // lay gia tri loai hang
  const handleChangeCategory = (e) => {
    const cateValue = e.target.value;
    console.log(cateValue);
    if (cateValue !== null) {
      detailCategory(cateValue).then((res) => {
        setProduct({
          ...product,
          category: res.data.result,
          caterogy: res.data.result,
        });
      });
    }
  };
  // lay gia tri file
  const handleChangeFile = async (e) => {
    const newFiles = {};
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      setFilePath(e.target.files[0]);
      var reader = new FileReader();
      reader.onload = loadImageContent(e.target.files[0].name, newFiles);
      await reader.readAsDataURL(e.target.files[0]);
    } else {
      setFilePath(null);
      setImageReview("");
    }
  };
  const loadImageContent = (name, newFiles) => {
    return (e) => {
      setImageReview(e.target.result);
    };
  };
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", filePath);
    setProduct({
      ...product,
      name: data.name,
      description: data.description,
      price: data.price,
      inventory: data.inventory,
    });
    if (filePath) {
      uploadFile(formData).then((res) => {
        props.updateProduct(props.openUpdate.id,{ ...product, urlImage: res.data.result });
        props.setOpen(false);
      });
    } else {
      props.updateProduct(props.openUpdate.id,product);
      props.setOpen(false);
    }
  };
  useEffect(() => {
    ListCategory().then((res) => {
      setCategory(res.data.result);
    });
  }, []);
  // Goi danh sach nha cung cap
  useEffect(() => {
    ListSupplier().then((res) => {
      setSupplier(res.data.result);
    });
  }, []);
  useEffect(() => {
    if (props.openUpdate) {
      setProduct(props.openUpdate);
    }
  }, [props.openUpdate]);
  useEffect(() => {
    if (props.open) {
      if (state.product) {
        console.log(props.openUpdate);
        setProduct(state.product);
      }
    }
  }, [state]);
  return (
    <div className={classes.root} ref={rootRef}>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <div className="modal-body">
            {props.openUpdate ? (
              ""
            ) : (
              <button
                className="btn-danger btn"
                style={{ marginLeft: "550px" }}
                onClick={cancel}
              >
                x
              </button>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row mt-3">
                <div className="col-lg-6">
                  <div className="md-form form">
                    {/* Nếu không chọn hình mới sẽ trở lại hình cũ  */}
                    {imageReview ? (
                      <img src={imageReview} style={styleImge} />
                    ) : (
                      <img src={product.urlImage} style={styleImge} />
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <p>
                    <strong>Tên sản phẩm</strong>
                  </p>

                  {props.openUpdate ? (
                    <input
                      type="text"
                      className="md-text form-control"
                      name="name"
                      value={product.name}
                      onChange={handleInput}
                    />
                  ) : (
                    <input
                      type="text"
                      className="md-text form-control"
                      name="name"
                      value={product.name}
                    />
                  )}
                </div>
              </div>
              {props.openUpdate ? (
                <div className="row mt-3">
                  <div className=" col-lg-4 md-form form">
                    <p>
                      <strong>Hình Ảnh</strong>
                    </p>
                    <input
                      className="md-text form-control"
                      onChange={handleChangeFile}
                      style={{ display: "none" }}
                      id="image"
                      type="file"
                      name="fileUploader"
                      id="fileUploader"
                      accept="image/*"
                    />
                    <label className="form-control" htmlFor="fileUploader">
                      Chọn Hình
                    </label>
                  </div>
                  <div className="col-lg-4">
                    <p>
                      <strong>Số Lượng</strong>
                    </p>
                    <div className="md-form form">
                      <input
                        type="text"
                        name="inventory"
                        required
                        className="md-text form-control"
                        value={product.inventory}
                        onChange={handleInput}
                        ref={register}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <p>
                      <strong>Giá</strong>
                    </p>
                    <div className="md-form form">
                      <input
                        ype="text"
                        name="price"
                        required
                        className="md-text form-control"
                        value={product.price}
                        ref={register}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="row mt-3">
                  <div className="col-lg-6">
                    <p>
                      <strong>Số Lượng</strong>
                    </p>
                    <div className="md-form form">
                      {props.openUpdate ? (
                        <input
                          type="text"
                          name="inventory"
                          required
                          className="md-text form-control"
                          value={product.inventory}
                          ref={register}
                          onChange={handleInput}
                        />
                      ) : (
                        <input
                          type="text"
                          name="inventory"
                          required
                          className="md-text form-control"
                          value={product.inventory}
                        />
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      <strong>Giá</strong>
                    </p>
                    <div className="md-form form">
                      {props.openUpdate ? (
                        <input
                          ype="text"
                          name="price"
                          required
                          className="md-text form-control"
                          value={product.price}
                          ref={register}
                          onChange={handleInput}
                        />
                      ) : (
                        <input
                          ype="text"
                          name="price"
                          className="md-text form-control"
                          value={product.price}
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-3 ">
                <p>
                  <strong>Mô tả sản phẩm</strong>
                </p>
                {props.openUpdate ? (
                             <textarea
                             name="description"
                             value={product.description}
                             onChange={handleInput}
                             className="form form-control"
                           />
                      ) : (
                        <textarea
                        name="description"
                        value={product.description}
                        className="form form-control"
                      />
                      )}
                <div className="md-form form"></div>
              </div>

              <div className="row">
                <div className="mt-3 col-sm-6 col-lg-6 col-md-6">
                  <p>
                    <strong>Nhà cung cấp</strong>
                  </p>
                  <div className="md-form form">
                    <select className="md-text form-control" onChange={handleChangeSupplier}>
                      <option>
                        {product.supplier ? product.supplier.name : ""}
                      </option>
                      {props.openUpdate
                        ? supplierRender.map((item, i) => {
                            return (
                              <option key={i} value={item.id}>
                                {item.name}
                              </option>
                            );
                          })
                        : ""}
                    </select>
                  </div>
                </div>
                <div className="mt-3 col-sm-6 col-lg-6 col-md-6">
                  <p>
                    <strong>Loại sản phẩm</strong>
                  </p>
                  <div className="md-form form">
                    <select className="md-text form-control" onChange={handleChangeCategory}>
                      <option>
                        {product.category ? product.category.name : ""}
                      </option>
                      {props.openUpdate
                        ? categoryRender.map((item, i) => {
                            return (
                              <option key={i} value={item.id}>
                                {item.name}
                              </option>
                            );
                          })
                        : ""}
                    </select>
                  </div>
                </div>
                {props.openUpdate ? (
                  <div className="form mt-4 ml-5">
                    <button
                      type="submit"
                      className="btn-danger btn mr-2"
                    >
                      Update
                    </button>
                    <button className="btn-danger btn" onClick={cancel}>
                      Cancel
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <br />
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductProfile;
