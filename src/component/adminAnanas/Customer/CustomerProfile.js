import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CustomerProfile = () => {
  const state = useSelector((state) => state.admin);
  const [khachhang, setKhachhang] = useState({
    account: { username: "" },
  });
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    if (state.customer) {
      console.log(state.customer);
      setKhachhang(state.customer);
    }
  }, [state.customer]);
  const capnhat = () =>{
      setEdit(true);
  }
  const handleInput = (e) => {
    setKhachhang({ ...khachhang, [e.target.name]: e.target.value });
    console.log(khachhang);
  };
  return (
    <div
      className="modal fade"
      id="customerprofile"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
            <Link className="text-right" onClick={capnhat}>
              <i class="fa fa-edit"></i>Cập nhật
            </Link>
            <div className="row">
              {edit ? (
                <div className="col-lg-3 col-sm-3 col-3">
                  <img
                    src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed670179e384f0007b7db8f%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1032%26cropX2%3D3642%26cropY1%3D186%26cropY2%3D2795"
                    className="img-thumbnail border-0"
                    style={{ width: "100%" }}
                  />
                  <h4 class="form-control">
                    {khachhang.name ? (
                      khachhang.name
                    ) : (
                      <Link className="text-info">Chưa cập nhật !</Link>
                    )}
                  </h4>
                </div>
              ) : (
                <div className="col-lg-3 col-sm-3 col-3">
                  <img
                    src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed670179e384f0007b7db8f%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1032%26cropX2%3D3642%26cropY1%3D186%26cropY2%3D2795"
                    className="img-thumbnail border-0"
                    style={{ width: "100%" }}
                  />
                  <input name="name" class="form-control" value={khachhang.name} />
                </div>
              )}
              <div className="col-lg-9 col-sm-9 col-9">
                <form>
                  <div className="form-group ">
                    <label htmlFor="username" className="col-form-label">
                      Tài khoản :
                    </label>
                    <span id="username" class="form-control">
                      {khachhang.account.username ? (
                        khachhang.account.username
                      ) : (
                        <Link class="text-info">Chưa cập nhật !</Link>
                      )}
                    </span>
                  </div>
                  <div className="form-group ">
                    <label htmlFor="phone" className="col-form-label">
                      Số điện thoại :
                    </label>
                    <span id="phone" class="form-control">
                      {khachhang.phone ? (
                        khachhang.phone
                      ) : (
                        <Link className="text-info">Chưa cập nhật !</Link>
                      )}
                    </span>
                  </div>
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <label htmlFor="birthday" className="col-form-label">
                        Ngày sinh :
                      </label>
                      <span id="birthday" class="form-control">
                        {khachhang.birthday ? (
                          khachhang.birthday
                        ) : (
                          <Link className="text-info">Chưa cập nhật !</Link>
                        )}
                      </span>
                    </div>
                    <div className="form-group col-lg-6">
                      <label htmlFor="identityCard" className="col-form-label">
                        Chứng minh thư :
                      </label>
                      <span id="identityCard" class="form-control">
                        {khachhang.identityCard ? (
                          khachhang.identityCard
                        ) : (
                          <Link className="text-info">Chưa cập nhật !</Link>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="address" className="col-form-label">
                      Địa chỉ
                    </label>
                    <span type="text" className="form-control" id="address">
                      {khachhang.address ? (
                        khachhang.address.street +
                        ", " +
                        khachhang.address.town +
                        ", " +
                        khachhang.address.ward +
                        ", " +
                        khachhang.address.district +
                        ", " +
                        khachhang.address.city
                      ) : (
                        <Link class="text-info">Chưa cập nhật !</Link>
                      )}
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
