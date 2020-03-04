import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Cookies from 'js-cookie';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Login from '../component/Login/Login';
import Signup from '../component/Login/Signup';
import Cart from '../component/cart/Cart';
import Checkout from '../component/cart/Checkout';
import Noti from '../component/cart/Noti';
import ProductDetails from '../component/product/ProductDetails';
const Direction = (props) => {
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
            <Route path="/thongbao">
                <Noti/>
            </Route>
            {
                Cookies.get('authtoken') === undefined ?
                (
                    <Route path="/dangnhap">
                    <Login/>
                    </Route>
                ) :
                (
                    <Route path="/">
                    <Home/>
                    </Route>
                )
            }
            <Route path="/dangky">
                <Signup/>
            </Route>
            <Route path="/chitiet">
                <ProductDetails/>
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