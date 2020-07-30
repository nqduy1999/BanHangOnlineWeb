import React, { useEffect } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import AOS from 'aos';

import "bootstrap/dist/css/bootstrap.min.css";
import "./resource/css/material-dashboard.css";
import "aos/dist/aos.css";
import './App.css';
import Main from './router/Main';
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
        <Main path="/"></Main>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
