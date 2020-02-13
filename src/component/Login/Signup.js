import React, {useState} from 'react';

import { useForm, Controller } from "react-hook-form";
//import "../../resource/css/signup.css"
import axios from 'axios'

const defaultValues = {
  email: "",
  pass: "",
  repass: "",
};
const Signup = () => {
    const { handleSubmit, register, errors } = useForm();
    const url = "http://localhost:8080/api/dangky";
    const onSubmit= data =>{
      axios.post(url, data, {headers: { 'Content-Type': 'application/json' }})
      .then(function (response) {
        console.log(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    return (
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Đăng Ký</h1>
            <div className="container">
            <label>Tên tài khoản:</label>
            <input name="taiKhoan" type="text" ref={register({required: true})} />
              <label>Email:</label>
              <input name="email" type="email" ref={register({required: true})} />
              <label>Mật khẩu:</label>
              <input name="matKhau" type="password" ref={register({required: true})} />
              <label>Nhập lại mật khẩu :</label>
              <input name="matKhauXacNhan" type="password" ref={register({required: true})} />
            </div>
            <input type="submit" value="Đăng Ký"/>
          </form>
      );
};

export default Signup;