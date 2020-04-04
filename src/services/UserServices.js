import Cookies from 'js-cookie';

import axios from '../untils/axios';
export const login = (data) => {
    return axios({
        method: "POST",
        url: `login`,
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
        url: `register`,
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
        url: `customer/detail?username=${username}`,
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

export const update = (username, data) => {
    return axios({
        method: "POST",
        url: `customer/update?username=${username}`,
        data,
        headers: {'Authorization': `Bearer ${Cookies.get("authtoken")}`}
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
