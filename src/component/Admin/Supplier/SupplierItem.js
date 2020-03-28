import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { alertYesNo } from '../../../untils/alert';
import Swal from 'sweetalert2';

const SupplierItem = (props) => {
    const [supplier, setSupplier] = useState({
        name:"",
        description:"",
      })
      useEffect(() => {
        setSupplier(props.supplier);
      }, )
      const deleteSupplier = () => {
        alertYesNo("Thông báo", "Bạn có muốn xoá nhà cung cấp ", "warning", "Yes").then(
          res => {
            if (res.value) {
              Swal.fire(
                'Thành Công',
                'Sản phẩm của bạn đã được xoá',
                'success'
              )
              props.deleteSupplier(supplier.id);
            }
          }
        );
      };
    return (
        <tbody>
        <tr className="row100">
                <td className="column100 column1" data-column="column1">
                  {supplier.id}
                </td>
                <td className="column100 column2" data-column="column2">
                  {supplier.name}              </td>
                <td className="column100 column3" data-column="column3">
                  {supplier.description}
                </td>
                <td className="column100 column4" data-column="column3">
                <Button variant="contained" color="primary" onClick={deleteSupplier}>Xoá</Button>
                <Button variant="contained" color="secondary">Cập Nhật</Button>
                </td>
              </tr>
      </tbody>
    );
};

export default SupplierItem;