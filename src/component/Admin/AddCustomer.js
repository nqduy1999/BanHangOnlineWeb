import React from 'react';

const AddCustomer = () => {
    return (
        <div>
        {/* Material form contact */}
        <div className="card">
          <h5 className="card-header warning-color white-text text-center py-4">
            <strong>Thêm khách hàng</strong>
          </h5>
          {/*Card content*/}
          <div className="card-body px-lg-5 pt-0">
            {/* Form */}
            <form className="text-center" style={{color: '#757575'}} action="#!">
              {/* Ten san pham */}
              <div className="md-form mt-3">
                <input type="text" id="materialContactFormName" className="form-control" />
                <label htmlFor="materialContactFormName">Tên sản phẩm</label>
              </div>
              {/* Gia san pham */}
              <div className="md-form">
                <input type="email" id="materialContactFormEmail" className="form-control" />
                <label htmlFor="materialContactFormEmail">Giá sản phẩm</label>
              </div>
              {/* Subject */}
              <div className="md-form">
                <input type="email" id="materialContactFormEmail" className="form-control" />
                <label htmlFor="materialContactFormEmail">Số lượng tồn</label>
              </div>
              {/*Message*/}
              <div className="md-form">
                <input type="email" id="materialContactFormEmail" className="form-control" />
                <label htmlFor="materialContactFormEmail">Nhà cung cấp</label>
              </div>
              {/* Copy */}
              <div className="md-form">
                <input type="email" id="materialContactFormEmail" className="form-control" />
                <label htmlFor="materialContactFormEmail">Loại sản phẩm</label>
              </div>
              {/* Send button */}
              <button className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Thêm </button>
            </form>
            {/* Form */}
          </div>
        </div>
        {/* Material form contact */}
        
                </div>
    );
};

export default AddCustomer;