import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const CustomerItem = (props) => {
  const { username } = props.khachhang.account;
  const dispatch = useDispatch();
  const xemchitiet = () => {
    dispatch({
        type: "CLICK_CUSTOMER",
          customer: props.khachhang
      });
  };
  const capnhat = () => {};
  return (
    <div class="row mb-3">
      <div class="col-md-12">
        <div class="d-flex flex-row border rounded">
          <div class="p-0 w-25">
            <img
              src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed670179e384f0007b7db8f%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1032%26cropX2%3D3642%26cropY1%3D186%26cropY2%3D2795"
              class="img-thumbnail border-0"
            />
          </div>
          <div class="pl-3 pt-2 pr-2 pb-2 w-75 border-left">
            <h4 class="text-info">
              {" "}
              {props.khachhang.name ? (
                props.khachhang.name
              ) : (
                <Link class="text-info">Chưa cập nhật !</Link>
              )}
            </h4>
            <h5 class="text-black">{username}</h5>
            <ul
              class="m-0 float-left"
              style={{ listStyle: "none", margin: 0, padding: 0 }}
            >
              <li>
                <Link>
                  <i class="fab fa-facebook-square"></i> Facebook
                </Link>
              </li>
              <li>
                <Link>
                  <i class="fab fa-twitter-square"></i> Twitter
                </Link>
              </li>
              <li>
              <Link data-toggle="modal" data-target="#customerprofile" onClick={xemchitiet}>
                  <i class="far fa-user"></i> Xem chi tiết
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerItem;
