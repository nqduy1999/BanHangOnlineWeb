import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutMember from '../about/AboutMember';
import Product from './Product/Product.js';
import Customer from './Customer/Customer.js';
import Order from './Order/Order.js';
const DirectionAdmin = () => {
    return (
        <div>
            <Switch>
                <Product path="/admin/danhsachsanpham"/>
                <Customer path="/admin/danhsachkhachhang"/>
                <Order path="/admin/danhsachdonhang"/>
                <Route path="/">
                    <AboutMember/>
                </Route>
            </Switch>
        </div>
    );
};

export default DirectionAdmin;