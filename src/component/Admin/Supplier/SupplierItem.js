import React, { useEffect } from 'react';
import { useState } from 'react';

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
              </tr>
      </tbody>
    );
};

export default SupplierItem;