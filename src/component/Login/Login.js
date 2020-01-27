import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import "../../resource/css/login.css"
import { useForm } from "react-hook-form";
const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
      console.log(data);
    }; // your form submit function which will invoke after successful validation
  
    return (
            <form onSubmit={handleSubmit(onSubmit)} >
                <label>Email</label>
                <input name="email" type="email" ref={register}/>
                {errors.pass && <p>Email không được để trống</p>}
                <label>Mật Khẩu</label>
                <input name="pass" type="password" ref={register({ required: true, maxLength: 10 })}/>
                {errors.pass && <p>Mật khẩu không được để trống</p>}
                <input type="submit" value="Đăng Nhập"/>
                <Link to="/dangky"><p>Bạn chưa có tài khoản ? Nhấn vào đây để đăng ký </p></Link>
            </form>
    );
};

export default Login;