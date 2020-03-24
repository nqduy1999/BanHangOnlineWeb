import React, { useEffect, useState } from "react";
import { getDetailCus } from "../../../services/AdminService";
import { Link, Redirect } from "react-router-dom";
import { alertNotify } from "../../../untils/alert";
import { useSelector } from "react-redux";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
const CustomerProfile = props => {
  const [customer, setCustomer] = useState({
    id: "",
    name: "",
    address: {},
    phone: "",
    identityCard: "",
    birthday: ""
  });
  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'))
  const state = useSelector(state => state.admin);
  useEffect(() => {
    if(state.customer){
      getDetailCus(state.customer.account.username)
      .then((res)=>{
        setCustomer(res.data.result);
        setSelectedDate(res.data.result.birthday)
      })    
    }
  },[state])
  const handleDateChange = date => {
    setCustomer({...customer,
        birthday: date
    })
  setSelectedDate(date);
};
  return (
<div className="modal fade" id="xemchitiet" tabIndex={-1} role="dialog" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
      </div>
      <div className="modal-body">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
      <h5 className="text-center" id="xemchitiet">Thông tin khách hàng</h5>
        <form>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">Id:</label>
            <input type="text" readOnly className="form-control" value={customer.id}/>
          </div>
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label">Tên :</label>
            <input type="text" readOnly className="form-control" value={customer.name === null ? "Khách chưa cập nhật tên !" : customer.name}/>
          </div>
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label">Ngày sinh :</label>
            <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                        <KeyboardDatePicker className="form-control"
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            readOnly={props.edit ? false : true}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                            'aria-label': 'change date',
                            }}
                        />
          </MuiPickersUtilsProvider>          </div>
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label">CMND :</label>
            <input type="text" readOnly={props.edit ? false : true} className="form-control" value={customer.identityCard === null ? "Khách chưa cập nhật CMND !" : customer.identityCard}/>
          </div>
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label">Số điện thoại :</label>
            <input type="text" readOnly className="form-control" value={customer.phone === null ? "Khách chưa cập nhật số điện thoại !" : customer.phone}/>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Cập Nhật</button>
      </div>
    </div>
  </div>
</div>

  );
};

export default CustomerProfile;
