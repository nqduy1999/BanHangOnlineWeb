import React from 'react';
import { Modal, Button } from 'react-bootstrap';
const ModalDetail = (props) => {
    return (
        <div>
                  <Modal  {...props} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Chi tiết khách hàng
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Khách hàng chưa cập nhật </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Thoát
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
};

export default ModalDetail;