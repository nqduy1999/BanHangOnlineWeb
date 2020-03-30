import React, { useEffect, useState } from 'react';

import Cookies from 'js-cookie';

import { getOrderByUsername } from '../../services/OrderServices';

import Order from './Order';
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
                    <span type="button" onClick={props.onClick} className="btn btn-info"><i class="fas fa-arrow-circle-left"></i> Quay trở lại</span>
                </div>
            </div>
            <div  className="row text-black">
                <div className="col-md-12">
                    <h3>Địa chỉ nhận hàng</h3>
                    <p>{order.customer && order.customer.name}</p>
                    <p>{order.customer && order.customer.phone}</p>
                    <p>{order.address ? (order.address.street + ", " + order.address.town + ", " + order.address.ward + ", " + order.address.district + ", " + order.address.city) : (order.customer.address.street + ", " + order.customer.address.town + ", " + order.customer.address.ward + ", " + order.customer.address.district + ", " + order.customer.address.city)}</p>
                    <span>Ngày thanh toán: {order.billDate}</span>
                    <hr className="text-info"/>
                </div>
            </div>
            <div className="row text-black">
                <div className="col-md-12">
                    {
                        order.listOrderDetail.map((orderDetail, key) =>
                        <Order turnOnBtn={false} key={key} productName={orderDetail.product.name} inventory={orderDetail.quantity} price={orderDetail.product.price} total={orderDetail.unitPrice}/>
                        )
                    }
                </div>
                <div className="col-md-12">
                    <span className="text-uppercase font-weight-bold">Ghi chú: </span>{order.note}
                </div>
                <div className="col-md-9">
                    <span className="text-uppercase font-weight-bold">Phương thức thanh toán: </span>{order.payMethod}
                </div>
                <div className="col-md-3 text-info font-weight-bold">
                    Tổng tiền: {order.totalMoney}
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;