import React from 'react';
import ModalAddProduct from './ModalAddProduct.js';
import SearchProduct from './SearchProduct.js';
import { useState } from 'react';
import ProductTable from './ProductTable.js';
import hinh from "../../../resource/images/but_3_cay.jpg"
const Product = (props) => {
    const [useList, setUserList]=useState(
        [
        {
            id:Math.random(),
            tenSanpham: "But",
            gia: 1000,
            soluong: 10,
            hinhAnh:{hinh},
        },
        {
            id:Math.random(),
            tenSanpham: "Viet",
            gia: 1000,
            soluong: 10,
            hinhAnh:{hinh},
        },
    ]
        )
    const [user, updateUser]=useState(null);
    const [filter, setFilter]= useState([]);
    const [keyWord, setKeyWord]=useState('');
    const _addUser = user =>{
        const CloneUserList = [...useList];
        CloneUserList.push(user);
        setUserList({
            useList:CloneUserList
        })
    }
    const _updateUser = userId =>{
        const index = useList.findIndex(item => item.id === userId);
        index !==-1 && setUserList(preState => (preState.useList[index]= userId))
    }
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
    <ProductTable useList={{useList},{...props}}>{console.log(useList)
    }</ProductTable>
        <ModalAddProduct 
        _addUser={_addUser}
        />
    </div>
    );

};

export default Product;