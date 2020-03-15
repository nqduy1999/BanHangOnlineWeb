import React from 'react';

const Order = (props) => {
    return (
        <div className="card mr-5 mb-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img style={{width: "150px"}} src="https://www.ankhang.vn/media/product/15114-em908.jpg" alt="Đơn hàng"/>
                    </div>
                    <div className="col-md-5 text-black">
                        <h5>{props.productName}</h5>
                    </div>
                    <div className="col-md-2 text-black">
                        <p>Số lượng: {props.inventory}</p>
                    </div>
                    <div className="col-md-2 text-black">
                        <p>Giá: {props.price}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <button type="button" onClick={props.onClick} className="btn btn-primary">Xem chi tiết</button>
                    </div>
                    <div className="col-md-3 text-primary">
                        <p>Tổng tiền: {props.total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;