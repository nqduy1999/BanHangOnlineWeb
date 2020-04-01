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
        <Order path="/admin/danhsachdonhang" />
        <Route
          exact
          path="/admin/danhsachkhachhang/profile/:name"
          render={(props) => <CustomerProfile {...props} />}        />
        <Customer path="/admin/danhsachkhachhang"/>
        <Product path="/admin/danhsachsanpham" />
        <Route path="/">
          <AboutMember />
        </Route>
      </Switch>
    </div>
  );
};

export default DirectionAdmin;
