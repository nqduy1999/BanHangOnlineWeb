import React from 'react';

const Order = (props) => {
    return (
        <div className="card">
            <div className="container">
                <div className="row form-inline">
                    <div className="col-md-3">
                        <img style={{width: "150px"}} src={props.urlImage} alt="Đơn hàng"/>
                    </div>
                    <div className="col-md-5 text-primary">
                        <h5>{props.productName}</h5>
                    </div>
                    <div className="col-md-2 text-black">
                        <p>Số lượng: {props.inventory}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        {
                            props.turnOnBtn === true ? <p type="button" onClick={props.onClick} className="text-primary">Xem chi tiết</p> : ""
                        }
                    </div>
                    <div className="col-md-3 text-warning">
                        <p>Tổng tiền: {props.total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;