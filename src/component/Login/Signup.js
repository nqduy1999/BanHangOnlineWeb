import React, {useState} from 'react';
import { useForm, Controller } from "react-hook-form";
//import "../../resource/css/signup.css"
import {
  RadioGroup,
  FormControlLabel,
  ThemeProvider,
  Radio,
  createMuiTheme
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});
const defaultValues = {
  email: "",
  pass: "",
  repass: "",
};
const Signup = () => {
    const { handleSubmit, register, reset, control } = useForm({ defaultValues });
    const onSubmit= data =>{
      console.log(data);
      
    }
    return (
        <ThemeProvider theme={theme}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Đăng Ký</h1>
            <div className="container">
              <section>
                <label>Email:</label>
                <input name="email" type="email" ref={register} />
              </section>
              <section>
                <label>Mật khẩu:</label>
                <input name="pass" type="password" ref={register} />
              </section>
              <section>
                <label>Nhập lại mật khẩu :</label>
                <input name="repass" type="password" ref={register} />
              </section>
            </div>
            <button
              type="button"
              onClick={() => {
                reset(defaultValues);
              }}
            >
              Thử lại 
            </button>
            <button>Đăng Ký</button>
          </form>
        </ThemeProvider>
      );
};

export default Signup;