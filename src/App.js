import React, { useEffect } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import AOS from 'aos';

import "bootstrap/dist/css/bootstrap.min.css";

import "aos/dist/aos.css";

import { useDispatch } from 'react-redux';

import Cookies from 'js-cookie';

import './App.css';

import Main from './router/Main';
import { getProfile } from './services/UserServices';
import { alertNotify } from './untils/alert';
import Admin from './component/Admin/Admin';
import "./resource/css/magnific-popup.css";
import "./resource/css/main.css";
import "./resource/css/style.css";
import "./resource/icomoon/style.css";

function App() {
  useEffect(() => {
    AOS.init();
  })
  useEffect(() => {
    AOS.refresh();
  })
  const dispatch = useDispatch();
  // kiểm tra token hết hạn
  useEffect(() => {
      // kiểm tra token hết hạn và tài khoản username có bị cheat ở cookie hay ko?
          getProfile(Cookies.get("username")).then((res) => {
              if(res.error !== true && res.data.code === 0) {
                  dispatch({type: "SAVE", user: res.data.result});
              } else if((res.error === true || res.data.code !== 0) && Cookies.get("authtoken")) {
                  alertNotify("Thông báo", "Tài khoản hết hạn truy cập", "warning");
                  Cookies.remove("authtoken");
                  Cookies.remove("username");
                  dispatch({type: "DELETE"}); // xoá tài khoản lưu trong store
              }
          });
  }, []);
  return (
      <BrowserRouter>
      <Switch>
        <Admin path="/admin"/>
        <Admin path="/updateadmin"/>
        <Main path="/"></Main>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
