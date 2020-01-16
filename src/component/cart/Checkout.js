import React from 'react';

const Checkout = () => {
    return (
        <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="border p-4 rounded" role="alert">
                Bạn là khách hàng cũ ? <a data-toggle="modal" data-target="#modalLoginForm">Nhấp vào đây </a> để đăng nhập 
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 className="h3 mb-3 text-black">Chi tiết hoá đơn</h2>
              <div className="p-3 p-lg-5 border">
                <div className="form-group">
                  <label htmlFor="c_country" className="text-black">Quốc Gia <span className="text-danger">*</span></label>
                  <select id="c_country" className="form-control">
                    <option value={1}>Chọn Quốc Gia của bạn ? </option>    
                    <option value={2}>Việt Nam</option>    
                    <option value={3}>Singapore</option>    
                    <option value={4}>ThaiLand</option>    
                    <option value={5}>Indonesia</option>    
                    <option value={6}>Malaysia</option>    
                    <option value={7}>Philipines</option>    
                    <option value={8}>China</option>    
                    <option value={9}>Korea</option>    
                  </select>
                </div>
                <div className="form-group row">
                  <div className="col-md-6">
                    <label htmlFor="c_fname" className="text-black">Tên <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_fname" name="c_fname" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="c_lname" className="text-black">Họ và tên đệm <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_lname" name="c_lname" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="c_companyname" className="text-black">Tên công ty </label>
                    <input type="text" className="form-control" id="c_companyname" name="c_companyname" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="c_address" className="text-black">Địa chỉ <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_address" name="c_address" placeholder="Tên đường" />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Tên toà nhà, phòng ban ( nếu là công ty )" />
                </div>
                <div className="form-group row">
                  <div className="col-md-6">
                    <label htmlFor="c_state_country" className="text-black">Khu vực bạn sống<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_state_country" name="c_state_country" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="c_postal_zip" className="text-black">Mã Zip <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_postal_zip" name="c_postal_zip" />
                  </div>
                </div>
                <div className="form-group row mb-5">
                  <div className="col-md-6">
                    <label htmlFor="c_email_address" className="text-black">Email <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_email_address" name="c_email_address" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="c_phone" className="text-black">Số điện thoại <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_phone" name="c_phone" placeholder="Số điện thoại của bạn" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="c_create_account" className="text-black" data-toggle="collapse" href="#create_an_account" role="button" aria-expanded="false" aria-controls="create_an_account"><input type="checkbox" defaultValue={1} id="c_create_account" /> Tạo một tài khoản?</label>
                  <div className="collapse" id="create_an_account">
                    <div className="py-2">
                      <p className="mb-3"><a data-toggle="modal" data-target="#modalRegisterForm">Nhấp vào đây </a> để tạo tài khoản. Nếu bạn là khách hàng cũ vui lòng đăng nhập ở phía trên.</p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="c_ship_different_address" className="text-black" data-toggle="collapse" href="#ship_different_address" role="button" aria-expanded="false" aria-controls="ship_different_address"><input type="checkbox" defaultValue={1} id="c_ship_different_address" /> Giao tới một địa chỉ khác?</label>
                  <div className="collapse" id="ship_different_address">
                    <div className="py-2">
                      <div className="form-group">
                        <label htmlFor="c_diff_country" className="text-black">Quốc Gia <span className="text-danger">*</span></label>
                        <select id="c_diff_country" className="form-control">
                          <option value={1}>Chọn Quốc Gia / Khu vực của bạn </option>    
                          <option value={2}>North American</option>    
                          <option value={3}>South American</option>    
                          <option value={4}>Australinea</option>    
                          <option value={5}>Africa</option>    
                          <option value={6}>Europe</option>    
                          <option value={7}>Asia</option>    
                        </select>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6">
                          <label htmlFor="c_diff_fname" className="text-black">Tên <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="c_diff_fname" name="c_diff_fname" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="c_diff_lname" className="text-black">Họ và tên đệm <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="c_diff_lname" name="c_diff_lname" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-12">
                          <label htmlFor="c_diff_companyname" className="text-black">Tên công ty ( nếu có ) </label>
                          <input type="text" className="form-control" id="c_diff_companyname" name="c_diff_companyname" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-12">
                          <label htmlFor="c_diff_address" className="text-black">Địa chỉ <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="c_diff_address" name="c_diff_address" placeholder="Tên đường" />
                        </div>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Tên toà nhà, Quận cụ thể " />
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6">
                          <label htmlFor="c_diff_state_country" className="text-black">Khu vực / Quốc Gia <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="c_diff_state_country" name="c_diff_state_country" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="c_diff_postal_zip" className="text-black">Mã Zip <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="c_diff_postal_zip" name="c_diff_postal_zip" />
                        </div>
                      </div>
                      <div className="form-group row mb-5">
                        <div className="col-md-6">
                          <label htmlFor="c_diff_email_address" className="text-black">Email <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="c_diff_email_address" name="c_diff_email_address" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="c_diff_phone" className="text-black">Số điện thoại <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="c_diff_phone" name="c_diff_phone" placeholder="Nhập số điện thoại " />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="c_order_notes" className="text-black">Ghi chú</label>
                  <textarea name="c_order_notes" id="c_order_notes" cols={30} rows={5} className="form-control" placeholder="Viết ghi chú giao hàng của bạn ở đây .... " defaultValue={""} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h2 className="h3 mb-3 text-black">Mã khuyến mãi</h2>
                  <div className="p-3 p-lg-5 border">
                    <label htmlFor="c_code" className="text-black mb-3">Nhập mã khuyến mãi nếu bạn có </label>
                    <div className="input-group w-75">
                      <input type="text" className="form-control" id="c_code" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="button-addon2" />
                      <div className="input-group-append">
                        <button className="btn btn-primary btn-sm" type="button" id="button-addon2">Áp dụng mã </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-12">
                  <h2 className="h3 mb-3 text-black">Hoá đơn của bạn </h2>
                  <div className="p-3 p-lg-5 border">
                    <table className="table site-block-order-table mb-5">
                      <thead>
                        <tr><th>Sản Phẩm</th>
                          <th>Tổng tiền</th>
                        </tr></thead>
                      <tbody>
                        <tr>
                          <td>Giấy A3<strong className="mx-2">x</strong> 4</td>
                          <td>20000 vnd</td>
                        </tr>
                        <tr>
                          <td>Bút bi<strong className="mx-2">x</strong>   1</td>
                          <td>4000 vnd</td>
                        </tr>
                        <tr>
                          <td className="text-black font-weight-bold"><strong>Tổng tiền giỏ hàng</strong></td>
                          <td className="text-black">24000 vnd</td>
                        </tr>
                        <tr>
                          <td className="text-black font-weight-bold"><strong>Tổng tiền phải trả</strong></td>
                          <td className="text-black font-weight-bold"><strong>24000 vnd</strong></td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="border p-3 mb-3">
                      <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsebank" role="button" aria-expanded="false" aria-controls="collapsebank">Internet banking</a></h3>
                      <div className="collapse" id="collapsebank">
                        <div className="py-2">
                          <p className="mb-0">Đơn hàng được thanh toán ngay lập tức. </p>
                        </div>
                      </div>
                    </div>
                    <div className="border p-3 mb-3">
                      <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsecheque" role="button" aria-expanded="false" aria-controls="collapsecheque">Chuyển trực tiếp qua ngân hàng </a></h3>
                      <div className="collapse" id="collapsecheque">
                        <div className="py-2">
                          <p className="mb-0">Chuyển tiền trực tiếp tại ngân hàng, đơn hàng sẽ được thanh toán trong vòng 2 - 3 ngày</p>
                        </div>
                      </div>
                    </div>
                    <div className="border p-3 mb-5">
                      <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsepaypal" role="button" aria-expanded="false" aria-controls="collapsepaypal">Paypal</a></h3>
                      <div className="collapse" id="collapsepaypal">
                        <div className="py-2">
                          <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-lg py-3 btn-block">Đặt hàng</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    );
};

export default Checkout;