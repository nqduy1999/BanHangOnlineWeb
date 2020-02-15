import React, { useEffect } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import './App.css';

import Main from './router/Main';
import Admin from './component/Admin/Admin';
import AOS from 'aos'
import { CookiesProvider } from 'react-cookie'
function App() {
  useEffect(() => {
    AOS.init();
  })
  useEffect(() => {
    AOS.refresh();
  })
  return (
    <CookiesProvider>
      <BrowserRouter>
      <Switch>
        <Admin path="/admin"/>
        <Main path="/"></Main>
      </Switch>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
