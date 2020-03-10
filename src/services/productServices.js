import axios from '../untils/axios';
axios.defaults.withCredentials = true; //Bật true để trình duyệt tự động add Set-Cookie JSESSION Id vào cookie web (gg xem thêm)
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
