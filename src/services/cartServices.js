import axios from "../untils/axios";
axios.defaults.withCredentials = true; //Bật true để trình duyệt tự động add Set-Cookie JSESSION Id vào cookie web (gg xem thêm)
export const addProductToCart = (data) => {
    return axios({
        method: "POST",
        url: `giohang/them`,
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

export const getAllCart = () => {
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

export const update = (data) => {
    return axios({
        method: "POST",
        url: `giohang/capnhat`,
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

export const remove = (id) => {
    return axios({
        method: "POST",
        url: `giohang/xoa?id=${id}`
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