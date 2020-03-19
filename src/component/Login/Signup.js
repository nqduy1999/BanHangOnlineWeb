import React, {useState, useEffect} from 'react';

import { useForm } from "react-hook-form";

import { withRouter, Link, useLocation } from 'react-router-dom';

import Cookies from 'js-cookie';

import HashLoader from "react-spinners/HashLoader";

import { sendEmail } from '../../services/EmailSerivces';
import { signup } from '../../services/UserServices';
import { alertNotify } from '../../untils/alert';
const Signup = (props) => {
  // react form
    const { handleSubmit, register, errors, watch } = useForm();
    const [resutl, setResutl] = useState();
    //loading
    const [loading, setLoading] = useState(true);
    // auth route
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    // Đăng ký
    const onSubmit = data =>{
      setLoading(true);
      signup(data).then((res) => {
          setLoading(false);
          if(res.error !== true && res.data.code !== 0) {
            setResutl(res.data.message);
          } else {
            // gửi mail
            const contentEmail = {
              emailTo: data.email,
              subject:  "ANANAS Đăng Ký",
              content: "Chúc mừng quý khách đã đăng đăng ký thành công tài khoản ANANAS và trở thành 1 khách hàng tiềm năng của chúng tôi. Cảm ơn quý khách"
            }
            sendEmail(contentEmail);
            // thông báo
            alertNotify("Thông báo", "Đăng ký thành công", "success");
            // chuyển hướng
            props.history.push('/dangnhap');
          }
      });
    }
    useEffect(() => {
      setLoading(false);
      Cookies.get("authtoken") ? props.history.replace(from) : props.history.push('/dangky');
    }, []);

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
                    <input className="form-control" name="username" type="text" ref={register({required: true, maxLength: 32, minLength: 6})} />
                  </div>
                </div>
                <div className="col-md-3">
                  {errors.username && errors.username.type === 'required' && <span className="alert alert-danger ml-2" role="alert">Vui lòng nhập tên tài khoản</span>}
                  {errors.username && errors.username.type === 'maxLength' && <span className="alert alert-danger" role="alert">Tên tài khoản nhỏ hơn 32 kí tự</span>}
                  {errors.username && errors.username.type === 'minLength' && <span className="alert alert-danger" role="alert">Tên tài khoản lớn hơn 6 kí tự</span>}
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
                    <input className="form-control" name="password" type="password" ref={register({required: true, maxLength: 32, minLength: 8})} />
                    </div>
                  </div>
                  <div className="col-md-3">
                    {errors.password && errors.password.type === 'required' && <span className="alert alert-danger" role="alert">Vui lòng nhập mật khẩu</span>}
                    {errors.password && errors.password.type === 'maxLength' && <span className="alert alert-danger" role="alert">Mật khẩu phải nhỏ hơn 32 kí tự</span>}
                    {errors.password && errors.password.type === 'minLength' && <span className="alert alert-danger" role="alert">Mật khẩu phải lớn hơn 8 kí tự</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>Nhập lại mật khẩu :</label>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                       <input className="form-control" name="passwordConfirm" type="password" ref={register({required: true, validate: (value) => value === watch("password")})} />
                    </div>
                  </div>
                  <div className="col-md-3">
                    {errors.passwordConfirm && errors.passwordConfirm.type === 'required' && <span className="alert alert-danger" role="alert">Vui lòng nhập mật khẩu xác nhận</span>}
                    {errors.passwordConfirm && errors.passwordConfirm.type === 'validate' && <span className="alert alert-danger" role="alert">Mật khẩu không trùng khớp</span>}
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