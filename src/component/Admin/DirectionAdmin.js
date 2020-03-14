import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AboutMember from "../about/AboutMember";
import Product from "./Product/Product.js";
import Customer from "./Customer/Customer.js";
import Order from "./Order/Order.js";
import CustomerProfile from "./Customer/CustomerProfile";
const DirectionAdmin = (props) => {
  return (
    <div>
      <Switch>
        <Product path="/admin/danhsachsanpham" />
        <Order path="/admin/danhsachdonhang" />
        <Route
          exact
          path="/admin/danhsachkhachhang/khachhang/:name"
          render={(props) => <CustomerProfile {...props} />}        />
        <Customer path="/admin/danhsachkhachhang"/>
        <Route path="/">
          <AboutMember />
        </Route>
      </Switch>
    </div>
  );
};

export default DirectionAdmin;
