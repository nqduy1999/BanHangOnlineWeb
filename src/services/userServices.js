import Cookies from 'js-cookie';
import axios from '../untils/axios';
export const login = (data) => {
    return axios({
        method: "POST",
        url: `dangnhap`,
        data
    })
    .then((res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };
    }).catch((err) => {
        return {
            data: null,
            error: true,
            complete: true
        };
    });
}
export const signup = (data) => {
    return axios({
        method: "POST",
        url: `dangky`,
        data
    })
    .then((res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };
    }).catch((err) => {
        return {
            data: null,
            error: true,
            complete: true
        };
    });
}

export const getProfile = (username) => {
    return axios({
        method: "GET",
        url: `khachhang/chitiet?username=${username}`,
        headers: {'Authorization': `Bearer ${Cookies.get("authtoken")}`}
    })
    .then(async (res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };
    }).catch(async(err) => {
        return {
            data: null,
            error: true,
            complete: true
        };
    });
}