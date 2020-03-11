import React, { useEffect, useState } from 'react';

import { Switch, Route } from 'react-router-dom';

import Cookies from 'js-cookie';

import { useDispatch } from 'react-redux';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Product from '../pages/Product';
import { getProfile } from '../services/userServices';
import { alertNotify } from '../untils/alert';
import Cart from '../component/cart/Cart';
import Checkout from '../component/cart/Checkout';
import Noti from '../component/cart/Noti';
import Login from '../component/Login/Login';
import Signup from '../component/Login/Signup';
import ProductDetails from '../component/product/ProductDetails';
const Direction = () => {
    const dispatch = useDispatch();
    const profile = getProfile(Cookies.get("username"));
    // kiểm tra token hết hạn
    useEffect(() => {
        // kiểm tra token hết hạn và tài khoản username có bị cheat ở cookie hay ko?
        profile.then((res) => {
            if(res.error !== true && res.data.code === 0) {
                dispatch({type: "SAVE", user: res.data.result});
            } else if((res.error === true || res.data.code !== 0) && Cookies.get("authtoken")) {
                alertNotify("Thông báo", "Tài khoản hết hạn truy cập", "warning");
                Cookies.remove("authtoken");
                Cookies.remove("username");
                dispatch({type: "DELETE"}); // xoá tài khoản lưu trong store
            }
        })
    }, [profile]);
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
            <Route path="/chitiet">
                <ProductDetails/>
            </Route>
            <Route exact path="/trangchu">
            <Home/>
            </Route>
            <Route exact path="/">
            <Home />
            </Route>
            {
                !Cookies.get("authtoken") ?
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
                !Cookies.get("authtoken") ?
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
        </Switch>
    );
};

export default Direction;