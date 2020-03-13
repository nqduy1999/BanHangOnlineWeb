import DateFnsUtils from '@date-io/date-fns';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

import { update } from '../../services/userServices';
import { alertNotify } from '../../untils/alert';

import Address from './Address';

const Profile = () => {
    const state = useSelector(state => state.auth);
    const stateAddress = useSelector(state => state.address);
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
    const { register, handleSubmit, errors } = useForm();
    const [isEdit, setIsEdit] = useState(false);
    const handleDateChange = date => {
        setUser({...user,
            ngaySinh: date
        })
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
        if(isEdit === false) {
            update(user.taiKhoan.taiKhoan, user)
            .then(async (res) => {
                if(res.error !== true && res.data.code === 0) {
                    alertNotify("Thông báo", "Cập nhật thành công", "success");
                    //state.user dc update bên phía direction nên ko cần cập nhật lại ở đây
                } else {
                    alertNotify("Thông báo", res.data.message, "error");
                }
            })
        }
    }
    // chạy khi địa chỉ được thay đổi
    useEffect(() => {
        setUser({...user,
            diaChi: stateAddress.address
        });
    }, [stateAddress]);
    useEffect(() => {
        if(state.user) {
            setSelectedDate(state.user.ngaySinh);
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
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className={isEdit ? "col-md-6" : "col-md-12"}>
                    <div className="form-group">
                        <label>Họ và tên</label>
                        <input type="text" readOnly={isEdit ? false : true} className="form-control" id="name" onChange={e => setUser({...user, tenKhachHang: e.target.value})} value={user.tenKhachHang} placeholder="Họ và tên của bạn"/>
                    </div>
                    <div className="form-group">
                        <label>Số điện thoại</label>
                        <input type="text" readOnly={isEdit ? false : true} className="form-control" id="phone" onChange={e => setUser({...user, dienThoai: e.target.value})} value={user.dienThoai}  placeholder="Số điện thoại của bạn"/>
                    </div>
                    <div className="form-group">
                        <label>CMND</label>
                        <input type="text" readOnly={isEdit ? false : true} className="form-control" id="ID" onChange={e => setUser({...user, cmnd: e.target.value})} value={user.cmnd}  placeholder="CMND của bạn"/>
                    </div>
                    <div className="form-group">
                        <label>Ngày sinh</label>
                        <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                        <KeyboardDatePicker className="form-control"
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            disabled={isEdit ? false : true}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                            'aria-label': 'change date',
                            }}
                        />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
                {
                    isEdit ?
                    <div className="col-md-6">
                        <div className="form-group">
                            <Address/>
                        </div>
                    </div>
                    :
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Địa chỉ</label>
                            <input readOnly type="text" className="form-control" id="ID" onChange={e => setUser({...user, cmnd: e.target.value})} value={user.diaChi ? (user.diaChi.duongSoNha + ", " + user.diaChi.khuPho + ", " + user.diaChi.phuongXa + ", " + user.diaChi.quanHuyen + ", " + user.diaChi.tinhThanhPho) : ""}  placeholder="Địa chỉ giao hàng"/>
                        </div>
                    </div>
                }
            </div>
            {
                isEdit ?
                <button type="submit" onClick={() => setIsEdit(false)} className="btn btn-primary">Lưu lại</button>
                    :
                <button onClick={() => setIsEdit(true)} className="btn btn-primary">Chỉnh sửa</button>
            }
        </form>
    );
};

export default Profile;