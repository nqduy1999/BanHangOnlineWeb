import React, {useState, useEffect} from 'react';

import { useForm } from "react-hook-form";

import { withRouter, Link } from 'react-router-dom';

import Swal from 'sweetalert2';

import postToDoEndpoint from '../../services/postToDoEndpoint';


const Signup = (props) => {
  // react form
    const { handleSubmit, register, errors, watch } = useForm();
    const url = "http://localhost:8080/api/dangky";
    const [resutl, setResutl] = useState();
    // Hàm custom dùng sẵn
    const [signup, postSignUp] = postToDoEndpoint(url);
    // Đăng ký
    const onSubmit = data =>{
      postSignUp(data);
    }
    useEffect(() => {
      if(signup.complete) {
        if(signup.data.code !== 0) {
          setResutl(signup.data.message);
        } else {
          // thông báo
          const {value: accept} = Swal.fire({
            title: "Thông báo",
            text: "Đăng ký thành công",
            icon: "success"
          });
          // chuyển hướng
          props.history.push('/dangnhap');
        }
      }
    }, [signup]);
    return (
          <form className="container" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-5">
                <h1>Đăng Ký</h1>
              </div>
            </div>
            {
              resutl ? <div className="alert alert-warning" role="alert">{resutl}</div> : ''
            }
              <div className="row">
                <div className="col-md-3">
                <label>Tên tài khoản:</label>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" name="taiKhoan" type="text" ref={register({required: true, maxLength: 32, minLength: 6})} />
                  </div>
                </div>
                <div className="col-md-3">
                  {errors.taiKhoan && errors.taiKhoan.type === 'required' && <span className="alert alert-danger ml-2" role="alert">Vui lòng nhập tên tài khoản</span>}
                  {errors.taiKhoan && errors.taiKhoan.type === 'maxLength' && <span className="alert alert-danger" role="alert">Tên tài khoản nhỏ hơn 32 kí tự</span>}
                  {errors.taiKhoan && errors.taiKhoan.type === 'minLength' && <span className="alert alert-danger" role="alert">Tên tài khoản lớn hơn 6 kí tự</span>}
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <label>Email:</label>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" name="email" type="email" ref={register({required: true, pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Vui lòng nhập đúng định dạng email"
                    }})} />
                  </div>
                </div>
                <div className="col-md-3">
                  {errors.email && errors.email.type === 'pattern' && <span className="alert alert-danger" role="alert">{errors.email.message}</span>}
                  {errors.email && errors.email.type === 'required' && <span className="alert alert-danger" role="alert">Vui lòng nhập email</span>}
                </div>
              </div>
                <div className="row">
                  <div className="col-md-3">
                  <label>Mật khẩu:</label>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                    <input className="form-control" name="matKhau" type="password" ref={register({required: true, maxLength: 32, minLength: 8})} />
                    </div>
                  </div>
                  <div className="col-md-3">
                    {errors.matKhau && errors.matKhau.type === 'required' && <span className="alert alert-danger" role="alert">Vui lòng nhập mật khẩu</span>}
                    {errors.matKhau && errors.matKhau.type === 'maxLength' && <span className="alert alert-danger" role="alert">Mật khẩu phải nhỏ hơn 32 kí tự</span>}
                    {errors.matKhau && errors.matKhau.type === 'minLength' && <span className="alert alert-danger" role="alert">Mật khẩu phải lớn hơn 8 kí tự</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>Nhập lại mật khẩu :</label>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                       <input className="form-control" name="matKhauXacNhan" type="password" ref={register({required: true, validate: (value) => value === watch("matKhau")})} />
                    </div>
                  </div>
                  <div className="col-md-3">
                    {errors.matKhauXacNhan && errors.matKhauXacNhan.type === 'required' && <span className="alert alert-danger" role="alert">Vui lòng nhập mật khẩu xác nhận</span>}
                    {errors.matKhauXacNhan && errors.matKhauXacNhan.type === 'validate' && <span className="alert alert-danger" role="alert">Mật khẩu không trùng khớp</span>}
                  </div>
                </div>
            <div className="row">
              <div className="col-md-9">
              <input className="btn btn-info" type="submit" value="Đăng Ký"/>
              </div>
            </div>
            <Link to="/dangnhap"><p>Đã có tài khoản? Đăng nhập ngay tại đây.</p></Link>
          </form>
      );
};

export default withRouter(Signup);