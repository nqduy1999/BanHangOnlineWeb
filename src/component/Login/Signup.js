import React, {useState} from 'react';

import { useForm } from "react-hook-form";

import { withRouter } from 'react-router-dom';

import Axios from 'axios';

import AlertService from '../../services/AlertService';

const Signup = (props) => {
    const { handleSubmit, register, errors, watch } = useForm();
    const url = "http://localhost:8080/api/dangky";
    const [resutl, setResutl] = useState();

    const onSubmit = data =>{
      Axios.post(url, data, {headers: { 'Content-Type': 'application/json' }})
      .then(async function (response) {
        if(response.data.code !== 0) {
          setResutl(response.data.message);
        } else {
          let alert = new AlertService();
          if(alert.alertSucess("Thông báo", "Đăng ký thành công", "success")) {
            props.history.push('/dangnhap');
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
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
          </form>
      );
};

export default withRouter(Signup);