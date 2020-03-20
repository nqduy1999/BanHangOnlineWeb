import React, { useEffect } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import './App.css';
import "./resource/css/admintable.css";
import "./resource/css/aos.css";
import "./resource/css/main.css";
import "./resource/css/mdb.min.css";
import "./resource/css/sb-admin-2.css";
import "./resource/css/style.css";
import Main from './router/Main';
import Admin from './component/Admin/Admin';
import AOS from 'aos'
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
        <Admin path="/admin"/>
        <Main path="/"></Main>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
