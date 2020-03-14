import Cookies from 'js-cookie';

import axios from "../untils/axios";

const config = {
    "Content-Type": "text/plain"
}
export const getListCity = () => {
    return axios({
        method: "GET",
        url: `address/city`
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

export const getListDistrict = (id) => {
    return axios({
        method: "GET",
        url: `address/district?id=${id}`,
        headers: config
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

export const getListWard = (id) => {
    return axios({
        method: "GET",
        url: `address/ward?id=${id}`,
        id,
        headers: config
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

export const payment = (data) => {
    return axios({
        method: "POST",
        url: `order/pay`,
        data,
        withCredentials: true,
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