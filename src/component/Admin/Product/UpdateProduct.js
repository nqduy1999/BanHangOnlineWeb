import React, {useEffect} from "react";
import { Formik, Form } from "formik";
const UpdateProduct = props => {
    
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
            <Formik 
               initialValues={{
                tenSanPham: "",
                soLuongTon: 0,
                giaSanPham: 0,
                moTa: "",
              }}
             onSubmit={(data)=>{
                if(props.updateUser === null){
                 console.log(data.maSanPham);
                 {props.handleAddSubmit(data)}
                }
                else {
                    console.log(data);
                {props.handleUpdateProduct(props.product.maSanPham, data)}
                }
             }}
            render={({ handleChange, values, errors, touched }) =>(
              <Form >
                <div className="form-group">
                  <label>Tên</label>
                  <input
                    type="text"
                    className="form-control"
                    name="tenSanPham"
                    required
                    value={values.tenSanPham}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Mô Tả</label>
                  <input
                    type="text"
                    className="form-control"
                    name="moTa"
                    maxLength="60"
                    required
                    value={values.moTa}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Giá</label>
                  <input
                    type="text"
                    className="form-control"
                    name="giaSanPham"
                    required
                    value={values.giaSanPham}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Số Lượng</label>
                  <input
                    type="text"
                    required
                    pattern="^[0-9]+$"
                    className="form-control"
                    name="soLuongTon"
                    value={values.soLuongTon}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </Form>
            )}
            />
            </div>
          </div>
        </div>
      </div>
  );
};

export default UpdateProduct;
