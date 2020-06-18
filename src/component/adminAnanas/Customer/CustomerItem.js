import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CustomerItem = (props) => {
  const { username } = props.khachhang.account;
  const xemchitiet = () => {};
  const capnhat = () =>{};
  return (
    <tr>
      <td>{props.stt}</td>
      <td>{username}</td>
      <td>
        {props.khachhang.name ? (
          props.khachhang.name
        ) : (
          <Link style={{ color: "red" }}>Chưa cập nhật !</Link>
        )}
      </td>
      <td>
        <Link data-toggle="modal" data-target="#customerprofile" onClick={xemchitiet}>Xem Chi Tiết</Link>
      </td>
      <td>
        <Link data-toggle="modal" data-target="#customerprofile" onClick={capnhat}>Cập nhật</Link>
      </td>{" "}
    </tr>
  );
};

export default CustomerItem;
