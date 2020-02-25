import React from 'react';
import { useState } from 'react';

const AddCustomer = (props) => {
  const [data, setData] = React.useState(
    {
      tenSanpham: "",
      gia: 0,
      soluong: 0,
      hinhAnh:"",
    }
  )
  function _handleChange (event){
    console.log(event.target.value);
    setData([event.target.value]
    )
  }
  function _handleSubmit (evt){
    evt.preventDefault();
        
  }
    return (
      <div
      className="modal fade"
      id="themsanpham"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Thêm sản phẩm</h5>
            {/* {this.props.updateUser ? "Update User" : "Add User "} */}
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
            <form onSubmit={_handleSubmit}>
              <div className="form-group">
                <label>Tên sản phẩm</label>
                <input
                  type="text"
                  className="form-control"
                  name="tenSanpham"
                  required
                  onChange={_handleChange}
                  value={data.tenSanpham}
                />
              </div>
              <div className="form-group">
                <label>Giá</label>
                <input
                  type="text"
                  className="form-control"
                  name="gia"
                  maxLength="10"
                  required
                  onChange={_handleChange}
                  value={data.gia}
                />
              </div>
              <div className="form-group">
                <label>Số Lượng</label>
                <input
                  type="text"
                  className="form-control"
                  name="soLuong"
                  maxLength="4"
                  required
                  onChange={_handleChange}
                  value={data.soluong}
                />
              </div>
              <div className="form-group">
                <label>Hình Ảnh</label>
                <input
                  type="file"
                  className="form-control"
                  name="hinhAnh"
                  onChange={_handleChange}
                  value={data.hinhAnh}
                />
              </div>
              <button type="submit" className="btn btn-success" style={{marginLeft:"150px"}}>
                Thêm Sản Phẩm 
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AddCustomer;