import axios from '../untils/axios';
export const getOrder = () => {
    return axios({
        method: "GET",
        url: `cart/data`
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
        url: `product/page?index=${index}`
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
        url: `product/detail?id=${id}`
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
