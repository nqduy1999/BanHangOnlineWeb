import React, { useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';

import Cookies from 'js-cookie';

import Swal from 'sweetalert2';

import Axios from 'axios';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Product from '../pages/Product';
import useEndpoint from '../services/useEndpoint';
import Login from '../component/Login/Login';
import Signup from '../component/Login/Signup';
import Cart from '../component/cart/Cart';
import Checkout from '../component/cart/Checkout';
import Noti from '../component/cart/Noti';
import ProductDetails from '../component/product/ProductDetails';
const Direction = () => {
    const url = `http://localhost:8080/api/khachhang/chitiet?username=${Cookies.get("username")}`;
    // kiểm tra token hết hạn
    const user = useEndpoint({
        method: 'GET',
        url: url,
        headers: { Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbmxhdHJ1b25nIiwiaWF0IjoxNTgzMzIyMjkzLCJleHAiOjE1ODMzNTgyOTN9.TxSMiDWdwb7azBD9Ndh3WEEMMZJKLF68yq-GRswi1JNr-RkcafcFM8Lg3Gg9rK0h6cJ-F-4Uxf8WFY8hBmTsjA"}
    });
    useEffect(() => {
        // kiểm tra token hết hạn
        if(Cookies.get("authtoken") && Cookies.get("username") && (user.complete && user.error === true)) {
        //thông báo
          const {value: accept} = Swal.fire({
            title: "Thông báo",
            text: "Token hết hạn, vui lòng đăng nhập lại",
            icon: "error"
          });
          Cookies.remove("authtoken");
          Cookies.remove("username");
        }
    }, [user]);
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
                        {
                Cookies.get('authtoken') === undefined ?
                (
                    <Route path="/dangky">
                        <Signup/>
                    </Route>
                ) :
                (
                    <Route path="/">
                    <Home/>
                    </Route>
                )
            }
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