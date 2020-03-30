import React, { useEffect, useState } from 'react';

import Cookies from 'js-cookie';

import { getListOrderByUsername } from '../../services/OrderServices';

import Order from './Order';
import OrderDetail from './OrderDetail';
import Profile from './Profile';

const MyAccount = () => {
    const [listOrder, setListOrder] = useState([]);
    const [isSeeDetail, setIsDetail] = useState(false);
    const [idOrder, setIdOrder] = useState("");
    useEffect(() => {
        getListOrderByUsername(Cookies.get("username")).then((res) => {
            if(res.error !== true && res.data.code === 0) {
                setListOrder(res.data.result);
            }
        })
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 card shadow">
                    <div className="nav flex-column nav-pills pt-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="true"><i class="fas fa-user-edit"></i> Thông tin cá nhân</a>
                        <a className="nav-link" id="v-pills-order-tab" data-toggle="pill" href="#v-pills-order" role="tab" aria-controls="v-pills-order" aria-selected="false"><i class="fab fa-amazon-pay"></i> Đơn hàng đã đặt mua</a>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="tab-content shadow" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <Profile/>
                        </div>
                        <div className="tab-pane fade" id="v-pills-order" role="tabpanel" aria-labelledby="v-pills-order-tab">
                            {
                                isSeeDetail ?
                                <OrderDetail onClick={() => {setIsDetail(false);}} id={idOrder}/>
                                :
                                listOrder && listOrder.map((order, key) => (
                                    order.listOrderDetail.map((orderDetail, key) => (
                                        key === 0 ?
                                            <Order turnOnBtn={true} onClick={() => {setIsDetail(true); setIdOrder(order.id)}} key={key} productName={orderDetail.product.name} inventory={order.listOrderDetail.length} price={orderDetail.product.unitPrice} total={order.totalMoney}/> : ""
                                    ))
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* end row*/}
        </div>
    );
};

export default MyAccount;