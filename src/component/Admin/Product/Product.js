import React from 'react';
import ModalAddProduct from './ModalAddProduct.js';
import SearchProduct from './SearchProduct.js';
import { useState } from 'react';
import ProductTable from './ProductTable.js';
const Product = () => {
    const [id, CountId]=useState(1);
    const [user, updateUser]=useState(null);
    const [filter, setFilter]= useState([]);
    const [keyWord, setKeyWord]=useState('');
    return (
        <div>
        <div className="d-flex flex-row bd-highlight mb-3">
  <div className="p-2 bd-highlight">        
  <h1>Danh sách sản phẩm </h1>
  </div>
  <div className="p-2 bd-highlight ml-5 mt-2 pl-5 pr-5">
      <SearchProduct/>
  </div>
  <div className="p-2 bd-highlight ml-5">
  <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#themsanpham">
    Thêm sản phẩm
    </button>
  </div>

        </div>
        <ProductTable/>
        <ModalAddProduct />
    </div>
    );
};

export default Product;