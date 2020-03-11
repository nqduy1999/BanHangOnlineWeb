import React from 'react';
import { getListProduct, removeProduct } from "../../../services/AdminService";
import { useState } from 'react';
const ProductItem = (props) => {
   return (
        <tbody>
            <tr>
                <th scope="row">{props.maSanPham}</th>
                <td>{props.tenSanPham}</td>
                <td>{props.moTa}</td>
                <td>{props.giaSanPham}</td>
                <td>{props.soLuongTon}</td>
                <td></td>
                <td>
                    <button onClick={()=>{props.removePd(props.maSanPham)}} 
                        className=" btn-danger">
                        Xoá
                    </button>
                </td>
                <td>
                    <button className="btn-primary" data-toggle="modal" data-target="#themsanpham"
                    >Sửa</button>
                </td>
            </tr>
        </tbody>
    );
};

export default ProductItem;