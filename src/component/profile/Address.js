import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';

import { getListDistrict, getListWard, getListCity } from '../../services/checkoutServices';

const Address = () => {
    const dispatch = useDispatch();
    // React form
    const [address, setAddress] = useState({
      tinhThanhPho: "",
      quanHuyen: "",
      phuongXa: "",
      khuPho: "",
      duongSoNha: ""
    });
    // lấy danh sách thành phố
    const [dataCity, setDataCity] = useState([]);
    // lấy danh sách thị trấn thuộc quận huyện
    const [dataDistrict, setDataDistrict] = useState([]);
    // lưu danh sách thị trấn
    const [dataWard, setDataWard] = useState([]);
    //loading
    // lấy danh sách quận huyện thuộc thành phố
    const getListDistrictByCity = (values) => {
      if(values !== null) { // khi nhấn dấu x để xoá sẽ lỗi
        setAddress({...address,
          tinhThanhPho: values.name
        })
        getListDistrict(values.code).then((res) => {
          if(res.error !== true && res.data.code === 0) {
            let objDistrict = JSON.parse(res.data.result);
            let arrayDistrict = Object.keys(objDistrict).map(key => objDistrict[key]); // cần phải chuyển về mảng vì dữ liệu là 1 object
            setDataDistrict(arrayDistrict);
          }
        });
      }
    }
    // lấy danh sách quận huyện thuộc thành phố
    const getListWardByDistrict = (values) => {
      if(values !== null) { // khi nhấn dấu x để xoá sẽ lỗi
        setAddress({...address,
          quanHuyen: values.name
        })
        getListWard(values.code).then((res) => {
          if(res.error !== true && res.data.code === 0) {
            let objWard = JSON.parse(res.data.result);
            let arrayWard = Object.keys(objWard).map(key => objWard[key]); // cần phải chuyển về mảng vì dữ liệu là 1 object
            setDataWard(arrayWard);
          }
        });
      }
    }
    useEffect(() => {
      getListCity().then((res) => {
        if(res.error !== true && res.data.code === 0) {
          let objCity = JSON.parse(res.data.result);
          let arrayCity = Object.keys(objCity).map(key => objCity[key]); // cần phải chuyển về mảng vì dữ liệu là 1 object
          setDataCity(arrayCity);
        }
      });
    }, []);
    return (
        <div>
            <div className="form-group">
                <label htmlFor="c_country" className="text-black">Tỉnh/Thành Phố <span className="text-danger">*</span></label>
                <Autocomplete onChange={(e, values) => {getListDistrictByCity(values)}} id="combo-box-city"
                options={dataCity}
                getOptionLabel={option => option.name}
                renderInput={params => <TextField className="form-control" {...params} label="Tỉnh/Thành Phố" size="small" variant="outlined" />}/>
            </div>
            <div className="form-group">
            <label htmlFor="c_country" className="text-black">Quận/Huyện <span className="text-danger">*</span></label>
            <Autocomplete onChange={(e, values) => {getListWardByDistrict(values)}} id="combo-box-district"
                options={dataDistrict}
                getOptionLabel={option => option.name}
                renderInput={params => <TextField className="form-control" {...params} label="Quận/Huyện" size="small" variant="outlined" />}/>
            </div>
            <div className="form-group">
            <label htmlFor="c_country" className="text-black">Phường/Xã <span className="text-danger">*</span></label>
            <Autocomplete onChange={(e, values) => {values !== null ? setAddress({...address, phuongXa: values.name}) : setAddress({...address}); dispatch({type: "SET_ADDRESS", address: address});}}  id="combo-box-ward"
            options={dataWard}
            getOptionLabel={option => option.name}
            renderInput={params => <TextField className="form-control" {...params} label="Phường/Xã" size="small" variant="outlined" />}/>
            </div>
            <div className="form-group row">
            <div className="col-md-12">
                <label htmlFor="c_address" className="text-black">Khu phố <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="town" onChange={(e) => {setAddress({...address, khuPho: e.target.value}); dispatch({type: "SET_ADDRESS", address: address});}} name="town" placeholder="Khu phố" />
            </div>
            </div>
            <div className="form-group row">
            <div className="col-md-12">
                <label htmlFor="c_address" className="text-black">Địa chỉ <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="street" name="street" onChange={(e) => {setAddress({...address, duongSoNha: e.target.value}); dispatch({type: "SET_ADDRESS", address: address});}} placeholder="Tên đường/Số nhà" />
            </div>
            </div>
        </div>
    );
};

export default Address;