import Cookies from 'js-cookie';

import axios from "../untils/axios";
export const getListOrderByUsername = (username) => {
    return axios({
        method: "GET",
        url: `order/list?username=${username}`,
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

export const getOrderByUsername = (id, username) => {
    return axios({
        method: "GET",
        url: `order/detail?id=${id}&username=${username}`,
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
