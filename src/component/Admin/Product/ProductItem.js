import React from 'react';
const ProductItem = (props) => {
    const {id, name, description, price, inventory} = props.product
   return (
        <tbody>
            <tr>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>{inventory}</td>
                <td></td>
                <td>
                    <button onClick={()=>{props.removePd(id)}} 
                        className=" btn-danger">
                        Xoá
                    </button>
                </td>
                <td>
                    <button className="btn-primary" data-toggle="modal"
                        data-target="#capnhat"
                        onClick={()=> props.getUpdateUser(props.product)}
                    >Sửa</button>
                </td>
            </tr>
        </tbody>
    );
};

export default ProductItem;