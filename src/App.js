import React, { useEffect } from 'react';

import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Footer from './component/Footer';
import Header from './component/Header';
import Direction from './router/Direction';
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
    <div className="App">
      <Header/>
      <Direction/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
