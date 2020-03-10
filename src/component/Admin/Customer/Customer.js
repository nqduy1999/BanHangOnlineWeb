import React, { useState, useEffect } from 'react';

import CustomerItem from './CustomerItem';
import { getListCus } from '../../../services/AdminService';
const ListCustomer = () => {
    const [listCus, setListCus] = useState([
        {
        maKhachHang : "",
        taiKhoan: {
            taiKhoan: "",
            email: "",
        }
        }
    ])
    useEffect(() => {
        getListCus()
            .then((res) => {
                if (res.error !== true) {
                    setListCus(res.data)
                    console.log(res.data)
                }
            })
    }, [])
    return (
        <div>
            <h1>Danh sách khách hàng </h1>
            <div>
                <table className="table table-light">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Tài khoản</th>
                            <th scope="col">Email</th>
                            <th scope="col">Xem chi tiết</th>
                            <th> Cập Nhật
      </th>
                        </tr>
                    </thead>
                    {listCus.map((item, key)=>(
                    <CustomerItem key={key} maKhachHang={item.maKhachHang} taiKhoan={item.taiKhoan.taiKhoan} email={item.taiKhoan.email}/>
                    ))
}
                </table>

            </div>    </div>

    );
};

export default ListCustomer;