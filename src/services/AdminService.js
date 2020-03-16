import axios from "../untils/axios";
import Cookies from 'js-cookie'
export const getListProduct = (index) => {
    return axios({
        method: "GET",
        url: `product/list`
    })
        .then((res) => {
            return {
                data: res.data,
                error: false,
                complete: true
            };

        })
        .catch(() => {
            return {
                data: null,
                error: true,
                complete: true
            }
        })
}
export const removeProduct = (id) =>{
    return axios({
        method: "POST",
        url:`admin/product/delete?id=${id}`
    })
    .then((res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };

    })
    .catch(() => {
        return {
            data: null,
            error: true,
            complete: true
        }
    })
}
export const addProduct = (value) =>{
    return axios({
        method: "POST",
        url:`admin/product/add`,
        data:value
    })
    .then((res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };

    })
    .catch(() => {
        return {
            data: null,
            error: true,
            complete: true
        }
    })
}
export const updateProduct = (id, value) =>{
    return axios({
        method:"POST",
        url:`admin/product/update?id=${id}`,
        data:value
    })
    .then((res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };

    })
    .catch(() => {
        return {
            data: null,
            error: true,
            complete: true
        }
    })
}
//
export const getListCus = () => {
    return axios({
        method: "GET",
        url: `admin/customer/list`,
        headers: {'Authorization': `Bearer ${Cookies.get("authtoken")}`}
    })
        .then((res) => {
            return {
                data: res.data,
                error: false,
                complete: true
            };

        })
        .catch(() => {
            return {
                data: null,
                error: true,
                complete: true
            }
        })
}
export const getDetailCus = (username,) =>{
    return axios({
        method:"GET",
        url:`customer/detail?username=${username}`,
        headers: {'Authorization': `Bearer ${Cookies.get("authtoken")}`}
    })
    .then((res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };

    })
    .catch(() => {
        return {
            data: null,
            error: true,
            complete: true
        }
    })
}
export const updateCus = (username, value) =>{
    return axios({
        method:"POST",
        url:`customer/update?username=${username}`,
        data:value,
        headers: {'Authorization': `Bearer ${Cookies.get("authtoken")}`}
    })
    .then((res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };

    })
    .catch(() => {
        return {
            data: null,
            error: true,
            complete: true
        }
    })}