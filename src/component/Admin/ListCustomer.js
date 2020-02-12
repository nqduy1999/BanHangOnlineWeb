import React,{useState} from 'react';
import { Modal, Button } from 'react-bootstrap';

const ListCustomer = () => {
    const [showCt, setShowCt] = useState(false);
    const [showCn,setShowCn ] = useState(false);
    const handleClose = () => setShowCt(false);
    const handleShow = () => setShowCt(true);
    const handleCloseCn = () => setShowCn(false);
    const handleShowCn = () => setShowCn(true);

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
  <td> <button className="btn-warning"
       onClick={handleShow} >Click !</button></td>

      <td>
        <button className="btn-primary" onClick={handleClose} onClick={handleShowCn}
        >Cập nhật chi tiết</button>
      </td>
</tr>


</tbody>
</table>

      <Modal show={showCt} onHide={handleClose}>
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

      <Modal show={showCn} onHide={handleCloseCn}>
        <Modal.Header closeButton>
          <Modal.Title>Cập nhật chi tiết
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="md-form mt-3">
                <input type="text" id="materialContactFormName" className="form-control" />
                <label htmlFor="materialContactFormName">Tên khách hàng</label>
              </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCn}>
            Thoát
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
};

export default ListCustomer;