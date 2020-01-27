import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import "../../resource/css/login.css"
import { useForm } from "react-hook-form";
const defaultlogin={
    email:"",
    pass:""
}
const Login = () => {
    const { handleSubmit, login} = useForm({defaultlogin});
    const [data, setData] = useState(null);

    return (
        <div>
            <form onSubmit={handleSubmit(data => setData(data))} >
                <label>Email</label>
                <input name="email" type="email" ref={login}/>
                <label>Mật Khẩu</label>
                <input name="pass" type="password"/>
                <input type="submit" value="Đăng Nhập"/>
                <Link to="/dangky"><p>Bạn chưa có tài khoản ? Nhấn vào đây để đăng ký </p></Link>
                {console.log(data && (
              <pre >
                {JSON.stringify(data, null, 2)}
              </pre>
            ))}
            </form>
        </div>
    );
};

export default Login;