import React,{useState} from 'react';
import { Modal, Button } from 'react-bootstrap';

const ListCustomer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
        <h1>Danh sách khách hàng </h1>
<table className="table table-light">
<thead>
<tr>
  <td scope="col">ID</td>
  <td scope="col">Tầi khoản</td>
  <td scope="col">Email</td>
  <td scope="col">Xem chi tiết</td>
  <td> Cập Nhật
      </td>      
</tr>
</thead>
<tbody>
<tr>
  <th scope="row">1</th>
  <td>nqduy1999</td>
  <td>nqduy1999@gmail.com</td>
  <td> <button className="btn-warning" data-toggle="modal" data-target="#modelId"
       onClick={handleShow} >Click !</button></td>

      <td>
        <button className="btn-primary" data-toggle="modal" data-target="#modelId"
        >Cập nhật chi tiết</button>
      </td>
      <td>
        <button className="btn-danger" data-toggle="modal" data-target="#modelId"
        >Xoá</button>
      </td>
</tr>


</tbody>
</table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chi tiết khách hàng
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Khách hàng chưa cập nhật </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Thoát
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
};

export default ListCustomer;