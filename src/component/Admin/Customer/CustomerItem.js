import React from 'react';
const CustomerItem = (props) => {

    return (
        <tbody>
            <tr>
                <th scope="row">{props.maKhachHang}</th>
                <td>{props.taiKhoan}</td>
                <td>{props.email}</td>
                <td> <button className="btn-warning">Click !</button></td>
                <td>
                    <button className="btn-primary">Cập nhật chi tiết</button>
                </td>
            </tr>
        </tbody>

    );
};

export default CustomerItem;