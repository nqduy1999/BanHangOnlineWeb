import React, {useState, useEffect}from 'react';

import { Link, withRouter } from 'react-router-dom';

import { useForm } from "react-hook-form";

import Cookies from 'js-cookie';

import HashLoader from "react-spinners/HashLoader";

import { login } from '../../services/userServices';
import { useDispatch } from 'react-redux';
import { alertNotify } from '../../untils/alert';
const Login = (props) => {
  // React form
    const { register, handleSubmit, errors } = useForm();
    const [resutl, setResutl] = useState();
    //loading
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    // Đăng nhập
    const onSubmit = data => {
        login(data).then((res) => {
            setLoading(false);
            // kiểm tra lỗi từ server
            if(res.error !== true && res.data.code !== 0) {
              setResutl(res.data.message);
            } else {
              Cookies.set('authtoken', res.data.message); // mỗi khi thực thi đến server mà cần quyền truy cập phải kèm token
              Cookies.set('username', res.data.result.taiKhoan); // lưu user name để tìm kiếm thông tin tài khoản dựa vào username
              //thông báo
              alertNotify("Thông báo", "Đăng nhập thành công", "success");
              dispatch({type: "SAVE", user: {taiKhoan: {
                taiKhoan: data.taiKhoan
              }}});
              // chuyển hướng
              props.history.push('/trangchu');
            }
        });
    }; // your form submit function which will invoke after successful validation
    useEffect(() => {
      setLoading(false);
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