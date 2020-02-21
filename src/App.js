import React, { useEffect } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import './App.css';

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
