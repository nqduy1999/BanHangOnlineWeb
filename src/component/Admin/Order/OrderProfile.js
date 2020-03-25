import React, { useEffect, useState } from "react";
import { getDetailCus } from "../../../services/AdminService";
import { Link, Redirect } from "react-router-dom";
import { alertNotify } from "../../../untils/alert";
import { useSelector } from "react-redux";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
const OrderProfile = props => {
  return (
<div className="modal fade" id="xemchitiethd" tabIndex={-1} role="dialog" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
      </div>
      <div className="modal-body">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
      <h5 className="text-center" id="xemchitiet">Thông tin hoá đơn</h5>
      <div className="table100 ver6 m-b-110">
      <table data-vertable="ver6">
        <thead>
          <tr className="row100 head">
            <th className="column100 column1" data-column="column1">
              Tên Khách hàng
            </th>
            <th className="column100 column2" data-column="column2">
              Số điện thoại
            </th>
            <th className="column100 column3" data-column="column3">
             Số CMND
            </th>
            <th className="column100 column4" data-column="column4">
            Ngày Sinh
            </th>
            <th className="column100 column5" data-column="column5">
          Hoá đơn đã đặt
            </th>
          </tr>
        </thead>
      </table>
    </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

  );
};

export default OrderProfile;
