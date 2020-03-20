import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AboutMember from "../about/AboutMember";
import Product from "./Product/Product.js";
import Customer from "./Customer/Customer.js";
import Order from "./Order/Order.js";
import CustomerProfile from "./Customer/CustomerProfile";
import CustomerUpdate from "./Customer/CustomerUpdate";
import Update from "./Product/UpdateProd";
const DirectionAdmin = (props) => {
  return (
    <div>
      <Switch>
        <Order path="/admin/danhsachdonhang" />
        <Route
          exact
          path="/admin/danhsachsanpham/update/:id"
          render={(props) => <Update {...props} />}        />
        <Route
          exact
          path="/admin/danhsachkhachhang/profile/:name"
          render={(props) => <CustomerProfile {...props} />}        />
          <Route
          exact
          path="/admin/danhsachkhachhang/update/:name"
          render={(props) => <CustomerUpdate {...props} />}        />
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
