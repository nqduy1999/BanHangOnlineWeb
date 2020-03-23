import React from "react";
import { Link } from "react-router-dom";
const CustomerItem = props => {
  const { username, email } = props.customer.account;
  return (
    <tbody>
      <tr className="row100">
        <td className="column100 column1" data-column="column1">
          {username}
        </td>
        <td>{email}</td>
        <td className="column100 column2" data-column="column2">
          <Link to={`danhsachkhachhang/profile/${username}`}>
            <button className="btn-warning btn">Click !</button>
          </Link>
        </td>
        <td className="column100 column3" data-column="column3">
          <Link to={`danhsachkhachhang/update/${username}`}>
            <button className="btn-primary btn">Cập nhật</button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default CustomerItem;
