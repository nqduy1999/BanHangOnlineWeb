import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

import Cookies from "js-cookie";

import { withRouter, Link, useLocation } from "react-router-dom";

import Loading from "../loading/Loading";
import { signup } from "../../services/UserServices";
import { alertNotify } from "../../untils/alert";
const Signup = props => {
  // react form
  const { handleSubmit, register, errors, watch } = useForm();
  const [resutl, setResutl] = useState();
  //loading
  const [loading, setLoading] = useState(true);
  // auth route
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  // Đăng ký
  const onSubmit = data => {
    setLoading(true);
    signup(data).then(res => {
      setLoading(false);
      if (res.error !== true && res.data.code !== 0) {
        setResutl(res.data.message);
      } else {
        // thông báo
        alertNotify("Thông báo", "Đăng ký thành công", "success");
        // chuyển hướng
        props.history.push("/dangnhap");
      }
    });
  };
  useEffect(() => {
    setLoading(false);
    Cookies.get("authtoken")
      ? props.history.replace(from)
      : props.history.push("/dangky");
  }, []);

  return loading ? <Loading loading={loading}/> : (
      <div className="container">
        <form className="form-medium shadow"
                onSubmit={handleSubmit(onSubmit)}
              >
        <div className="card">
          <h5 className="card-header text-white bg-info text-center py-4 mb-3">
            <strong>Đăng Ký</strong>
          </h5>
          <div className="card-body px-lg-5 pt-0">
              <div className="row">
                { resutl ?
                  <div className="col-md-12">
                    <span className=" alert alert-danger">{resutl}</span>
                  </div> : ""
                }
                <div className="col">
                  {/* First name */}
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fas fa-user-circle"></i></span>
                    </div>
                    <input
                      id="username"
                      className="form-control"
                      name="username"
                      type="text"
                      placeholder="Tên tài khoản"
                      ref={register({
                        required: true,
                        maxLength: 32,
                        minLength: 6
                      })}
                    />
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    {errors.username && errors.username.type === "required" && (
                      <span className="alert alert-danger ml-2" role="alert">
                        Vui lòng nhập tên tài khoản
                      </span>
                    )}
                    {errors.username && errors.username.type === "maxLength" && (
                      <span className="alert alert-danger" role="alert">
                        Tên tài khoản nhỏ hơn 32 kí tự
                      </span>
                    )}
                    {errors.username && errors.username.type === "minLength" && (
                      <span className="alert alert-danger" role="alert">
                        Tên tài khoản lớn hơn 6 kí tự
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="input-group mt-0">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-envelope-square"></i></span>
                </div>
                <input
                  id="email"
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="Email"
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Vui lòng nhập đúng định dạng email"
                    }
                  })}
                />
              </div>
              <div className="col-md-12 mt-3 mb-3">
                {errors.email && errors.email.type === "pattern" && (
                  <span className="alert alert-danger" role="alert">
                    {errors.email.message}
                  </span>
                )}
                {errors.email && errors.email.type === "required" && (
                  <span className="alert alert-danger" role="alert">
                    Vui lòng nhập email
                  </span>
                )}
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fas fa-key"></i></span>
                </div>
                <input
                  id="password"
                  className="form-control"
                  name="password"
                  type="password"
                  placeholder="Mật khẩu"
                  ref={register({ required: true, maxLength: 32, minLength: 8 })}
                />
              </div>
              <div className="col-md-12 mt-3 mb-3">
                {errors.password && errors.password.type === "required" && (
                  <span className="alert alert-danger" role="alert">
                    Vui lòng nhập mật khẩu
                  </span>
                )}
                {errors.password && errors.password.type === "maxLength" && (
                  <span className="alert alert-danger" role="alert">
                    Mật khẩu phải nhỏ hơn 32 kí tự
                  </span>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <span className="alert alert-danger" role="alert">
                    Mật khẩu phải lớn hơn 8 kí tự
                  </span>
                )}
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fas fa-key"></i></span>
                </div>
                <input
                  id="passwordConfirm"
                  className="form-control"
                  name="passwordConfirm"
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  ref={register({
                    required: true,
                    validate: value => value === watch("password")
                  })}
                />
              </div>
              <div className="col-md-12 mt-3 mb-3">
                {errors.passwordConfirm &&
                  errors.passwordConfirm.type === "required" && (
                    <span className="alert alert-danger" role="alert">
                      Vui lòng nhập mật khẩu xác nhận
                    </span>
                  )}
                {errors.passwordConfirm &&
                  errors.passwordConfirm.type === "validate" && (
                    <span className="alert alert-danger" role="alert">
                      Mật khẩu không trùng khớp
                    </span>
                  )}
              </div>
              <button
                className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                type="submit"
              >
                Đăng Ký
            </button>
              {/* Terms of service */}
              <p>
                Nhấn <em> <Link to="/dangnhap">Đăng nhập</Link> </em> nếu bạn đã có tài khoản.
              </p>
          </div>
        </div>
        {/* Material form register */}
        </form>
        {/* Form */}
      </div>
    );
};

export default withRouter(Signup);
