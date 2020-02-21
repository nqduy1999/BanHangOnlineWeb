import React from 'react';
import ModalAddProduct from './ModalAddProduct.js';
import SearchProduct from './SearchProduct.js';
const Product = () => {
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
<tr>
  <th scope="row">1</th>
  <td>Bút lông</td>
  <td>1000d</td>
  <td>15</td>
  <td>
        <button
                      className=" btn-danger">
          Xoá
        </button>
      </td>
      <td>
        <button className="btn-primary" data-toggle="modal" data-target="#modelId"
        >Sửa</button>
      </td>
</tr>
<tr>
  <th scope="row">2</th>
  <td>Bú màu</td>
  <td>4000d</td>
  <td>1</td>
  <td>
        <button
                      className=" btn-danger">
          Xoá
        </button>
      </td>
      <td>
        <button className="btn-primary" data-toggle="modal" data-target="#modelId"
        >Sửa</button>
      </td>
</tr>
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
        <button className="btn-primary" data-toggle="modal" data-target="#modelId"
        >Sửa</button>
      </td>
</tr>
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
        <button className="btn-primary" data-toggle="modal" data-target="#modelId"
        >Sửa</button>
      </td>
</tr>  <tr>
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
        <button className="btn-primary" data-toggle="modal" data-target="#modelId"
        >Sửa</button>
      </td>
</tr>  <tr>
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
        <button className="btn-primary" data-toggle="modal" data-target="#modelId"
        >Sửa</button>
      </td>
</tr>  <tr>
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
        <button className="btn-primary" data-toggle="modal" data-target="#modelId"
        >Sửa</button>
      </td>
</tr>
</tbody>
</table>
<ModalAddProduct/>
    </div>
    );
};

export default Product;