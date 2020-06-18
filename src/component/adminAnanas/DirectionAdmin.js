import React from 'react';
import { Switch } from 'react-router-dom';
import ProductAdmin from './Product/ProductAdmin';
import DashBoard from './Dashboard';
import AddProduct from './Product/AddProduct';
import CustomerAdmin from './Customer/CustomerAdmin';

const DirectionAdmin = () => {
    return (
          <Switch>
              <ProductAdmin path="/quanly/sanpham"/>
              <CustomerAdmin path="/quanly/khachhang"/>
              <DashBoard path="/" />
          </Switch>
      );
};

export default DirectionAdmin;