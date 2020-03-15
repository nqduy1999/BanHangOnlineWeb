import axios from "../untils/axios";
import Cookies from 'js-cookie';
export const addProductToCart = (data) => {
    return axios({
        method: "POST",
        url: `cart/add?username=${Cookies.get("username")}`,
        data,
        withCredentials: true // bật true để tự động set JSESSIONID Cookie vào request, ko để ở ngoài hàm vì khi chạy nó sẽ tự động thay đổi JSSESSIONID
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

export const getAllCart = () => {
    return axios({
        method: "GET",
        url: `cart/data`,
        withCredentials: true
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

export const update = (data) => {
    return axios({
        method: "POST",
        url: `cart/update`,
        data,
        withCredentials: true
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

export const remove = (id) => {
    return axios({
        method: "POST",
        url: `cart/delete?id=${id}`,
        withCredentials: true
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