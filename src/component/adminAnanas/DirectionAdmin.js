import React from 'react';
import { Switch } from 'react-router-dom';
import ProductAdmin from './Product/ProductAdmin';
import DashBoard from './Dashboard';
import AddProduct from './Product/AddProduct';

const DirectionAdmin = () => {
    return (
          <Switch>
              <ProductAdmin path="/quanly/sanpham"/>
              <DashBoard path="/" />
          </Switch>
      );
};

export default DirectionAdmin;