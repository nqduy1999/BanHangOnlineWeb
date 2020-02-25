import React from 'react';

const ProductItem = () => {
  // const {
  //   id, tenSanpham, gia, soLuong, hinhAnh
  // }= this.props.item;
    return (
         <tr>
  <th scope="row">hi</th>
  <td>haha</td>
  <td>hi</td>
  <td>15</td>
  <td>
        <button
                      className=" btn-danger">
          Xoá
        </button>
      </td>
      <td>
        <button className="btn-primary" data-toggle="modal" data-target="#themsanpham"
        >Sửa</button>
      </td>
</tr>
    );
};

export default ProductItem;