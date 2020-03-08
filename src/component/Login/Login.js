import React, {useState, useEffect}from 'react';

import { Link, withRouter } from 'react-router-dom';

import { useForm } from "react-hook-form";

import Cookies from 'js-cookie';

import Swal from 'sweetalert2';

import HashLoader from "react-spinners/HashLoader";

import postToDoEndpoint from '../../services/postToDoEndpoint';
const Login = (props) => {
  // React form
    const { register, handleSubmit, errors } = useForm();
    const url = "http://localhost:8080/api/dangnhap";
    const [resutl, setResutl] = useState();
    // Hàm custom dùng sẵn
    const [login, postLogin] = postToDoEndpoint(url);
    //loading
    const [loading, setLoading] = useState(true);
    // Đăng nhập
    const onSubmit = data => {
        postLogin(data);
    }; // your form submit function which will invoke after successful validation
    useEffect(() => {
      setLoading(false);
    }, []);
    useEffect(() => {
      if(login.complete && login.error !== true) {
        setLoading(false);
        // kiểm tra lỗi từ server
        if(login.data.code !== 0) {
          setResutl(login.data.message);
        } else {
          Cookies.set('authtoken', login.data.message); // mỗi khi thực thi đến server mà cần quyền truy cập phải kèm token
          Cookies.set('username', login.data.result.taiKhoan); // lưu user name để tìm kiếm thông tin tài khoản dựa vào username
          //thông báo
          Swal.fire({
            title: "Thông báo",
            text: "Đăng nhập thành công",
            icon: "success"
          });
          // chuyển hướng
          props.history.push('/trangchu');
        }
      } else {
        if(login.complete && login.error !== false) {
          setResutl("Lỗi truy cập, bạn không được phép truy cập");
        }
      }
    }, [login])
    return loading ?
      (
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
      ) :
    (
      <div>
      <form className="container" onSubmit={handleSubmit(onSubmit)} >
      <div className="row">
      <div className="col-md-5">
        <h1>Đăng nhập</h1>
      </div>
      {
        resutl ? <div className="alert alert-warning" role="alert">{resutl}</div> : ''
      }
    </div>
          <div className="row">
            <div className="col-md-3">
              <label>Tài Khoản</label>
            </div>
            <div className="col-md-6">
              <div className="form-group">
              <input className="form-control" name="taiKhoan" type="text" ref={register({ required: true })}/>
              </div>
            </div>
            <div className="col-md-3">
            {errors.taiKhoan && <p>Tài khoản không được để trống</p>}
            </div>
            </div>
            <div className="row">
              <div className="col-md-3">
              <label>Mật Khẩu</label>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                <input className="form-control" name="matKhau" type="password" ref={register({ required: true })}/>
                </div>
              </div>
              <div className="col-md-3">
              {errors.pass && <p>Mật khẩu không được để trống</p>}
              </div>
            </div>
          <div className="row">
            <div className="col-md-9">
              <input className="btn btn-info" type="submit" value="Đăng Nhập"/>
            </div>
          </div>
          <Link to="/dangky"><p>Bạn chưa có tài khoản ? Nhấn vào đây để đăng ký </p></Link>
      </form>
      </div>
    );
};

export default withRouter(Login);