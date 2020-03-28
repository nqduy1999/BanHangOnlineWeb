import React, { useState, useEffect } from 'react';

const CategoryItem = (props) => {
    const [category, setCategory] = useState({
        id:"",
        name:""
    })
    useEffect(() => {
        setCategory(props.category);
      }, )
    return (
        <tbody>
        <tr className="row100">
                <td className="column100 column1" data-column="column1">
                  {category.id}
                </td>
                <td className="column100 column2" data-column="column2">
                  {category.name}              
                </td>
              </tr>
      </tbody>
    );
};

export default CategoryItem;