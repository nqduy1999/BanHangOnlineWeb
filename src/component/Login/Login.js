import React, {useState, useEffect}from 'react';

import { Link, withRouter } from 'react-router-dom';

import { useForm } from "react-hook-form";

import Cookies from 'js-cookie';

import Swal from 'sweetalert2';

import postToDoEndpoint from '../../services/postToDoEndpoint';
const Login = (props) => {
  // React form
    const { register, handleSubmit, errors } = useForm();
    const url = "http://localhost:8080/api/dangnhap";
    const [resutl, setResutl] = useState();
    // Hàm custom dùng sẵn
    const [login, postLogin] = postToDoEndpoint(url);
    // Đăng nhập
    const onSubmit = data => {
        postLogin(data);
    }; // your form submit function which will invoke after successful validation
    useEffect(() => {
      if(login.complete) {
        Cookies.set('authtoken', login.data.message);
        if(login.code !== 0) {
          setResutl(login.data.message);
        } else {
          //thông báo
          const {value: accept} = Swal.fire({
            title: "Thông báo",
            text: "Đăng nhập thành công",
            icon: "success"
          });
          // chuyển hướng
          props.history.push('/trangchu');
        }
      }
    }, [login])
    return (
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
    );
};

export default withRouter(Login);