import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutMember from '../about/AboutMember';
import ListProduct from './ListProduct';
import AddProduct from './AddProduct';
import ListCustomer from './ListCustomer';

const DirectionAdmin = () => {
    return (
        <div>
            <Switch>
                <ListProduct path="/admin/danhsachsanpham"/>
                <AddProduct path="/admin/themsanpham"/>
                <ListCustomer path="/admin/danhsachkhachhang"/>
                <Route path="/">
                    <AboutMember/>
                </Route>
            </Switch>
        </div>
    );
};

export default DirectionAdmin;