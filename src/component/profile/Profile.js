import DateFnsUtils from '@date-io/date-fns';

import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import React, { useState, useEffect } from 'react';

import 'date-fns';

import { useForm } from 'react-hook-form';

import { useSelector } from 'react-redux';
import { alertNotify } from '../../untils/alert';
import Address from '../profile/Address';
import { update } from '../../services/userServices';
const Profile = () => {
    const state = useSelector(state => state.auth);
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
    const { register, handleSubmit, errors } = useForm();
    const handleDateChange = date => {
      setSelectedDate(date);
    };
    const [user, setUser] = useState({
        tenKhachHang: "",
        diaChi: {

        },
        dienThoai: "",
        cmnd: "",
        ngaySinh: "",
        taiKhoan: null
    });
    let onSubmit = () => {
        console.log(user);
        update(user.taiKhoan.taiKhoan, user)
            .then(async (res) => {
                if(res.error !== true && res.data.code === 0) {
                    alertNotify("Thông báo", "Cập nhật thành công", "success");
                    //state.user dc update bên phía direction nên ko cần cập nhật lại ở đây
                } else {
                    alertNotify("Thông báo",res.data.message, "error");
                }
            })

    }
    useEffect(() => {
        if(state.user) {
            setUser({...user, 
                tenKhachHang: state.user.tenKhachHang,
                diaChi: state.user.diaChi,
                dienThoai: state.user.dienThoai,
                cmnd: state.user.cmnd,
                ngaySinh: state.user.ngaySinh,
                taiKhoan: state.user.taiKhoan
            });
        }
    }, [state]);
    return (
        <div>
            <form className="container" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="true">Thông tin cá nhân</a>
                            <a className="nav-link" id="v-pills-order-tab" data-toggle="pill" href="#v-pills-order" role="tab" aria-controls="v-pills-order" aria-selected="false">Đơn hàng</a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Họ và tên</label>
                                            <input type="text" className="form-control" id="name" onChange={e => setUser({...user, tenKhachHang: e.target.value})} value={user.tenKhachHang} placeholder="Họ và tên của bạn"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Số điện thoại</label>
                                            <input type="text" className="form-control" id="phone" onChange={e => setUser({...user, dienThoai: e.target.value})} value={user.dienThoai}  placeholder="Số điện thoại của bạn"/>
                                        </div>
                                        <div className="form-group">
                                            <label>CMND</label>
                                            <input type="text" className="form-control" id="ID" onChange={e => setUser({...user, cmnd: e.target.value})} value={user.cmnd}  placeholder="CMND của bạn"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Ngày sinh</label>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker className="form-control"
                                                disableToolbar
                                                variant="inline"
                                                format="MM/dd/yyyy"
                                                margin="normal"
                                                id="date-picker-inline"
                                                label="Ngày sinh"
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                                }}
                                            />
                                            </MuiPickersUtilsProvider>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Address/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-order" role="tabpanel" aria-labelledby="v-pills-order-tab">...</div>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary">Lưu lại</button>
                        </div>
                    </div>
                </div>
                {/* end row*/}
            </form>
        </div>
    );
};

export default Profile;