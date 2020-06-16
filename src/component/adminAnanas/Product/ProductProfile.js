import React, { useRef, useState, useEffect } from "react";
import { Modal, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 500,
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
    width: 800,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: "0px auto",
    marginTop: "5px",
  },
}));
const styleImge ={
  width:"200px",
  height:"200px"
}
const ProductProfile = (props) => {
  const state = useSelector((state) => state.admin);
  console.log(state);
  const classes = useStyles();
  const rootRef = useRef(null);
  const [product, setProduct] = useState({ });
  const cancel = () =>{
    props.setOpen(false)
  }
  useEffect(() => {
    if(state.product){
    setProduct(state.product);
    }
  }, [state.product]);
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
          <form >
              <p>
                <strong>Hình ảnh sản phẩm</strong>
              </p>
              <div className="md-form form">
                <img src={product.urlImage} style={styleImge} />
              </div>
              <div className="row mt-3">
                <div className="col-lg-4">
                  <p>
                    <strong>Tên sản phẩm</strong>
                  </p>
                  <input
                    type="text"
                    className="md-text form-control"
                    name="name"
                    value={product.name}                   
                  />
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
                      placeholder="Nhập số lượng sản phẩm"
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
                      placeholder="Nhập giá sản phẩm"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3 ">
                <p>
                  <strong>Mô tả sản phẩm</strong>
                </p>
                <div className="md-form form">
            
                </div>
              </div>

              <div className="row">
                <div className="mt-3 col-sm-6 col-lg-6 col-md-6">
                  <p>
                    <strong>Nhà cung cấp</strong>
                  </p>
                  <div className="md-form form">
                    <select
                      className="md-text form-control"
                    >
                      <option>Chọn</option>
                
                    </select>
                  </div>
                </div>
                <div className="mt-3 row col-sm-6 col-lg-6 col-md-6">
                  <div className="col-lg-4">
                    <p>
                      <strong>Hình Ảnh</strong>
                    </p>
                    <div className="md-form form">
                      <input
                        className="md-text form-control"
                      
                        id="image"
                        type="file"
                        name="fileUploader"
                        id="fileUploader"
                        accept="image/*"
                      />
                      <label className="form-control" htmlFor="fileUploader">
                        Chọn
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    
                    <img />
                  </div>
                </div>
              </div>
              <hr />
              
                <div className="justify-content-center">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={cancel}
                  >
                    x Cancel
                  </button>
                </div>
            
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductProfile;
