import React from 'react';
import ProductItem from './ProductItem';

const ProductTable = () => {
const renderProductItem =()=>{
    console.log(this.props.useList);
        return this.props.useList.map((item, index)=>(
            
            <ProductItem
            key={index}
            item={item}
            >
            </ProductItem>
            
        ));
    }
    return (
        <div>
            <table className="table table-light">
<thead>
<tr>
  <td scope="col">STT</td>
  <td scope="col">Tên</td>
  <td scope="col">Giá</td>
  <td scope="col">Số lượng</td>
  <td> Cập Nhật
      </td>      
</tr>
</thead>
<tbody>
    {renderProductItem}
</tbody>
</table>
        </div>
    );
  
};

export default ProductTable;