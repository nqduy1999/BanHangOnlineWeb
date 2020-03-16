import React, { useState, useEffect } from 'react';

import CustomerItem from './CustomerItem';
import { getListCus } from '../../../services/AdminService';
import Cookies from 'js-cookie';
const ListCustomer = () => {
    console.log(Cookies.get("authtoken"));
    
    const [listCus, setListCus] = useState([])
    useEffect(() => {
        getListCus()
            .then((res) => {
                if (res.error !== true) {
                    setListCus(res.data.result)
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
                            <th scope="col">Tài khoản</th>
                            <th scope="col">Email</th>
                            <th scope="col">Xem chi tiết</th>
                            <th> Cập Nhật
      </th>
                        </tr>
                    </thead>
                    {listCus.map((item, key)=>(
                    <CustomerItem key={key} customer={item}/>
                    ))
}
                </table>

            </div>    </div>

    );
};

export default ListCustomer;