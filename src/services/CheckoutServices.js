import Cookies from 'js-cookie';

import axios from "../untils/axios";

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
