import React from 'react';

const ProductItem = () => {
    return (
         <tr>
  <th scope="row">3</th>
  <td>Bút Bi</td>
  <td>6000d</td>
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