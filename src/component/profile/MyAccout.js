import React, { useEffect, useState } from 'react';

import Cookies from 'js-cookie';

import { getAllOrder } from '../../services/orderServices';

import Order from './Order';
import Profile from './Profile';

const MyAccount = () => {
    const [listOrder, setListOrder] = useState([]);
    useEffect(() => {
        getAllOrder(Cookies.get("username")).then((res) => {
            if(res.error !== true && res.data.code === 0) {
                setListOrder(res.data.result);
            }
        })
    }, []);
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="true">Thông tin cá nhân</a>
                        <a className="nav-link" id="v-pills-order-tab" data-toggle="pill" href="#v-pills-order" role="tab" aria-controls="v-pills-order" aria-selected="false">Đơn hàng đã đặt mua</a>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <Profile/>
                        </div>
                        <div className="tab-pane fade" id="v-pills-order" role="tabpanel" aria-labelledby="v-pills-order-tab">
                            {
                                listOrder && listOrder.map((order) => (
                                    order.danhsachCTHD.map((orderDetail, key) =>
                                        <Order key={key} productName={orderDetail.sanPham.tenSanPham} inventory={orderDetail.soLuong} price={orderDetail.sanPham.giaSanPham} total={orderDetail.donGia}/>
                                    )
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