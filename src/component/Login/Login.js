import React, {useState}from 'react';

import { Link } from 'react-router-dom';

import { useForm } from "react-hook-form";
import axios from 'axios'
const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const url = "http://localhost:8080/dangnhap";
    const onSubmit = data => {
      axios.post(url, data, {headers: { 'Content-Type': 'application/json' }})
      .then(function (response) {
        console.log(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
    }; // your form submit function which will invoke after successful validation
  
    return (
            <form onSubmit={handleSubmit(onSubmit)} >
                <label>Email</label>
                <input name="email" type="email" ref={register({ required: true })}/>
                {errors.email && <p>Email không được để trống</p>}
                <label>Mật Khẩu</label>
                <input name="matKhau" type="password" ref={register({ required: true })}/>
                {errors.pass && <p>Mật khẩu không được để trống</p>}
                <input type="submit" value="Đăng Nhập"/>
                <Link to="/dangky"><p>Bạn chưa có tài khoản ? Nhấn vào đây để đăng ký </p></Link>
            </form>
    );
};

export default Login;