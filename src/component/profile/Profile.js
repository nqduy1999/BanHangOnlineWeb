import DateFnsUtils from '@date-io/date-fns';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

import { update } from '../../services/UserServices';
import { alertNotify } from '../../untils/alert';

import Address from './Address';

const Profile = () => {
    const state = useSelector(state => state.auth);
    const stateAddress = useSelector(state => state.address);
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
    const { register, handleSubmit } = useForm();
    const [isEdit, setIsEdit] = useState(false);
    const handleDateChange = date => {
        setUser({...user,
            birthday: date
        })
      setSelectedDate(date);
    };
    const [user, setUser] = useState({
        name: "",
        address: {

        },
        phone: "",
        identityCard: "",
        birthday: "",
        account: null
    });
    const handleInput = (e) => {
        setUser({...user,
            [e.target.name]: e.target.value
        })
    }
    let onSubmit = () => {
        if(isEdit === false) {
            update(user.account.username, user)
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
            address: stateAddress.address
        });
    }, [stateAddress]);
    useEffect(() => {
        if(state.user) {
            setSelectedDate(state.user.birthday);
            setUser({...user,
                name: state.user.name,
                address: state.user.address,
                phone: state.user.phone,
                identityCard: state.user.identityCard,
                birthday: state.user.birthday,
                account: state.user.account
            });
        }
    }, [state]);
    return (
        <form className="container card" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className={isEdit ? "col-md-6" : "col-md-12"}>
                    <div className="form-group">
                        <label>Họ và tên</label>
                        <input type="text" name="name" readOnly={isEdit ? false : true} className="form-control" id="name" onChange={handleInput} value={user.name ? user.name : ""} placeholder="Họ và tên của bạn"/>
                    </div>
                    <div className="form-group">
                        <label>Số điện thoại</label>
                        <input type="text" name="phone" readOnly={isEdit ? false : true} className="form-control" id="phone" onChange={handleInput} value={user.phone ? user.phone : ""}  placeholder="Số điện thoại của bạn"/>
                    </div>
                    <div className="form-group">
                        <label>CMND</label>
                        <input type="text" name="identityCard" readOnly={isEdit ? false : true} className="form-control" id="identityCard" onChange={handleInput} value={ user.identityCard ? user.identityCard : ""}  placeholder="CMND của bạn"/>
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
                            <input readOnly type="text" className="form-control" id="ID" value={user.address ? (user.address.street + ", " + user.address.town + ", " + user.address.ward + ", " + user.address.district + ", " + user.address.city) : ""}  placeholder="Địa chỉ giao hàng"/>
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