import React, { useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';

import Cookies from 'js-cookie';

import Swal from 'sweetalert2';


import { useDispatch } from 'react-redux';

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
    const dispatch = useDispatch();
    const url = `http://localhost:8080/api/khachhang/chitiet?username=${Cookies.get("username")}`;
    // kiểm tra token hết hạn
    const user = useEndpoint({
        method: 'GET',
        url: url,
        headers: { 'Authorization': `Bearer ${Cookies.get("authtoken")}`}
    });
    useEffect(() => {
        console.log(user);
        // kiểm tra token hết hạn và tài khoản username có bị cheat ở cookie hay ko?
         if((user.complete && user.error === false && user.data.code === 0)) {
            dispatch({type: "SAVE", user: user.data.result});
        } else if(user.complete && user.error === false && user.data.code !== 0) {
            const {value: accept} = Swal.fire({
                title: "Thông báo",
                text: "Không đúng tài khoản",
                icon: "error"
              });
              Cookies.remove("authtoken");
              Cookies.remove("username");
              dispatch({type: "DELETE"});
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
                user.data === null || user.data.code !== 0 ?
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
                !Cookies.get("username") ?
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