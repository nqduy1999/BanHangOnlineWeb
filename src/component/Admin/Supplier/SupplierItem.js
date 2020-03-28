import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';

const SupplierItem = (props) => {
    const [supplier, setSupplier] = useState({
        name:"",
        description:"",
      })
      useEffect(() => {
        setSupplier(props.supplier);
      }, )
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
                <Button variant="contained" color="primary">Xoá</Button>
                </td>
              </tr>
      </tbody>
    );
};

export default SupplierItem;