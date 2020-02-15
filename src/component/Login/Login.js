import React, {useState}from 'react';

import { Link, Redirect, withRouter } from 'react-router-dom';

import { useForm } from "react-hook-form";

import { useCookies } from 'react-cookie';

import Axios from 'axios';
const Login = (props) => {
    const [cookies, setCookies] = useCookies(['authtoken']);
    const { register, handleSubmit, errors } = useForm();
    const url = "http://localhost:8080/api/dangnhap";
    const onSubmit = data => {
      Axios.post(url, data, {headers: { 'Content-Type': 'application/json' }})
      .then(function (response) {
        setCookies('authtoken', response.data.message, { path: '/'});
      })
      .catch(function (error) {
        console.log(error);
      });
      props.history.push('/trangchu');
    }; // your form submit function which will invoke after successful validation
    return (
            <form onSubmit={handleSubmit(onSubmit)} >
                <label>Tài Khoản</label>
                <input name="taiKhoan" type="text" ref={register({ required: true })}/>
                {errors.taiKhoan && <p>Tài khoản không được để trống</p>}
                <label>Mật Khẩu</label>
                <input name="matKhau" type="password" ref={register({ required: true })}/>
                {errors.pass && <p>Mật khẩu không được để trống</p>}
                <input type="submit" value="Đăng Nhập"/>
                <Link to="/dangky"><p>Bạn chưa có tài khoản ? Nhấn vào đây để đăng ký </p></Link>
            </form>
    );
};

export default withRouter(Login);