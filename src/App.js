import React, { useEffect } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import AOS from 'aos';

import "bootstrap/dist/css/bootstrap.min.css";

import "aos/dist/aos.css";

import './App.css';

import Main from './router/Main';
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
