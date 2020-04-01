import React, { useEffect, useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { useForm } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import { useSelector } from "react-redux";
import Address from "../../profile/Address";
const CustomerProfile = props => {
  const [customer, setCustomer] = useState({
    id: "",
    name: "",
    phone: "",
    identityCard: "",
    birthday: "",
    address: {}
  });
  const handleInput = e => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
    console.log(customer);
  };
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );
  const { register, handleSubmit } = useForm();
  const state = useSelector(state => state.admin);
  const stateAddress = useSelector(state => state.address);
  const handleDateChange = date => {
    console.log(date);
    setCustomer({ ...customer, birthday: date });
    setSelectedDate(date);
  };
  useEffect(() => {
    setCustomer({ ...customer, address: stateAddress.address });
  }, [stateAddress]);
  const onSubmit = () => {
    console.log(state.customer.account.username);
    props.handleUpdateCustomer(state.customer.account.username, customer);
  };
  useEffect(() => {
    console.log(state.customer);
    if (state.customer) {
      setSelectedDate(state.customer.birthday);
      setCustomer({
        ...customer,
        id: state.customer.id,
        name: state.customer.name,
        address: state.customer.address,
        phone: state.customer.phone,
        identityCard: state.customer.identityCard,
        birthday: state.customer.birthday
      });
    }
  }, [state]);
  return (
    <div
      className="modal fade"
      id="xemchitiet"
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="recipient-name" className="col-form-label">
                  Id:
                </label>
                <input
                  type="text"
                  readOnly
                  name="id"
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
                  name="name"
                  readOnly={props.edit ? false : true}
                  className="form-control"
                  onChange={handleInput}
                  ref={register}
                  value={customer.name ? customer.name : ""}
                  placeholder="Khách chưa cập nhật tên"
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
                    disabled={props.edit ? false : true}
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
                  onChange={handleInput}
                  ref={register}
                  name="identityCard"
                  value={
                    customer.identityCard === null ? "" : customer.identityCard
                  }
                  placeholder="Khách chưa cập nhật CMND"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="col-form-label">
                  Số điện thoại :
                </label>
                <input
                  type="text"
                  name="phone"
                  readOnly={props.edit ? false : true}
                  onChange={handleInput}
                  ref={register}
                  className="form-control"
                  value={customer.phone === null ? "" : customer.phone}
                  placeholder="Khách chưa cập nhật SĐT"
                />
              </div>
              {props.edit ? (
                <div className="form-group">
                  <Address />
                </div>
              ) : (
                <div className="form-group">
                  <label>Địa chỉ</label>
                  <input
                    readOnly
                    type="text"
                    className="form-control"
                    id="ID"
                    value={
                      customer.address
                        ? customer.address.street +
                          ", " +
                          customer.address.town +
                          ", " +
                          customer.address.ward +
                          ", " +
                          customer.address.district +
                          ", " +
                          customer.address.city
                        : ""
                    }
                    placeholder="Địa chỉ giao hàng"
                  />
                </div>
              )}
              {props.hideButton === true ? (
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Đóng
                  </button>
                </div>
              ) : (
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
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
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
