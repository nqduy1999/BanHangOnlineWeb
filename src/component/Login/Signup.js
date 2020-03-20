import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

import Cookies from "js-cookie";

import HashLoader from "react-spinners/HashLoader";

import { withRouter, Link, useLocation } from "react-router-dom";

import { sendEmail } from "../../services/EmailSerivces";
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
        // gửi mail
        const contentEmail = {
          emailTo: data.email,
          subject: "ANANAS Đăng Ký",
          content:
            "Chúc mừng quý khách đã đăng đăng ký thành công tài khoản ANANAS và trở thành 1 khách hàng tiềm năng của chúng tôi. Cảm ơn quý khách"
        };
        sendEmail(contentEmail);
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

  return loading ? (
    <div className="container pl-5 pb-5">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <HashLoader
            size={300}
            //size={"150px"} this also works
            color={"#7971ea"}
            loading={loading}
          />
        </div>
      </div>
    </div>
  ) : (
      <div className="container">
        <div className="card">
          <h5 className="card-header primary-color white-text text-center py-4">
            <strong>Đăng Ký</strong>
          </h5>
          <div className="card-body px-lg-5 pt-0">
            <form
              className="text-center"
              style={{ color: "#757575" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-row">
                { resutl ?
                  <div className="col-md-12">
                    <span className=" alert alert-danger">{resutl}</span>
                  </div> : ""
                }
                <div className="col">
                  {/* First name */}
                  <div className="md-form">
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
                  <div className="col-md-12">
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
              <div className="md-form mt-0">
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
              <div className="col-md-12">
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
              <div className="md-form">
                <input
                  id="password"
                  className="form-control"
                  name="password"
                  type="password"
                  placeholder="Mật khẩu"
                  ref={register({ required: true, maxLength: 32, minLength: 8 })}
                />
              </div>
              <div className="col-md-12">
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
              <div className="md-form">
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
              <div className="col-md-12">
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
            </form>
            {/* Form */}
          </div>
        </div>
        {/* Material form register */}
      </div>
    );
};

export default withRouter(Signup);
