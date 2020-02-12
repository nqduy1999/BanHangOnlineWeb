import React from 'react';

const ListProduct = () => {
    return (
        <div>
            <h1>Danh sách sản phẩm </h1>
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

{/* <td>stt</td>
          <td>Tên</td>
          <td>Giá</td>
          <td>Nhà cung cấp</td>
          <td>
          </td>
          <td>
            <select
              className="form-control"
                          >
              <option value="inactive">Inactive</option>
              <option value="active">Active</option>
            </select>
          </td>
  
        */}
        </div>
    );
};

export default ListProduct;