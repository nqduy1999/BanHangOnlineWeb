import React, { useEffect, useState } from 'react';

import Cookies from 'js-cookie';

import { getOrderByUsername } from '../../services/orderServices';
const OrderDetail = (props) => {
    const [order, setOrder] = useState({
        id: '',
        billDate: '',
        totalMoney: 0,
        listOrderDetail: [],
        customer: null,
        address: {

        },
        note: "",
        payMethod: ""
    })
    useEffect(() => {
        getOrderByUsername(props.id, Cookies.get("username"))
        .then(async(res) => {
            if(res.error !== true && res.data.code === 0) {
                const result = await res.data.result;
                setOrder({...order,
                    id: result.id,
                    billDate: result.billDate,
                    totalMoney: result.totalMoney,
                    listOrderDetail: result.listOrderDetail,
                    customer: result.customer,
                    address: result.address,
                    note: result.note,
                    payMethod: result.payMethod
                })
            }
        });
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <button type="button" onClick={props.onClick} className="btn btn-blue">Quay trở lại</button>
                </div>
            </div>
            <div  className="row">
                <div className="col-md-12">
                    <h3>Địa chỉ nhận hàng</h3>
                    <h4>{order.customer && order.customer.name}</h4>
                    <p>{order.customer && order.customer.phone}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;