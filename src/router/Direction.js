import React from 'react';

import { Switch, Route } from 'react-router-dom';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Cart from '../component/cart/Cart';
import Checkout from '../component/cart/Checkout';

const Direction = () => {
    return (
        <Switch>
            <Route path="/sanpham">
            <Product />
            </Route>
            <Route path="/gioithieu">
            <About />
            </Route>
           <Route path="/lienhe">
            <Contact />
            </Route>
            <Route path="/giohang">
            <Cart />
            </Route>
            <Route path="/thanhtoan">
            <Checkout />
            </Route>
            <Route exact path="/trangchu">
            <Home/>
            </Route>
            <Route exact path="/">
            <Home />
            </Route>
        </Switch>
    );
};

export default Direction;