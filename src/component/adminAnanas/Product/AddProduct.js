import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useForm } from "react-hook-form";
import { ListCategory, detailCategory } from "../../../services/CategoryServices";
import { ListSupplier, detailSupplier } from "../../../services/SupplierService";
import { useEffect } from "react";
import { alertNotify } from "../../../untils/alert";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 500,
    flexGrow: 1,
    minWidth: 300,
    transform: "translateZ(0)",
    "@media all and (-ms-high-contrast: none)": {
      display: "none",
    },
  },
  modal: {
    display: "flex",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin:"0px auto",
    marginTop:"5px"
  },
}));
const img = {
    width: "100px",
    height: "100px"
  };
const AddProduct = (props) => {
  const { register, handleSubmit } = useForm();
  const classes = useStyles();
  const rootRef = useRef(null);
  const [filePath, setFilePath] = useState();
  const [product, setProduct] = useState();
  const [categoryRender, setCategory] = useState([{}]);
  const [supplierRender, setSupplier] = useState([{}]);
  const [imageReview, setImageReview] = useState();
  const wrapperRef = useRef(null)
  // lay gia tri nha cung cap 
  const  handleChangeSupplier = (e) =>{
    const supplierValue = e.target.value;
    if (supplierValue !== null) {
      detailSupplier(supplierValue).then((res) => {
        setProduct({ ...product, supplier: res.data.result });
      });
    }
  }
  // lay gia tri loai hang
  const handleChangeCategory = (e) => {
    const cateValue = e.target.value;
    if (cateValue !== null) {
      detailCategory(cateValue).then((res) => {
        setProduct({ ...product, category: res.data.result,
          caterogy:res.data.result
         });
      });
    }
  }
  // lay gia tri file
  const handleChangeFile =async (e) => {
    const newFiles = {};
    if (e.target.files[0]) {
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
      console.log(e.target.result);
      
    };
  }
  //
  const handleInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  //
  const onSubmit = () =>{

  }
  const cancel = () =>{
    
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
      setFilePath(null);
      setImageReview("");
      props.setOpen(false);
  }
  // Goi danh sach loai hang 
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
  return (
    <div className={classes.root} ref={rootRef}>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        
      >
          <div className={classes.paper}>
              {console.log(imageReview)}
              
          {/*Body*/}
          <div className="modal-body">
        
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
                placeholder="Nhập tên sản phẩm"
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
                  placeholder="Nhập mô tả sản phẩm"
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
                  placeholder="Nhập số lượng sản phẩm"
                />
              </div>
              <p>
                <strong>Giá</strong>
              </p>
              <div className="md-form form">
                <input
                ype="text"
                name="price"
                required
                ref={register}
                className="md-text form-control"
                onChange={handleInput}
                placeholder="Nhập giá sản phẩm"
                />
              </div>
              <p>
                <strong>Hình Ảnh</strong>
              </p>
              <div className="md-form form">
                <input
                  className="md-text form-control"
                  onChange={handleChangeFile}
                  style={{ display: "none" }}
                  id="image"
                  type="file" name="fileUploader" id="fileUploader"
                  accept="image/*"
                />
                <label className="form-control" htmlFor="fileUploader">
                  Chọn Hình Ảnh
                </label>
                  <div>  <img style={img} src={imageReview} alt="Chọn ảnh" />
        </div>
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
                    className="btn btn-danger"
                    onClick={cancel}
                  >
                    x Cancel
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default AddProduct;
