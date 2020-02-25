import React,{useState} from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalUpdateCus = (props) => {
    return (
        <div>
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Cập nhật chi tiết
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="md-form mt-3">
                <input type="text" id="materialContactFormName" className="form-control" />
                <label htmlFor="materialContactFormName">Tên khách hàng</label>
        </div>
        <div className="md-form mt-3">
                <input type="text" id="materialContactFormName" className="form-control" />
                <label htmlFor="materialContactFormName">Số điện thoại </label>
        </div>
        <div className="md-form mt-3">
                <input type="text" id="materialContactFormName" className="form-control" />
                <label htmlFor="materialContactFormName">Tên khách hàng</label>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"onClick={props.onHide}>
            Thoát
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
};

export default ModalUpdateCus;