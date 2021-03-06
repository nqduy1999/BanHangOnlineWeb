import React, { useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';

import Cookies from 'js-cookie';

import { useDispatch, useSelector } from 'react-redux';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Product from '../pages/Product';
import { getProfile } from '../services/UserServices';
import { alertNotify } from '../untils/alert';
import Cart from '../component/cart/Cart';
import Checkout from '../component/cart/Checkout';
import Noti from '../component/cart/Noti';
import Login from '../component/login/Login';
import Signup from '../component/login/Signup';
import ProductDetails from '../component/product/ProductDetails';
import MyAccount from '../component/profile/MyAccout';

import PrivateRoute from './PrivateRoute';
const Direction = () => {
    const dispatch = useDispatch();
    // kiểm tra token hết hạn
    useEffect(() => {
    // kiểm tra token hết hạn và tài khoản username có bị cheat ở cookie hay ko?
        getProfile(Cookies.get("username")).then((res) => {
            if(res.error !== true && res.data.code === 0) {
                dispatch({type: "SAVE", user: res.data.result});
            } else if((res.error === true || res.data.code !== 0) && Cookies.get("authtoken")) {
                alertNotify("Thông báo", "Tài khoản hết hạn truy cập", "warning");
                Cookies.remove("authtoken");
                Cookies.remove("username");
                dispatch({type: "DELETE"}); // xoá tài khoản lưu trong store
            }
        });
    }, []);
    return (
        <Switch>
            <PrivateRoute path={"/" + Cookies.get("username")}>
                <MyAccount/>
            </PrivateRoute>
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
            <PrivateRoute path="/thanhtoan">
                <Checkout />
            </PrivateRoute>
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
            <Route path="/dangnhap">
            <Login/>
            </Route>
            <Route path="/dangky">
                <Signup/>
            </Route>
        </Switch>
    );
};

export default Direction;