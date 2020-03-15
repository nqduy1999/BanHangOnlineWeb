import React from 'react';
import { Link } from 'react-router-dom';
const CustomerItem = (props) => {
    const {username, email} = props.customer.account
    return (
        <tbody>
            <tr>
                <td>{username}</td>
                <td>{email}</td>
                <td> 
                <Link to={`danhsachkhachhang/profile/${username}`}>
                <button className="btn-warning">
                    Click !
                    </button>
                </Link>
                    </td>
                <td>
                <Link to={`danhsachkhachhang/update/${username}`}>
                    <button className="btn-primary">Cập nhật chi tiết</button>
                </Link>
                </td>
            </tr>
        </tbody>

    );
};

export default CustomerItem;