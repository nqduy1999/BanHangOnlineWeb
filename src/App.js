import React, { useEffect } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import AOS from 'aos';

import "bootstrap/dist/css/bootstrap.min.css";
import "./resource/css/material-dashboard.css";
import "aos/dist/aos.css";
import './App.css';
import AdminRoute from './router/AdminRoute';
import Main from './router/Main';
import Admin from './component/Admin/Admin';
import "./resource/css/style.css";
import "./resource/icomoon/style.css";
import MainAdmin from './component/adminAnanas/MainAdmin';

function App() {
  useEffect(() => {
    AOS.init();
  })
  useEffect(() => {
    AOS.refresh();
  })
  return (
      <BrowserRouter>
      <Switch>
        <AdminRoute path="/admin">
          <Admin />
        </AdminRoute>
        <MainAdmin path="/quanly"/> 
        <Main path="/"></Main>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
