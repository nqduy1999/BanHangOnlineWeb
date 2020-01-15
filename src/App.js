import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Footer from './component/Footer';
import Header from './component/Header';
import Direction from './router/Direction';

function App() {
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
