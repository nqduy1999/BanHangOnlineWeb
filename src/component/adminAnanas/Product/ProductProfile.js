import React, { useRef, useState, useEffect } from "react";
import { Modal, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

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
  width: "80%",
  height: "250px",
  float: "right",
};
const ProductProfile = (props) => {
  const { register, handleSubmit } = useForm();
  const state = useSelector((state) => state.admin);
  const classes = useStyles();
  const rootRef = useRef(null);
  const [product, setProduct] = useState({});
  const cancel = () => {
    props.setOpen(false);
  };
  const handleInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if(props.openUpdate){
    setProduct(props.openUpdate);
    }
  }, [props.openUpdate])
  useEffect(() => {
    if(props.open){
    if (state.product) {
      console.log(state.product)
      setProduct(state.product);
    }
  }
  },[state.product]);
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
            <button
              type="button"
              className="btn btn-danger"
              style={{ marginLeft: "550px" }}
              onClick={cancel}
            >
              x
            </button>
            <form>
              <div className="row mt-3">
                <div className="col-lg-6">
                  <div className="md-form form">
                    <img src={product.urlImage} style={styleImge} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <p>
                    <strong>Tên sản phẩm</strong>
                  </p>
                  <input
                    type="text"
                    className="md-text form-control"
                    name="name"
                    value={product.name}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6">
                  <p>
                    <strong>Số Lượng</strong>
                  </p>
                  <div className="md-form form">
                    <input
                      type="text"
                      name="inventory"
                      required
                      className="md-text form-control"
                      placeholder="Nhập số lượng sản phẩm"
                      value={product.inventory}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <p>
                    <strong>Giá</strong>
                  </p>
                  <div className="md-form form">
                    <input
                      ype="text"
                      name="price"
                      required
                      className="md-text form-control"
                      placeholder="Nhập giá sản phẩm"
                      value={product.price}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3 ">
                <p>
                  <strong>Mô tả sản phẩm</strong>
                </p>
                <textarea
                  name="description"
                  value={product.description}
                  className="form form-control"
                />
                <div className="md-form form"></div>
              </div>

              <div className="row">
                <div className="mt-3 col-sm-6 col-lg-6 col-md-6">
                  <p>
                    <strong>Nhà cung cấp</strong>
                  </p>
                  <div className="md-form form">
                    <select className="md-text form-control">
                      <option>
                        {product.supplier ? product.supplier.name : ""}
                      </option>
                    </select>
                  </div>
                </div>
                <div className="mt-3 col-sm-6 col-lg-6 col-md-6">
                  <p>
                    <strong>Loại sản phẩm</strong>
                  </p>
                  <div className="md-form form">
                    <select className="md-text form-control">
                      <option>
                        {product.category ? product.category.name : ""}
                      </option>
                    </select>
                  </div>
                </div>
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
