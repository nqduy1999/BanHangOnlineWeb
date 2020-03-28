import React, { useEffect, useState } from "react";
import { getDetailCus, updateCus } from "../../../services/AdminService";
import { useSelector } from "react-redux";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { useForm } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import { alertNotify } from "../../../untils/alert";
import Address from "../../profile/Address";
const CustomerProfile = props => {
  const [customer, setCustomer] = useState({
    id: "",
    name: "",
    address: {},
    phone: "",
    identityCard: "",
    birthday: ""
  });
  const { register, handleSubmit, errors } = useForm();
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );
  const state = useSelector(state => state.admin);
  const stateAddress = useSelector(state => state.address);
  const handleDateChange = date => {
    setCustomer({ ...customer, birthday: date });
    setSelectedDate(date);
  };
  useEffect(() => {
    setCustomer({ ...customer,
      address: stateAddress.address });
  }, [stateAddress]);
  useEffect(() => {
     setSelectedDate(props.customerUpdate.birthday);
      setCustomer({
        ...customer,
        id: props.customerUpdate.id,
        name: props.customerUpdate.name,
        address: props.customerUpdate.address,
        phone: props.customerUpdate.phone,
        identityCard: props.customerUpdate.identityCard,
        birthday: props.customerUpdate.birthday
      });
  }, []);
  const handleInput = e => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
    console.log(customer);
  };
  const onSubmit = value => {
    console.log(value);
    let customerUp = {
      name: value.name,
      phone: value.phone,
      identityCard: value.identityCard,
      birthday: value.birthday
    };
    updateCus(customer.account.username, customerUp).then(res => {
      alertNotify("Trạng Thái", "Cập Nhật Thành Công ", "success");
    });
  };
  return (
    <div
      className="modal fade"
      id="xemchitiet"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header"></div>
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <h5 className="text-center" id="xemchitiet">
              Thông tin khách hàng
            </h5>
            <form>
              <div className="form-group">
                <label htmlFor="recipient-name" className="col-form-label">
                  Id:
                </label>
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  value={customer.id}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="col-form-label">
                  Tên :
                </label>
                <input
                  type="text"
                  readOnly={props.edit ? false : true}
                  className="form-control"
                  onChange={handleInput}
                  value={
                    customer.name ? customer.name : "Khách chưa cập nhật tên !"
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="col-form-label">
                  Ngày sinh :
                </label>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    className="form-control"
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    readOnly={props.edit ? false : true}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="col-form-label">
                  CMND :
                </label>
                <input
                  type="text"
                  readOnly={props.edit ? false : true}
                  className="form-control"
                  value={
                    customer.identityCard === null
                      ? "Khách chưa cập nhật CMND !"
                      : customer.identityCard
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="col-form-label">
                  Số điện thoại :
                </label>
                <input
                  type="text"
                  readOnly={props.edit ? false : true}
                  className="form-control"
                  value={
                    customer.phone === null
                      ? "Khách chưa cập nhật số điện thoại !"
                      : customer.phone
                  }
                />
              </div>
              <div className="form-group row">
              {
                    props.edit ?
                    <div className="col-md-12">
                        <div className="form-group">
                            <Address/>
                        </div>
                    </div>
                    :
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Địa chỉ</label>
                            <input readOnly type="text" className="form-control" id="ID" value={customer.address ? (customer.address.street + ", " + customer.address.town + ", " + customer.address.ward + ", " + customer.address.district + ", " + customer.address.city) : ""}  placeholder="Địa chỉ giao hàng"/>
                        </div>
                    </div>
                }
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-primary"
              data-dismiss="modal"
              readOnly={props.edit ? false : true}
            >
              Cập Nhật
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
