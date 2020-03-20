import Cookies from "js-cookie";

import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";

import { Link, withRouter, useLocation } from "react-router-dom";

import HashLoader from "react-spinners/HashLoader";

import { login } from "../../services/UserServices";
import { alertNotify } from "../../untils/alert";
const Login = props => {
  // React form
  const { register, handleSubmit, errors } = useForm();
  const [resutl, setResutl] = useState();
  //loading
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  // auth route
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  // Đăng nhập
  const onSubmit = data => {
    login(data).then(res => {
      setLoading(false);
      // kiểm tra lỗi từ server
      if (res.error !== true && res.data.code !== 0) {
        setResutl(res.data.message);
      } else {
        Cookies.set("authtoken", res.data.result); // mỗi khi thực thi đến server mà cần quyền truy cập phải kèm token
        Cookies.set("username", data.username); // lưu user name để tìm kiếm thông tin tài khoản dựa vào username
        //thông báo
        alertNotify("Thông báo", "Đăng nhập thành công", "success");
        dispatch({
          type: "SAVE",
          user: {
            account: {
              username: data.username
            }
          }
        });
        // chuyển hướng
        props.history.push("/trangchu");
      }
    });
  }; // your form submit function which will invoke after successful validation
  useEffect(() => {
    setLoading(false);
    Cookies.get("authtoken")
      ? props.history.replace(from)
      : props.history.push("/dangnhap");
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card">
          <h5 className="card-header primary-color white-text text-center py-4">
            <strong>Đăng Nhập</strong>
          </h5>
          <div className="card-body px-lg-5 pt-0">
              { resutl ?
                <div className="col-md-12">
                  <p className=" alert alert-danger">{resutl}</p>
                </div> : ""
              }
            <form
              className="text-center"
              style={{ color: "#757575" }}
            >
              <div className="md-form">
                <input
                className="form-control"
                  name="username"
                  type="text"
                  ref={register({ required: true })}
                  placeholder="Tài Khoản"
                />
              </div>
              <div className="d-flex justify-content-around">
              {errors.username && <p>Tài Khoản không được để trống</p>}
              </div>
              <div className="md-form">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  ref={register({ required: true })}
                  placeholder="Mật Khẩu"
                />
              </div>
              <div className="d-flex justify-content-around">
              {errors.password && <p>Mật khẩu không được để trống</p>}
              </div>
              <button
                className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                type="submit"
              >
                Đăng Nhập
              </button>
              <p>
                Bạn chưa có tài khoản ?
                <Link to="/dangky">Nhấn vào đây để đăng ký</Link>
              </p>
            </form>
          </div>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);
