import React, {useState} from 'react';
import { useForm, Controller } from "react-hook-form";
import "../../resource/css/signup.css"
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
  ngaysinh: "",
  hoten: "",
  diachi: "",
  cmnd: "",
  RadioGroup: ""
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
                <label>Giới tính</label>
                <Controller
                  as={
                    <RadioGroup aria-label="gender" name="gender1">
                      <FormControlLabel
                        value="Nữ"
                        control={<Radio />}
                        label="Nữ"
                      />
                      <FormControlLabel
                        value="Nam"
                        control={<Radio />}
                        label="Nam"
                      />
                    </RadioGroup>
                  }
                  name="RadioGroup"
                  control={control}
                />
              </section>
              <section>
                <label>Mật khẩu:</label>
                <input name="pass" type="password" ref={register} />
              </section>
              <section>
                <label>CMND:</label>
                <input name="cmmd" ref={register} />
              </section>
              <section>
                <label>Địa chỉ:</label>
                <input name="diachi" ref={register} />
              </section>
              <section>
                <label>Họ Tên:</label>
                <input name="hoten" ref={register} />
              </section>
              <section>
                <label>Ngày Sinh :</label>
                <input name="ngaysinh" type="date" ref={register} />
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