import axios from '../untils/axios';
export const getOrder = () => {
    return axios({
        method: "GET",
        url: `giohang/dulieu`
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

export const getALlProduct = (index) => {
    return axios({
        method: "GET",
        url: `sanpham/trang?index=${index}`
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

export const getProductDetail = (id) => {
    return axios({
        method: "GET",
        url: `quanly/sanpham/chitiet?id=${id}`
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
